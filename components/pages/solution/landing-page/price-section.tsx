import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const LANDING_PAGE_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Gói Tiết Kiệm",
    tagline: "Phù hợp cho cá nhân kinh doanh, thử nghiệm sản phẩm mới hoặc chiến dịch ngắn hạn.",
    price: "1.990.000",
    originalPrice: "2.800.000",
    badge: "Khởi tạo nhanh",
    features: [
      "Thiết kế 1 trang (Landing Page) chuẩn Mobile & Desktop",
      "Giao diện chuẩn Responsive, tải trang nhanh",
      "Form đăng ký / mua hàng cơ bản",
      "Tích hợp nút gọi Hotline & chat Zalo nổi bật",
      "Miễn phí cài đặt SSL (ổ khóa xanh HTTPS)",
      "Bàn giao nhanh trong 2 - 3 ngày",
      "Bảo hành & sửa lỗi kỹ thuật 6 tháng",
    ],
    ctaText: "Chọn gói Tiết Kiệm",
    ctaHref: "/contact?service=landing-page-starter",
  },
  {
    id: "pro",
    name: "Gói Chuyên Nghiệp",
    tagline: "Dành cho chiến dịch chạy Ads (Facebook, Google, TikTok), tối ưu chuyển đổi và doanh số.",
    price: "3.990.000",
    originalPrice: "5.500.000",
    popular: true,
    badge: "Phổ biến & Khuyên dùng",
    features: [
      "Thiết kế UI/UX May đo độc quyền theo thương hiệu",
      "Tối ưu tỷ lệ chuyển đổi (CRO) chuyên sâu theo hành vi khách hàng",
      "Hiệu ứng chuyển động Animation mượt mà, chuyên nghiệp",
      "Tối ưu tốc độ tải trang Google PageSpeed đạt 90+ điểm",
      "Gắn mã đo lường: Facebook Pixel, Google Ads, TikTok Pixel",
      "Form đặt lịch thông minh, gửi thông báo tức thì (Telegram / Email / Sheet)",
      "Tặng tên miền quốc tế (.com/.net) + Hosting tốc độ cao 1 năm",
      "Bàn giao trong 3 - 5 ngày",
      "Bảo hành kỹ thuật & bảo trì 12 tháng",
    ],
    ctaText: "Chọn gói Chuyên Nghiệp",
    ctaHref: "/contact?service=landing-page-pro",
  },
  {
    id: "premium",
    name: "Gói May Đo Cao Cấp",
    tagline: "Dành cho doanh nghiệp cần kịch bản bán hàng phức tạp, tích hợp CRM hoặc cổng thanh toán.",
    price: "6.990.000",
    originalPrice: "9.000.000",
    badge: "Toàn diện & Tích hợp",
    features: [
      "Bao gồm toàn bộ quyền lợi của gói Chuyên Nghiệp",
      "Số lượng Section không giới hạn theo kịch bản bán hàng",
      "Tích hợp thanh toán quét mã QR tự động (VietQR / MoMo / VNPay)",
      "Đồng bộ dữ liệu khách hàng tự động về CRM / Lark / Google Sheets",
      "Hỗ trợ đa ngôn ngữ (Song ngữ Việt - Anh)",
      "Tối ưu cấu trúc chuẩn SEO Onpage & Schema Microdata",
      "Hỗ trợ A/B Testing kiểm tra hiệu quả quảng cáo",
      "Hỗ trợ chỉnh sửa nội dung & banner trong suốt chiến dịch",
      "Bảo hành, sao lưu dữ liệu & bảo trì kỹ thuật trọn đời",
    ],
    ctaText: "Tư vấn gói Cao Cấp",
    ctaHref: "/contact?service=landing-page-premium",
  },
];

export default function PriceLandingPageSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Tiêu đề & Giới thiệu Section */}
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Bảng giá thiết kế Landing Page
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Lựa chọn giải pháp phù hợp với quy mô ngân sách và mục tiêu chiến dịch của bạn.
            Tất cả các gói đều cam kết chuẩn chỉ về tốc độ và chất lượng hiển thị.
          </p>
        </div>

        {/* Lưới 3 Gói Giá */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {LANDING_PAGE_PLANS.map((plan, index) => {
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
