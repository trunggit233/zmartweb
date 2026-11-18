"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface WebsiteReason {
  id: string;
  order: string;
  title: string;
  explanation: string;
  keyHighlight?: string;
}

export const WEBSITE_REASONS: WebsiteReason[] = [
  {
    id: "position",
    order: "01",
    title: "Khẳng định vị thế và xây dựng niềm tin vững chắc",
    explanation:
      "Khách hàng có thể biết đến bạn qua một video ngắn trên TikTok hay một bài đăng Facebook. Nhưng khi chuẩn bị chi một khoản tiền lớn hoặc tìm đối tác B2B, phản xạ đầu tiên của họ luôn là tìm kiếm website. Một website chỉn chu với tên miền riêng là lời khẳng định doanh nghiệp hoạt động nghiêm túc, có pháp nhân rõ ràng và đáng tin cậy hơn bất kỳ trang mạng xã hội nào.",
    keyHighlight:
      "Website chính là văn phòng số đại diện cho uy tín của bạn trên môi trường Internet.",
  },
  {
    id: "marketing-hub",
    order: "02",
    title: "Tâm điểm hội tụ của mọi kênh truyền thông (Marketing Hub)",
    explanation:
      "Dù bạn chạy quảng cáo Facebook Ads, Google Ads, làm video TikTok, làm SEO hay phát triển kênh Zalo... tất cả các kênh này đều cần một điểm đến cuối cùng để chốt đơn. Nếu dẫn khách về sàn TMĐT hay inbox mạng xã hội, bạn rất dễ mất khách vì thuật toán gợi ý đối thủ. Website đóng vai trò là 'trụ sở chính' giữ chân khách hàng tập trung 100% vào giải pháp của bạn.",
    keyHighlight:
      "Mọi chiến dịch tiếp thị đều cần một đích đến do bạn làm chủ hoàn toàn luật chơi.",
  },
  {
    id: "conversion",
    order: "03",
    title: "Môi trường bán hàng tập trung, loại bỏ phân tâm",
    explanation:
      "Trên mạng xã hội, khách hàng liên tục bị làm phiền bởi thông báo tin nhắn, tin tức bạn bè hay video giải trí. Trên website, bạn toàn quyền thiết kế hành trình trải nghiệm liền mạch: từ khơi gợi nhu cầu, đưa ra giải pháp, trưng bày bằng chứng thực tế cho đến nút kêu gọi hành động (CTA) nổi bật. Điều này giúp tỷ lệ chuyển đổi từ người xem thành khách hàng cao hơn gấp nhiều lần.",
    keyHighlight:
      "Không thuật toán cạnh tranh, không banner quảng cáo ngoài lề, khách hàng chỉ nhìn thấy bạn.",
  },
  {
    id: "data",
    order: "04",
    title: "Thu thập và sở hữu dữ liệu khách hàng độc quyền",
    explanation:
      "Tài khoản mạng xã hội hay kênh bán hàng trên sàn thực chất là bạn đang 'thuê đất'. Nếu nền tảng đổi thuật toán, tăng phí hoặc khóa tài khoản, bạn có nguy cơ mất toàn bộ khách hàng. Khi sở hữu website, bạn cài đặt được các mã đo lường chuyên sâu (Google Analytics, Facebook Pixel, TikTok Pixel), lưu trữ thông tin liên hệ và lịch sử tương tác. Đây là tệp dữ liệu 'First-party Data' vô giá của riêng doanh nghiệp.",
    keyHighlight:
      "Dữ liệu khách hàng trên website là tài sản vĩnh viễn thuộc quyền sở hữu của bạn.",
  },
  {
    id: "omnichannel",
    order: "05",
    title: "Chăm sóc khách hàng tự động và mở rộng quy mô 24/7",
    explanation:
      "Đội ngũ bán hàng không thể trực chat 24/7 hay tư vấn cùng lúc cho hàng trăm người vào ban đêm hoặc ngày lễ. Website chính là nhân viên bán hàng xuất sắc nhất: cung cấp đầy đủ bảng giá, tài liệu giới thiệu, giải đáp câu hỏi thường gặp và tự động tiếp nhận lịch hẹn tư vấn bất kể ngày đêm, không bao giờ bỏ sót cơ hội kinh doanh.",
    keyHighlight:
      "Website bán hàng và tiếp nhận nhu cầu không ngừng nghỉ trong 365 ngày mỗi năm.",
  },
];

export default function WhyWebsiteSection() {
  // Mở mặc định mục đầu tiên để người đọc dễ nhận biết đây là danh sách có thể mở rộng
  const [openId, setOpenId] = useState<string | null>("position");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Phần Tiêu đề dạng bài viết luận điểm (Editorial Header) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 pb-12 border-b border-gray-200">
          <div className="lg:col-span-5" data-aos="fade-up">
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl leading-tight">
              Landing page mang ý nghĩa gì ?
            </h2>
          </div>

          <div
            className="lg:col-span-7 flex flex-col justify-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nhiều cá nhân và doanh nghiệp cho rằng chỉ cần một trang Fanpage hay kênh TikTok là đủ để bán hàng. Nhưng trên thực tế, kinh doanh trên mạng xã hội giống như việc bạn đang <strong className="text-gray-900 font-semibold">xây nhà trên đất người khác</strong>.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              Website không phải là một khoản chi phí làm cho có, mà là khoản đầu tư cốt lõi tạo ra vị thế độc quyền, bảo vệ tệp khách hàng và nhân bản doanh số bền vững.
            </p>
          </div>
        </div>

        {/* Danh sách các luận điểm dạng thu gọn / mở rộng (Accordion thanh lịch, không dùng hộp bo góc công nghiệp) */}
        <div className="divide-y divide-gray-200">
          {WEBSITE_REASONS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="py-6 sm:py-8 transition-colors duration-200"
              >
                {/* Hàng Tiêu đề có thể click vào để thu gọn / mở rộng */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-start justify-between gap-4 sm:gap-8 group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4 sm:gap-6 min-w-0 flex-1">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-gray-400 shrink-0 mt-0.5">
                      {item.order}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-[#1D1D1F]" : "text-gray-800 group-hover:text-black"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Nút dấu cộng tròn tối giản: xoay 45 độ thành dấu nhân khi mở */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1D1D1F] text-white" : "text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Phần nội dung giải thích chi tiết thu gọn / mở rộng mượt mà */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-5 sm:pt-6 pl-9 sm:pl-12 lg:pl-14 max-w-4xl">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.explanation}
                      </p>

                      {item.keyHighlight && (
                        <div className="mt-4 border-l-2 border-[#1D1D1F] pl-4 py-1">
                          <p className="text-xs sm:text-sm font-semibold text-gray-900 italic">
                            {item.keyHighlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
