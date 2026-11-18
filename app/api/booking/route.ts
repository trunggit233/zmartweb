import { NextResponse } from "next/server";
import { BookingFormData, BookingFormErrors, BookingResponse } from "@/types";

// In-memory rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 phút
const maxRequests = Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= maxRequests) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// Cleanup rate limit map định kỳ
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateLimitMap.entries()) {
      const valid = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, valid);
      }
    }
  }, 5 * 60 * 1000);
}

function validateBookingPayload(data: Partial<BookingFormData>): {
  isValid: boolean;
  errors: BookingFormErrors;
  sanitized: BookingFormData;
} {
  const errors: BookingFormErrors = {};

  const name = (data.name || "").trim();
  const rawPhone = (data.phone || "").replace(/[\s.-]/g, "");
  const email = (data.email || "").trim().toLowerCase();
  const service = (data.service || "").trim();
  const date = (data.date || "").trim();
  const timeSlot = (data.timeSlot || "").trim();
  const notes = (data.notes || "").trim();

  // 1. Kiểm tra Họ và tên
  if (!name) {
    errors.name = "Vui lòng nhập họ và tên của bạn.";
  } else if (name.length < 2) {
    errors.name = "Họ và tên cần có ít nhất 2 ký tự.";
  } else if (name.length > 100) {
    errors.name = "Họ và tên không được vượt quá 100 ký tự.";
  }

  // 2. Kiểm tra Số điện thoại (Định dạng Việt Nam: 10 chữ số)
  const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
  if (!rawPhone) {
    errors.phone = "Vui lòng nhập số điện thoại liên hệ.";
  } else if (!vnPhoneRegex.test(rawPhone)) {
    errors.phone = "Số điện thoại không hợp lệ (Ví dụ: 0912345678).";
  }

  // 3. Kiểm tra Email (nếu có điền)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.email = "Địa chỉ email không đúng định dạng.";
  }

  // 4. Kiểm tra Dịch vụ
  if (!service) {
    errors.service = "Vui lòng chọn dịch vụ bạn quan tâm.";
  }

  // 5. Kiểm tra Ngày hẹn
  if (!date) {
    errors.date = "Vui lòng chọn ngày bạn muốn tư vấn.";
  } else {
    const selectedDate = new Date(`${date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.date = "Ngày đã chọn không hợp lệ.";
    } else if (selectedDate < today) {
      errors.date = "Ngày hẹn tư vấn không thể ở trong quá khứ.";
    }
  }

  // 6. Kiểm tra Khung giờ
  if (!timeSlot) {
    errors.timeSlot = "Vui lòng chọn khung giờ hẹn mong muốn.";
  }

  // 7. Ghi chú tối đa 1000 ký tự
  if (notes.length > 1000) {
    errors.notes = "Nội dung ghi chú không được dài quá 1000 ký tự.";
  }

  const sanitized: BookingFormData = {
    name,
    phone: rawPhone,
    email,
    service,
    date,
    timeSlot,
    notes,
  };

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}

async function sendTelegramNotification(bookingId: string, data: BookingFormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = `🔔 *CÓ KHÁCH ĐẶT LỊCH MỚI!*
━━━━━━━━━━━━━━━━━━
🆔 *Mã:* \`${bookingId}\`
👤 *Khách hàng:* ${data.name}
📞 *SĐT / Zalo:* [${data.phone}](tel:${data.phone})
📧 *Email:* ${data.email || "Không có"}
💼 *Dịch vụ:* ${data.service}
📅 *Ngày hẹn:* ${data.date}
⏰ *Khung giờ:* ${data.timeSlot}
📝 *Ghi chú:* ${data.notes || "Không có"}
━━━━━━━━━━━━━━━━━━`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("[TELEGRAM SEND ERROR]:", error);
  }
}

async function sendGoogleSheetNotification(bookingId: string, data: BookingFormData) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId,
        ...data,
        createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
      }),
    });
  } catch (error) {
    console.error("[GOOGLE SHEET ERROR]:", error);
  }
}

export async function POST(request: Request) {
  try {
    // 1. Lấy Client IP (được Nginx chuyển tiếp qua header X-Forwarded-For)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor?.split(",")[0].trim() || realIp || "127.0.0.1";

    // 2. Kiểm tra Rate Limit
    if (isRateLimited(clientIp)) {
      const response: BookingResponse = {
        success: false,
        message: "Bạn thao tác quá nhanh. Vui lòng đợi 1 phút trước khi gửi yêu cầu tiếp theo.",
        errors: { form: "Vượt quá giới hạn gửi yêu cầu." },
      };
      return NextResponse.json(response, { status: 429 });
    }

    // 3. Parse JSON Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      const response: BookingResponse = {
        success: false,
        message: "Dữ liệu gửi lên không đúng định dạng JSON.",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // 4. Honeypot Check (chống spam bot)
    if (body._gotcha) {
      return NextResponse.json(
        {
          success: true,
          message: "Đặt lịch tư vấn thành công!",
          bookingId: `BK-BOT-${Date.now()}`,
        },
        { status: 200 }
      );
    }

    // 5. Validation dữ liệu đầu vào
    const { isValid, errors, sanitized } = validateBookingPayload(body);
    if (!isValid) {
      const response: BookingResponse = {
        success: false,
        message: "Thông tin đặt lịch chưa hợp lệ. Vui lòng kiểm tra lại các trường được đánh dấu.",
        errors,
      };
      return NextResponse.json(response, { status: 400 });
    }

    // 6. Tạo mã đặt lịch
    const bookingId = `BK-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // 7. Ghi Log chi tiết hệ thống (Server output)
    console.log("==========================================");
    console.log(`[BOOKING NEW] Mã: ${bookingId}`);
    console.log(`- Thời gian nhận: ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}`);
    console.log(`- IP khách hàng: ${clientIp}`);
    console.log(`- Họ và tên: ${sanitized.name}`);
    console.log(`- Số điện thoại: ${sanitized.phone}`);
    console.log(`- Email: ${sanitized.email || "Không cung cấp"}`);
    console.log(`- Dịch vụ quan tâm: ${sanitized.service}`);
    console.log(`- Ngày hẹn mong muốn: ${sanitized.date}`);
    console.log(`- Khung giờ: ${sanitized.timeSlot}`);
    console.log(`- Ghi chú: ${sanitized.notes || "Không có"}`);
    console.log("==========================================");

    // 8. Tự động gửi thông báo nếu có cấu hình biến môi trường
    Promise.allSettled([
      sendTelegramNotification(bookingId, sanitized),
      sendGoogleSheetNotification(bookingId, sanitized),
    ]);

    const response: BookingResponse = {
      success: true,
      message: "Đặt lịch tư vấn thành công! Chuyên viên ZmartWeb sẽ liên hệ với bạn theo đúng khung giờ đã chọn.",
      bookingId,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[BOOKING ERROR]:", error);
    const response: BookingResponse = {
      success: false,
      message: "Đã có lỗi xảy ra trên hệ thống. Vui lòng thử lại hoặc gọi trực tiếp qua Hotline.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
