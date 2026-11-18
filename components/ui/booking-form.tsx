"use client";

import { useState } from "react";
import {
  BookingFormData,
  BookingFormErrors,
  BookingResponse,
  BOOKING_SERVICES,
  BOOKING_TIME_SLOTS,
} from "@/types";
import {
  Calendar,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Loader2,
} from "lucide-react";

interface BookingFormProps {
  className?: string;
  defaultService?: string;
  onSuccess?: (bookingId: string) => void;
}

export default function BookingForm({
  className = "",
  defaultService,
  onSuccess,
}: BookingFormProps) {
  // Lấy ngày hôm nay theo chuẩn YYYY-MM-DD làm giá trị tối thiểu cho input date
  const todayStr = new Date().toISOString().split("T")[0];

  const initialForm: BookingFormData = {
    name: "",
    phone: "",
    email: "",
    service: defaultService || BOOKING_SERVICES[0],
    date: todayStr,
    timeSlot: BOOKING_TIME_SLOTS[0],
    notes: "",
    _gotcha: "",
  };

  const [formData, setFormData] = useState<BookingFormData>(initialForm);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    data: BookingFormData;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Xóa lỗi của field khi người dùng nhập dữ liệu
  const handleChange = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof BookingFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof BookingFormErrors];
        return next;
      });
    }
    if (serverError) setServerError(null);
  };

  // Client-side quick check
  const validateClient = (): boolean => {
    const errs: BookingFormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Vui lòng nhập họ và tên của bạn.";
    }
    const cleanPhone = formData.phone.replace(/[\s.-]/g, "");
    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
    if (!cleanPhone) {
      errs.phone = "Vui lòng nhập số điện thoại.";
    } else if (!vnPhoneRegex.test(cleanPhone)) {
      errs.phone = "Số điện thoại không hợp lệ (10 chữ số).";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Email không đúng định dạng.";
      }
    }

    if (!formData.date) {
      errs.date = "Vui lòng chọn ngày hẹn.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateClient()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: BookingResponse = await res.json();

      if (res.ok && result.success) {
        setSubmittedData({
          id: result.bookingId || `BK-${Date.now().toString(36).toUpperCase()}`,
          data: { ...formData },
        });
        if (onSuccess && result.bookingId) {
          onSuccess(result.bookingId);
        }
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerError(result.message || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch {
      setServerError("Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại mạng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData(initialForm);
    setErrors({});
    setServerError(null);
  };

  // Màn hình thông báo gửi thành công
  if (submittedData) {
    return (
      <div className={`rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-6 sm:p-10 text-center ${className}`}>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          Mã đặt lịch: {submittedData.id}
        </span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
          Đặt lịch tư vấn thành công!
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-emerald-800 leading-relaxed">
          Cảm ơn bạn <strong className="font-semibold">{submittedData.data.name}</strong>.
          Đội ngũ chuyên viên sẽ liên hệ qua số điện thoại{" "}
          <strong className="font-semibold">{submittedData.data.phone}</strong> vào khung giờ{" "}
          <strong className="font-semibold">{submittedData.data.timeSlot}</strong> ngày{" "}
          <strong className="font-semibold">{submittedData.data.date}</strong> để trao đổi chi tiết.
        </p>

        <div className="mx-auto mt-6 max-w-md rounded-xl border border-emerald-200/60 bg-white/90 p-4 text-left text-xs text-gray-700 shadow-2xs space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Dịch vụ:</span>
            <span className="font-semibold text-gray-900">{submittedData.data.service}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Thời gian hẹn:</span>
            <span className="font-semibold text-gray-900">
              {submittedData.data.timeSlot} - {submittedData.data.date}
            </span>
          </div>
          {submittedData.data.email && (
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500">Email:</span>
              <span className="font-semibold text-gray-900">{submittedData.data.email}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleReset}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1D1D1F] px-8 py-3 text-sm font-semibold text-white transition hover:bg-black hover:scale-102 active:scale-98"
        >
          Đặt lịch tư vấn khác
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-10 ${className}`}>
      <div className="border-b border-gray-100 pb-6">
        <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl">
          Đặt lịch tư vấn
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Chúng tôi sẽ cố gắng liên hệ sớm nhất có thể, bạn hãy điền thông tin để được tư vấn nhé.
        </p>
      </div>

      {serverError && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold">Không thể gửi yêu cầu</p>
            <p className="text-xs text-red-700 mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Honeypot field - ẩn hoàn toàn với người dùng thật, bẫy bot spam */}
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={(e) => handleChange("_gotcha", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {/* 1. Họ và tên & Số điện thoại */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#1D1D1F] transition focus:outline-none ${
                  errors.name
                    ? "border-red-500 bg-red-50/30 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/60 focus:border-[#1D1D1F] focus:bg-white"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Số điện thoại (Zalo) <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Phone className="h-4 w-4" />
              </div>
              <input
                type="tel"
                placeholder="0912 345 678"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#1D1D1F] transition focus:outline-none ${
                  errors.phone
                    ? "border-red-500 bg-red-50/30 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/60 focus:border-[#1D1D1F] focus:bg-white"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* 2. Email & Dịch vụ */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Email liên hệ <span className="text-xs text-gray-400 font-normal">(Không bắt buộc)</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                type="email"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#1D1D1F] transition focus:outline-none ${
                  errors.email
                    ? "border-red-500 bg-red-50/30 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/60 focus:border-[#1D1D1F] focus:bg-white"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Dịch vụ bạn quan tâm <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Briefcase className="h-4 w-4" />
              </div>
              <select
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 pl-10 pr-8 py-3 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:bg-white focus:outline-none cursor-pointer"
              >
                {BOOKING_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>
            )}
          </div>
        </div>

        {/* 3. Ngày hẹn & Khung giờ mong muốn */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Chọn ngày hẹn tư vấn <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Calendar className="h-4 w-4" />
              </div>
              <input
                type="date"
                min={todayStr}
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#1D1D1F] transition focus:outline-none cursor-pointer ${
                  errors.date
                    ? "border-red-500 bg-red-50/30 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/60 focus:border-[#1D1D1F] focus:bg-white"
                }`}
              />
            </div>
            {errors.date && (
              <p className="mt-1.5 text-xs text-red-600">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700">
              Khung giờ mong muốn <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Clock className="h-4 w-4" />
              </div>
              <select
                value={formData.timeSlot}
                onChange={(e) => handleChange("timeSlot", e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 pl-10 pr-8 py-3 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:bg-white focus:outline-none cursor-pointer"
              >
                {BOOKING_TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {errors.timeSlot && (
              <p className="mt-1.5 text-xs text-red-600">{errors.timeSlot}</p>
            )}
          </div>
        </div>

        {/* 4. Ghi chú yêu cầu */}
        <div>
          <label className="block text-xs font-semibold text-gray-700">
            Ghi chú
          </label>
          <div className="relative mt-2">
            <textarea
              rows={3}
              placeholder="Nội dung"
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/60 p-4 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:bg-white focus:outline-none"
            />
          </div>
          {errors.notes && (
            <p className="mt-1.5 text-xs text-red-600">{errors.notes}</p>
          )}
        </div>

        {/* Nút gửi form */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1D1D1F] px-8 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-black hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Đang gửi thông tin...
            </>
          ) : (
            <>
              Xác nhận đặt lịch tư vấn
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
