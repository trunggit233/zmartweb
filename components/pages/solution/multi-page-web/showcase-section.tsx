"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";

export interface ShowcaseItem {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  pages: string[];
  link: string;
}

export const MULTIPAGE_SHOWCASE: ShowcaseItem[] = [
  {
    id: "real-estate",
    title: "Hoàng Long Group",
    industry: "Bất động sản & Xây dựng",
    description:
      "Trưng bày năng lực thi công, danh mục dự án tiêu biểu và hồ sơ đấu thầu, khẳng định vị thế nhà thầu chuyên nghiệp trước đối tác và nhà đầu tư.",
    image: "/images/img-6-w.jpg",
    pages: ["Trang chủ", "Giới thiệu", "Dự án", "Tin tức", "Liên hệ"],
    link: "/contact?template=real-estate-corporate",
  },
  {
    id: "logistics",
    title: "Nam Phong Logistics",
    industry: "Logistics & Vận tải",
    description:
      "Cổng thông tin dịch vụ vận chuyển đa tuyến, tra cứu lộ trình và năng lực đội xe minh bạch, tạo dựng niềm tin chuẩn B2B với khách hàng doanh nghiệp.",
    image: "/images/img-4-w.jpg",
    pages: ["Trang chủ", "Dịch vụ", "Mạng lưới", "Tuyển dụng", "Liên hệ"],
    link: "/contact?template=logistics",
  },
  {
    id: "healthcare",
    title: "An Khang Hospital",
    industry: "Y tế & Phòng khám đa khoa",
    description:
      "Hồ sơ bác sĩ minh bạch, hệ thống chuyên khoa chuyên sâu và đặt lịch khám trực tuyến, đồng thời chia sẻ thư viện kiến thức y khoa chuẩn E-E-A-T.",
    image: "/images/img-5-w.jpg",
    pages: ["Trang chủ", "Chuyên khoa", "Đội ngũ bác sĩ", "Đặt lịch", "Tin y khoa"],
    link: "/contact?template=healthcare-corporate",
  },
  {
    id: "trading",
    title: "Mekong Trading",
    industry: "Thương mại & Xuất nhập khẩu",
    description:
      "Catalogue sản phẩm OEM đa ngôn ngữ, năng lực nhà máy đối tác và quy trình giao dịch quốc tế, mở rộng kênh tiếp cận khách hàng toàn cầu.",
    image: "/images/img-3-w.jpg",
    pages: ["Trang chủ", "Sản phẩm", "Nhà máy", "Chứng nhận", "Liên hệ"],
    link: "/contact?template=trading",
  },
  {
    id: "saas-b2b",
    title: "NovaTech Solutions",
    industry: "Công nghệ & SaaS B2B",
    description:
      "Giới thiệu giải pháp phần mềm doanh nghiệp, tài nguyên học viện và bảng giá gói dịch vụ, tối ưu hành trình từ nhận biết đến ký kết hợp đồng.",
    image: "/images/img-2-w.jpg",
    pages: ["Trang chủ", "Giải pháp", "Học viện", "Bảng giá", "Liên hệ"],
    link: "/contact?template=saas-b2b",
  },
  {
    id: "retail-fnb",
    title: "Gourmet House",
    industry: "Chuỗi bán lẻ & F&B",
    description:
      "Định vị hệ thống cửa hàng, thực đơn và chương trình thành viên, đồng thời kể câu chuyện thương hiệu để giữ chân khách hàng và thu hút nhân sự.",
    image: "/images/img-7-w.jpg",
    pages: ["Trang chủ", "Câu chuyện", "Cửa hàng", "Thực đơn", "Tuyển dụng"],
    link: "/contact?template=retail-fnb",
  },
];

export default function ShowcaseSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstItem = sliderRef.current.firstElementChild as HTMLElement | null;
    const itemWidth = firstItem ? firstItem.offsetWidth + 24 : 1;
    const currentIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(currentIndex, 0), MULTIPAGE_SHOWCASE.length - 1));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const scrollAmount = clientWidth * 0.75;

    sliderRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToItem = (index: number) => {
    if (!sliderRef.current) return;
    const items = sliderRef.current.children;
    if (items[index]) {
      const targetItem = items[index] as HTMLElement;
      sliderRef.current.scrollTo({
        left: targetItem.offsetLeft - sliderRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section: Tiêu đề bên trái + Nút cuộn bên phải */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8">
          <div data-aos="fade-up" className="max-w-2xl">
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl">
              Kho mẫu Website Doanh Nghiệp thực chiến
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Vuốt ngang để khám phá các mẫu website đa trang may đo theo từng ngành, đủ bộ kiến trúc
              Home – Dịch vụ – Dự án – Blog – Liên hệ để thống trị SEO và khẳng định vị thế thương hiệu.
            </p>
          </div>

          {/* Nút điều khiển cuộn ngang */}
          <div data-aos="fade-up" className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Xem mẫu trước"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1D1D1F] shadow-2xs transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Xem mẫu tiếp theo"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D1D1F] text-white shadow-2xs transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hàng cuộn ngang 1 dòng duy nhất (Horizontal Scroll) */}
        <div className="mt-4">
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {MULTIPAGE_SHOWCASE.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="w-[84%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-gray-200/80 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                  {/* Khung ảnh mockup */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    />
                    {/* Nhãn ngành hàng phủ trên ảnh */}
                    <span className="absolute left-4 top-4 rounded-sm bg-[#1D1D1F]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.industry}
                    </span>
                  </div>

                  {/* Nội dung thông tin mẫu */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F] sm:text-lg transition-colors group-hover:text-blue-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Bộ trang then chốt đi kèm theo mẫu */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Layers className="h-3.5 w-3.5" />
                        <span className="font-semibold text-gray-700">
                          {item.pages.length} trang then chốt:
                        </span>
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.pages.map((page) => (
                          <span
                            key={page}
                            className="rounded-sm bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600"
                          >
                            {page}
                          </span>
                        ))}
                      </div>

                      {/* Nút hành động xem chi tiết / tư vấn */}
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D1D1F] hover:text-blue-600 transition-colors"
                        >
                          Tư vấn dựng mẫu này
                        </Link>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#1D1D1F] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thanh chỉ báo tiến trình / Dots điều hướng gọn nhẹ */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {MULTIPAGE_SHOWCASE.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToItem(index)}
              aria-label={`Chuyển đến mẫu ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "w-8 bg-[#1D1D1F]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

