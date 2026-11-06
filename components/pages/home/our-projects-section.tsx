"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "TechNova Global",
    category: "Doanh Nghiệp / SaaS",
    description:
      "Website giới thiệu giải pháp AI doanh nghiệp, tăng 45% tỷ lệ liên hệ tư vấn và tối ưu nhận diện chuyên nghiệp.",
    image: "/images/img-2-w.jpg",
    tags: ["Next.js", "Tailwind CSS", "UI/UX May đo"],
    link: "/services",
  },
  {
    title: "Komorebi Artisan",
    category: "Thương Mại Điện Tử",
    description:
      "Showroom mua sắm gốm sứ cao cấp tối giản phong cách Nhật, tích hợp cổng thanh toán trực tuyến mượt mà.",
    image: "/images/img-3-w.jpg",
    tags: ["E-Commerce", "Stripe", "Chuẩn Mobile"],
    link: "/services",
  },
  {
    title: "Logix Fleet Manager",
    category: "Web App Nghiệp Vụ",
    description:
      "Hệ thống portal nội bộ theo dõi lộ trình và điều phối hơn 200 phương tiện vận tải theo thời gian thực.",
    image: "/images/img-4-w.jpg",
    tags: ["Dashboard", "Realtime", "Bảo mật cao"],
    link: "/services",
  },
  {
    title: "Lumina MedCare",
    category: "Y Tế / Phòng Khám",
    description:
      "Cổng thông tin y khoa đạt chuẩn quốc tế, tự động hóa quy trình đặt lịch khám và tra cứu kết quả nhanh chóng.",
    image: "/images/img-5-w.jpg",
    tags: ["Booking Online", "Chuẩn SEO", "Tốc độ cao"],
    link: "/services",
  },
  {
    title: "Aura Living Space",
    category: "Bất Động Sản",
    description:
      "Nền tảng trưng bày các dự án căn hộ cao cấp với bộ lọc thông minh, mang lại trải nghiệm thị giác sống động.",
    image: "/images/img-6-w.jpg",
    tags: ["Bất động sản", "Virtual Tour", "Tối ưu ảnh"],
    link: "/services",
  },
  {
    title: "EcoVibe Organics",
    category: "Chuỗi Bán Lẻ F&B",
    description:
      "Hệ thống định vị cửa hàng thực phẩm sạch gần nhất kết hợp đặt giao nhanh, giúp tối ưu tỷ lệ chuyển đổi khách quen.",
    image: "/images/img-7-w.jpg",
    tags: ["Store Locator", "Tự động hóa", "Thương hiệu"],
    link: "/services",
  },
];

export default function OurProjectsSection() {
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
    setActiveIndex(Math.min(Math.max(currentIndex, 0), projects.length - 1));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const scrollAmount = clientWidth * 0.85;

    sliderRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToProject = (index: number) => {
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
    <section className="py-16 md:py-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up" className="max-w-2xl mx-auto text-center px-4">
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl">
              Dự án tiêu biểu
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Các dự án đã triển khai giúp khách hàng củng cố niềm tin thương hiệu, tối ưu tỷ lệ chuyển đổi và đột phá hiệu quả kinh doanh.
            </p>
          </div>

          <div data-aos="fade-up" className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Xem dự án trước"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1D1D1F] shadow-2xs transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Xem dự án tiếp theo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1D1D1F] text-white shadow-2xs transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Link
                  href={project.link}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#1D1D1F] transition-colors group-hover:text-blue-600">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                      </div>

                      <p className="mt-2.5 text-sm leading-relaxed text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-gray-100 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Hiện đủ 6 chấm cho từng thẻ khi vuốt */}
        <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              aria-label={`Chuyển đến dự án ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#1D1D1F]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Desktop: Chỉ hiện 2 chấm đại diện cho 2 lượt (mỗi lượt 3 thẻ) */}
        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex">
          {[0, 1].map((page) => {
            const isCurrentPage = (activeIndex >= 3 ? 1 : 0) === page;
            return (
              <button
                key={page}
                onClick={() => scrollToProject(page * 3)}
                aria-label={`Chuyển đến lượt dự án ${page + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCurrentPage
                    ? "w-8 bg-[#1D1D1F]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}