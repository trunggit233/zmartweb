"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AdvantageItem {
  id: string;
  order: string;
  title: string;
  explanation: string;
  keyHighlight?: string;
}

export const MULTIPAGE_ADVANTAGES: AdvantageItem[] = [
  {
    id: "seo-dominance",
    order: "01",
    title: "Thống trị SEO tự nhiên và bao phủ hàng trăm từ khóa ngành",
    explanation:
      "Một landing page đơn lẻ chỉ có thể tối ưu cho 1 - 2 từ khóa hẹp. Trong khi đó, website đa trang cho phép xây dựng cấu trúc chuyên sâu đa tầng (Topic Clusters & Silo Architecture). Mỗi dịch vụ, mỗi bài viết phân tích là một điểm đón khách riêng biệt trên Google, mang về hàng ngàn lượt truy cập tự nhiên (Organic Traffic) chất lượng cao mỗi tháng mà không phải trả tiền quảng cáo.",
    keyHighlight:
      "Chi phí chạy Ads ngày càng đắt đỏ. Chỉ có hệ thống SEO đa trang mới tạo ra dòng khách hàng thụ động và bền vững theo năm tháng.",
  },
  {
    id: "b2b-trust",
    order: "02",
    title: "Hồ sơ năng lực số (Digital Profile) bắt buộc cho đối tác B2B & Dự án lớn",
    explanation:
      "Khi tham gia đấu thầu, gặp gỡ các đối tác lớn hoặc mở rộng xuất khẩu, không một đối tác nào đặt niềm tin vào một doanh nghiệp chỉ có trang bán hàng 1 trang sơ sài. Họ cần thẩm định toàn diện: Doanh nghiệp bạn là ai? Ban lãnh đạo gồm những ai? Các dự án đã triển khai có quy mô ra sao? Năng lực pháp lý thế nào? Website đa trang là lời khẳng định chắc nịch về vị thế và bề dày của bạn.",
    keyHighlight:
      "Website đa trang là bản cam kết bảo chứng đầu tiên về quy mô và uy tín doanh nghiệp trước khi bước vào bàn đàm phán.",
  },
  {
    id: "cms-control",
    order: "03",
    title: "Hệ thống quản trị nội dung (CMS) linh hoạt, không phụ thuộc lập trình viên",
    explanation:
      "Doanh nghiệp không cần phải gọi cho đội kỹ thuật mỗi khi muốn đăng một dự án mới hoàn thành, cập nhật bảng báo giá hay đăng tin tuyển dụng. Với hệ thống CMS may đo trực quan, bất kỳ nhân sự nào cũng có thể tự tay cập nhật thông tin chỉ trong 2 phút với giao diện thân thiện và cấu trúc tự động chuẩn SEO.",
    keyHighlight:
      "Doanh nghiệp toàn quyền làm chủ dữ liệu và nội dung, tiết kiệm hàng chục triệu đồng chi phí bảo trì và chỉnh sửa mỗi năm.",
  },
  {
    id: "user-journey",
    order: "04",
    title: "Phân luồng hành vi thông minh, cung cấp chiều sâu thông tin",
    explanation:
      "Khách hàng tìm đến doanh nghiệp luôn có nhiều mục đích khác nhau: người cần tìm giải pháp A, người muốn xem bảng giá B, đối tác lại cần nghiên cứu năng lực tài chính. Website đa trang giúp phân luồng người dùng khoa học: mỗi nhóm đối tượng được dẫn dắt đến đúng trang chuyên sâu họ cần mà không làm rối mắt hay loãng thông điệp như một trang cuộn dọc quá dài.",
    keyHighlight:
      "Đưa đúng khách hàng đến đúng trang thông tin họ quan tâm, tối đa hóa sự hài lòng và tỷ lệ chuyển đổi hợp đồng.",
  },
  {
    id: "scalability",
    order: "05",
    title: "Nền tảng kiến trúc module sẵn sàng đồng hành mở rộng quy mô 5 - 10 năm",
    explanation:
      "Khi doanh nghiệp mở rộng quy mô, mở thêm chi nhánh, tiến ra thị trường quốc tế (đa ngôn ngữ Anh - Trung - Nhật - Hàn) hay kết nối cổng thanh toán B2B, phần mềm CRM/ERP nội bộ... nền tảng website đa trang chuẩn Next.js cho phép tích hợp thêm tính năng mới ngay lập tức mà không cần phải đập đi xây lại từ đầu.",
    keyHighlight:
      "Bảo vệ trọn vẹn chi phí đầu tư ban đầu, hệ thống vững chãi đồng hành cùng sự tăng trưởng lâu dài của doanh nghiệp.",
  },
];

export default function AdvantagesSection() {
  const [openId, setOpenId] = useState<string | null>("seo-dominance");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Phần Tiêu đề dạng Editorial luận điểm chuyên sâu */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 pb-12 border-b border-gray-200">
          <div className="lg:col-span-5" data-aos="fade-up">
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl leading-tight">
              Tại sao doanh nghiệp tăng trưởng cần một Website Đa Trang?
            </h2>
          </div>

          <div
            className="lg:col-span-7 flex flex-col justify-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nếu Landing Page là một <strong className="text-gray-900 font-semibold">&ldquo;tờ rơi quảng cáo số&rdquo;</strong> phục vụ chiến dịch ngắn hạn, thì Website Đa Trang chính là <strong className="text-gray-900 font-semibold">&ldquo;tòa nhà văn phòng số&rdquo;</strong> khẳng định tầm vóc, sở hữu tệp khách hàng tự nhiên và xây dựng giá trị thương hiệu trường tồn.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              Khám phá 5 lợi ích then chốt giúp các doanh nghiệp dẫn đầu bứt phá doanh thu và khẳng định vị thế trên môi trường số.
            </p>
          </div>
        </div>

        {/* Danh sách các luận điểm dạng thu gọn / mở rộng (Accordion thanh lịch, không dùng hộp bo góc công nghiệp) */}
        <div className="divide-y divide-gray-200">
          {MULTIPAGE_ADVANTAGES.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="py-6 sm:py-8 transition-colors duration-200"
              >
                {/* Hàng Tiêu đề click để thu gọn / mở rộng */}
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

                  {/* Nút dấu cộng tròn tối giản: xoay 45 độ khi mở */}
                   <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1D1D1F] text-white" : "text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Phần nội dung giải thích chi tiết trượt mở mượt mà */}
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
                        <div className="mt-4 border-l-2 border-[#1D1D1F] pl-4 py-1.5 bg-gray-50/50 rounded-r-lg">
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
