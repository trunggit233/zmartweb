import Link from "next/link";
import { Check, Sparkles, ArrowRight, Layers } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  pricePrefix?: string;
  originalPrice?: string;
  popular?: boolean;
  badge?: string;
  pageScope: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const MULTIPAGE_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "Gói Tiêu Chuẩn",
    tagline:
      "Dành cho doanh nghiệp vừa & nhỏ cần hiện diện chuyên nghiệp với đủ bộ trang giới thiệu cốt lõi, chuẩn SEO nền tảng.",
    price: "9.990.000",
    originalPrice: "12.900.000",
    badge: "Khởi đầu vững chắc",
    pageScope: "Tối đa 6 trang",
    features: [
      "Thiết kế UI/UX may đo độc quyền theo nhận diện thương hiệu",
      "Đủ bộ 6 trang cốt lõi: Trang chủ, Giới thiệu, Dịch vụ, Dự án, Blog, Liên hệ",
      "Chuẩn Responsive Mobile & Desktop, tải trang nhanh",
      "Tối ưu SEO Onpage cơ bản (Meta, Heading, Schema Microdata)",
      "Tích hợp Hotline, Zalo, Google Maps định vị",
      "Miễn phí SSL + tên miền .com 1 năm",
      "Bàn giao trong 10 - 14 ngày",
      "Bảo hành & sửa lỗi kỹ thuật 6 tháng",
    ],
    ctaText: "Chọn gói Tiêu Chuẩn",
    ctaHref: "/contact?service=multi-page-standard",
  },
  {
    id: "growth",
    name: "Gói Tăng Trưởng",
    tagline:
      "Dành cho doanh nghiệp đang mở rộng, cần hệ thống nội dung chuyên sâu và chiến lược SEO thống trị từ khóa ngành.",
    price: "16.990.000",
    originalPrice: "22.500.000",
    popular: true,
    badge: "Phổ biến & Khuyên dùng",
    pageScope: "Tối đa 15 trang",
    features: [
      "Bao gồm toàn bộ quyền lợi của gói Tiêu Chuẩn",
      "Tối đa 15 trang chuyên sâu (dịch vụ chi tiết, dự án, bài viết)",
      "Cấu trúc Silo SEO & Topic Cluster bao phủ từ khóa ngành",
      "CMS tự quản: cập nhật nội dung, dự án, tin tức không cần lập trình viên",
      "Tối ưu Google PageSpeed đạt 90+ điểm",
      "Form báo giá thông minh, gửi thông báo tức thì (Telegram / Email / Sheet)",
      "Gắn mã đo lường Google Analytics 4 & Google Search Console",
      "Bàn giao trong 14 - 21 ngày",
      "Bảo hành & bảo trì kỹ thuật 12 tháng",
    ],
    ctaText: "Chọn gói Tăng Trưởng",
    ctaHref: "/contact?service=multi-page-growth",
  },
  {
    id: "enterprise",
    name: "Gói Doanh Nghiệp Lớn",
    tagline:
      "Dành cho tập đoàn, doanh nghiệp quy mô lớn cần giải pháp tích hợp hệ thống nội bộ và mở rộng không giới hạn.",
    price: "29.990.000",
    pricePrefix: "Từ",
    badge: "May đo toàn diện",
    pageScope: "Không giới hạn trang",
    features: [
      "Bao gồm toàn bộ quyền lợi của gói Tăng Trưởng",
      "Số trang & tính năng không giới hạn theo yêu cầu",
      "Đa ngôn ngữ (Việt - Anh - Trung - Nhật - Hàn)",
      "Tích hợp hệ thống nội bộ: CRM, ERP, cổng thanh toán B2B",
      "Thiết kế UI/UX chuyên sâu với đội ngũ Senior",
      "Chiến lược SEO dài hạn & Content Marketing theo quý",
      "Máy chủ riêng tốc độ cao & bảo mật nâng cao",
      "Hỗ trợ triển khai & vận hành 24/7",
      "Cam kết SLA & bảo trì trọn đời",
    ],
    ctaText: "Liên hệ tư vấn ngay",
    ctaHref: "/contact?service=multi-page-enterprise",
  },
];

export default function PriceMultiPageSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Tiêu đề & Giới thiệu Section */}
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Bảng giá may đo Website Doanh Nghiệp
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Lựa chọn gói phù hợp với quy mô và phạm vi nội dung doanh nghiệp. Mỗi gói đều cam kết
            chuẩn nhận diện, tối ưu SEO và tốc độ tải trang vượt trội.
          </p>
        </div>

        {/* Lưới 3 Gói Giá */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {MULTIPAGE_PLANS.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative flex flex-col justify-between rounded-sm p-8 sm:p-10 transition-all duration-300 ${
                  isPopular
                    ? "bg-[#1D1D1F] text-white shadow-2xl ring-2 ring-[#1D1D1F] lg:-translate-y-2 lg:scale-103"
                    : "bg-white text-[#1D1D1F] border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Badge nổi bật */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold tracking-wide uppercase shadow-sm ${
                        isPopular
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}
                    >
                      {isPopular && <Sparkles className="h-3 w-3" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Phần Header của Gói */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed min-h-[36px] ${
                      isPopular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Giá tiền */}
                  <div className="mt-6 flex items-baseline gap-2 border-b pb-6 border-gray-200/40">
                    {plan.pricePrefix && (
                      <span
                        className={`text-sm font-semibold ${
                          isPopular ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {plan.pricePrefix}
                      </span>
                    )}
                    <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isPopular ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      VNĐ
                    </span>
                    {plan.originalPrice && (
                      <span
                        className={`ml-2 text-xs line-through ${
                          isPopular ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {plan.originalPrice} đ
                      </span>
                    )}
                  </div>

                  {/* Phạm vi dịch vụ theo mức giá */}
                  <div
                    className={`mt-5 flex items-center gap-3 rounded-sm px-4 py-3 ${
                      isPopular
                        ? "bg-white/5 border border-white/10"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <Layers
                      className={`h-4 w-4 shrink-0 ${
                        isPopular ? "text-amber-300" : "text-gray-400"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Phạm vi dịch vụ
                      </p>
                      <p
                        className={`text-sm font-bold ${
                          isPopular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.pageScope}
                      </p>
                    </div>
                  </div>

                  {/* Danh sách tính năng */}
                  <div className="mt-6">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isPopular ? "text-gray-300" : "text-gray-900"
                      }`}
                    >
                      Quyền lợi bao gồm:
                    </p>
                    <ul className="mt-4 space-y-3.5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              isPopular
                                ? "bg-amber-400/20 text-amber-300"
                                : "bg-emerald-100 text-emerald-600"
                            }`}
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span
                            className={`text-xs sm:text-sm leading-relaxed ${
                              isPopular ? "text-gray-200" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Nút Call To Action */}
                <div className="mt-8 pt-6 border-t border-gray-200/20">
                  <Link
                    href={plan.ctaHref}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-bold transition duration-200 cursor-pointer ${
                      isPopular
                        ? "bg-white text-[#1D1D1F] hover:bg-gray-100 shadow-md hover:scale-101"
                        : "bg-[#1D1D1F] text-white hover:bg-black shadow-xs hover:scale-101"
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



