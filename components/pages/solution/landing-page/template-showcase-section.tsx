"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, Sparkles, ArrowRight } from "lucide-react";

export interface TemplateItem {
  id: string;
  title: string;
  highlight: string;
  image: string;
  conversionRate: string;
  demoUrl?: string;
}

export const LANDING_PAGE_TEMPLATES: TemplateItem[] = [
  {
    id: "real-estate",
    title: "Skyline Luxury Residence",
    highlight: "Tối ưu form nhận bảng giá và tham quan nhà mẫu 360 độ",
    image: "/images/img-6-w.jpg",
    conversionRate: "CR 9.2%",
    demoUrl: "/contact?template=real-estate",
  },
  {
    id: "cosmetics",
    title: "ZenSkin Pure Botanical",
    highlight: "Hiển thị feedback trước/sau, flash-sale đếm ngược kích thích mua",
    image: "/images/img-3-w.jpg",
    conversionRate: "CR 11.4%",
    demoUrl: "/contact?template=cosmetics",
  },
  {
    id: "education",
    title: "NextGen Tech Academy",
    highlight: "Lộ trình đào tạo trực quan, form giữ chỗ nhận học bổng sớm",
    image: "/images/img-2-w.jpg",
    conversionRate: "CR 8.8%",
    demoUrl: "/contact?template=education",
  },
  {
    id: "healthcare",
    title: "PrimeCare International Clinic",
    highlight: "Đặt lịch khám chuyên khoa 1 chạm, hồ sơ bác sĩ minh bạch",
    image: "/images/img-5-w.jpg",
    conversionRate: "CR 10.5%",
    demoUrl: "/contact?template=healthcare",
  },
  {
    id: "saas-app",
    title: "CloudFlow Smart Logistics",
    highlight: "Giới thiệu tính năng tương tác, đăng ký dùng thử 14 ngày",
    image: "/images/img-4-w.jpg",
    conversionRate: "CR 7.9%",
    demoUrl: "/contact?template=saas-app",
  },
  {
    id: "fnb",
    title: "EcoGourmet Fresh Market",
    highlight: "Menu món ăn sống động, đặt bàn tiệc và nhận voucher ưu đãi",
    image: "/images/img-7-w.jpg",
    conversionRate: "CR 12.1%",
    demoUrl: "/contact?template=fnb",
  },
];

export default function TemplateShowcaseSection() {
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
    setActiveIndex(Math.min(Math.max(currentIndex, 0), LANDING_PAGE_TEMPLATES.length - 1));
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

  const scrollToTemplate = (index: number) => {
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
    <section className="py-16 lg:py-20 bg-gray-50/60 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section: Tiêu đề bên trái + Nút cuộn bên phải */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8">
          <div data-aos="fade-up" className="max-w-2xl">
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-3xl lg:text-4xl">
              Mẫu Landing Page may đo theo từng ngành hàng
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Vuốt ngang để khám phá các mẫu giao diện tối ưu trải nghiệm và chuyển đổi đơn hàng vượt trội.
            </p>
          </div>

          {/* Nút điều khiển cuộn ngang (Desktop & Mobile) */}
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
            {LANDING_PAGE_TEMPLATES.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="w-[84%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xs transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                  {/* Khung ảnh mockup */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  {/* Nội dung thông tin mẫu */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F] sm:text-lg transition-colors group-hover:text-blue-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {item.highlight}
                      </p>
                    </div>

                    {/* Nút hành động xem chi tiết / sử dụng mẫu */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={item.demoUrl || "/contact"}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D1D1F] hover:text-blue-600 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Tư vấn dựng mẫu này
                      </Link>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#1D1D1F] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thanh chỉ báo tiến trình / Dots điều hướng gọn nhẹ */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {LANDING_PAGE_TEMPLATES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToTemplate(index)}
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
