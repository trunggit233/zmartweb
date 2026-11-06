import Link from "next/link";
import { Globe, Cpu, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Doanh Nghiệp",
    description:
      "May đo nhận diện thương hiệu độc quyền, giao diện UI/UX tinh tế và chuẩn SEO giúp nâng tầm uy tín doanh nghiệp trên môi trường số.",
    tags: ["UI/UX May đo", "Chuẩn SEO", "Tốc độ cao"],
    href: "/services",
  },
  {
    icon: Cpu,
    title: "Phát Triển Web App",
    description:
      "Xây dựng ứng dụng web nghiệp vụ (CRM, ERP mini, portal nội bộ) giúp tự động hóa và số hóa quy trình vận hành chính xác.",
    tags: ["Nghiệp vụ riêng", "Tự động hóa", "Bảo mật cao"],
    href: "/services",
  },
  {
    icon: ShoppingBag,
    title: "Website Thương Mại",
    description:
      "Giải pháp bán hàng trực tuyến toàn diện, tích hợp thanh toán đa kênh, đồng bộ giỏ hàng và quản lý đơn hàng thông minh.",
    tags: ["Cổng thanh toán", "Quản lý đơn", "Chuẩn Mobile"],
    href: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Vận Hành & Bảo Trì",
    description:
      "Đồng hành giám sát hệ thống 24/7, tối ưu tốc độ, sao lưu dữ liệu định kỳ và cập nhật bảo mật an toàn dài hạn.",
    tags: ["Giám sát 24/7", "Backup định kỳ", "Tối ưu Server"],
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center px-4">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl">
            Dịch vụ của TvT Simple
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            TvT Simple cung cấp dịch vụ thiết kế, phát triển và vận hành website & hệ thống nghiệp vụ may đo theo yêu cầu khách hàng.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group flex flex-col justify-between rounded-[7px] border border-gray-200/70 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-[#1D1D1F] transition duration-300 group-hover:bg-[#1D1D1F] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#1D1D1F]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] transition-colors group-hover:text-blue-600"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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