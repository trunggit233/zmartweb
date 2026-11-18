"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Boxes,
  Briefcase,
  Newspaper,
  PhoneCall,
  Check,
  Network,
  ArrowRight,
} from "lucide-react";

export interface PageModule {
  id: string;
  order: string;
  name: string;
  icon: React.ElementType;
  purpose: string;
  coreElements: string[];
  seoImpact: string;
}

export const ARCHITECTURE_PAGES: PageModule[] = [
  {
    id: "home",
    order: "01",
    name: "Trang Chủ (Homepage)",
    icon: LayoutDashboard,
    purpose:
      "Tạo ấn tượng thị giác đầu tiên, định vị giá trị cốt lõi (USP), bao quát toàn bộ hệ sinh thái dịch vụ và dẫn dắt người dùng đến các trang chuyên sâu.",
    coreElements: [
      "Hero Banner khẳng định tuyên ngôn thương hiệu",
      "Tổng quan hệ thống dịch vụ / sản phẩm chủ lực",
      "Khối số liệu năng lực & đối tác tiêu biểu (Social Proof)",
      "Đánh giá của khách hàng & Bằng chứng thành công",
      "Kêu gọi hành động chính (CTA to Contact/Booking)",
    ],
    seoImpact: "Nhận sức mạnh từ toàn bộ backlink, phân phối PageRank đều cho các trang con.",
  },
  {
    id: "about",
    order: "02",
    name: "Trang Giới Thiệu (About Us)",
    icon: Building2,
    purpose:
      "Cung cấp bức tranh toàn diện về lịch sử hình thành, tầm nhìn sứ mệnh, đội ngũ lãnh đạo và năng lực pháp lý cho các đối tác B2B, nhà đầu tư.",
    coreElements: [
      "Câu chuyện sáng lập & Giá trị văn hóa doanh nghiệp",
      "Cột mốc lịch sử & Thành tựu phát triển",
      "Hồ sơ ban lãnh đạo & Chuyên gia chủ chốt",
      "Chứng chỉ chất lượng, giấy phép & Năng lực pháp lý",
      "Download tài liệu Profile / Hồ sơ năng lực PDF",
    ],
    seoImpact: "Tối ưu tín hiệu E-E-A-T (Chuyên môn, Thẩm quyền, Tin cậy) theo chuẩn Google Search.",
  },
  {
    id: "services",
    order: "03",
    name: "Cụm Dịch Vụ / Sản Phẩm (Services Hub)",
    icon: Boxes,
    purpose:
      "Cấu trúc đa tầng (Parent-Child) giới thiệu cặn kẽ từng giải pháp, quy trình triển khai, bảng giá và form tư vấn riêng biệt cho từng ngành.",
    coreElements: [
      "Trang danh mục tổng quan tất cả dịch vụ",
      "Trang chi tiết chuyên sâu cho từng gói giải pháp",
      "Bảng phân tích lợi ích & So sánh tính năng",
      "Quy trình triển khai từng bước minh bạch",
      "Form đặt lịch tư vấn tích hợp riêng cho từng dịch vụ",
    ],
    seoImpact: "Cấu trúc Silo SEO giúp trang dịch vụ lọt Top Google các từ khóa thương mại cao.",
  },
  {
    id: "portfolio",
    order: "04",
    name: "Dự Án & Khách Hàng (Case Studies)",
    icon: Briefcase,
    purpose:
      "Trưng bày các dự án đã thực hiện kèm số liệu kết quả đo lường, gỡ bỏ hoàn toàn rào cản do dự của khách hàng trước khi quyết định hợp tác.",
    coreElements: [
      "Bộ lọc dự án thông minh theo ngành hàng / quy mô",
      "Hình ảnh chụp thực tế & Video nghiệm thu",
      "Bài toán thách thức (Problem) & Giải pháp áp dụng (Solution)",
      "Kết quả đạt được bằng số liệu thực tế (Metrics & ROI)",
      "Lời chứng thực trực tiếp từ đại diện chủ đầu tư",
    ],
    seoImpact: "Tăng thời gian on-site (Dwell time) và giữ chân khách hàng tiềm năng lâu nhất.",
  },
  {
    id: "blog",
    order: "05",
    name: "Trung Tâm Tri Thức (Blog / Insights)",
    icon: Newspaper,
    purpose:
      "Chia sẻ kiến thức chuyên ngành, tin tức công ty và cẩm nang hữu ích. Đây là kênh tiếp cận hàng ngàn khách hàng tiềm năng mỗi ngày mà không tốn tiền Ads.",
    coreElements: [
      "Hệ thống phân loại chuyên mục bài bản",
      "Mục lục tự động (Table of Contents) chuẩn trải nghiệm",
      "Khối tác giả có chứng thực chuyên môn",
      "Khối CTA chèn linh hoạt vào nội dung bài viết",
      "Gợi ý bài viết liên quan giữ chân độc giả",
    ],
    seoImpact: "Bao phủ hàng trăm từ khóa tìm kiếm ngách, xây dựng liên kết nội bộ tự nhiên.",
  },
  {
    id: "contact",
    order: "06",
    name: "Liên Hệ & Mạng Lưới (Contact & Portal)",
    icon: PhoneCall,
    purpose:
      "Cung cấp mọi phương thức kết nối thuận tiện nhất: bản đồ định vị trụ sở, form gửi yêu cầu báo giá và đường dây nóng các phòng ban chuyên trách.",
    coreElements: [
      "Bản đồ Google Maps định vị văn phòng & chi nhánh",
      "Form đăng ký tư vấn tích hợp Rate-limit & Honeypot",
      "Thông tin hotline, email, Zalo từng bộ phận",
      "Thời gian tiếp nhận khách & Kênh hỗ trợ trực tuyến",
      "Thông tin kết nối tuyển dụng nhân sự",
    ],
    seoImpact: "Tối ưu hóa SEO Local với thông tin NAP (Name - Address - Phone) đồng bộ.",
  },
];

export default function SiteArchitectureSection() {
  const [activeId, setActiveId] = useState<string>("home");
  const activePage = ARCHITECTURE_PAGES.find((p) => p.id === activeId) || ARCHITECTURE_PAGES[0];
  const ActiveIcon = activePage.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#FAF5EF]/40 border-t border-gray-200/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Phần Tiêu đề Section */}
        <div data-aos="fade-up" className="max-w-3xl">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Cấu trúc một Website Doanh Nghiệp Chuẩn Mực
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Khác với một trang đơn lẻ, website đa trang được xây dựng như một <strong className="text-gray-900 font-semibold">&ldquo;trụ sở số&rdquo;</strong> vững chãi. Mỗi trang đảm nhận một vai trò chiến lược, liên kết mạch lạc để dẫn dắt khách hàng từ nhận biết đến ký kết hợp tác.
          </p>
        </div>

        {/* Khung tương tác kiến trúc: Danh sách trang bên trái + Chi tiết bên phải */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Cột trái: Bộ điều hướng danh sách các trang then chốt */}
          <div data-aos="fade-right" className="lg:col-span-5 space-y-2.5">
            {ARCHITECTURE_PAGES.map((page) => {
              const isSelected = page.id === activeId;
              const IconComponent = page.icon;

              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setActiveId(page.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-sm transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#1D1D1F] text-white shadow-md scale-[1.01]"
                      : "bg-white text-[#1D1D1F] border border-gray-200/80 hover:border-gray-300 hover:bg-gray-50/80"
                  }`}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm transition-colors ${
                        isSelected
                          ? "bg-white/10 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isSelected ? "text-gray-400" : "text-gray-400"
                          }`}
                        >
                          {page.order}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base truncate">
                          {page.name}
                        </h3>
                      </div>
                      
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 shrink-0 mt-1 transition-transform ${
                      isSelected
                        ? "text-white translate-x-1"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Cột phải: Bản vẽ chi tiết (Blueprint Panel) cho trang đang được chọn */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <div className="rounded-sm border border-gray-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
              {/* Header của Bản vẽ */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D1D1F] text-white shadow-xs">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                      {activePage.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mục tiêu chiến lược */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Mục tiêu chiến lược:
                </p>
                <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {activePage.purpose}
                </p>
              </div>

              {/* Các Module bắt buộc bên trong trang */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Thành phần & Module cốt lõi bên trong:
                </p>
                <ul className="mt-4 space-y-3">
                  {activePage.coreElements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#1D1D1F] mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Giá trị SEO & Bền vững */}
              <div className="mt-8 rounded-sm bg-gray-50 border border-gray-200/80 p-4.5 flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1D1D1F] text-white font-mono text-xs font-bold">
                  SEO
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#1D1D1F]">
                    Tác động thứ hạng tìm kiếm (Google Organic):
                  </p>
                  <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">
                    {activePage.seoImpact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
