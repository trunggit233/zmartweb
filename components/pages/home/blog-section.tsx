"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: "Xu hướng thiết kế website tối giản dẫn đầu năm 2026",
    date: "04/11/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Tìm hiểu cách phối màu xám nhạt và trắng cùng khoảng trắng thông minh giúp giữ chân khách hàng lâu hơn.",
    image: "/images/img-2-w.jpg ",
    slug: "xu-huong-thiet-ke-website-toi-gian-2026",
  },
  {
    title: "Tối ưu tốc độ tải trang: Bí quyết đạt điểm Core Web Vitals 100/100",
    date: "02/11/2026",
    readTime: "7 phút đọc",
    excerpt:
      "Khám phá các kỹ thuật nén ảnh, Server Components và tối ưu hóa script giúp trang web tải dưới 1 giây.",
    image: "/images/img-3-w.jpg ",
    slug: "toi-uu-toc-do-tai-trang-core-web-vitals",
  },
  {
    title: "Website may đo theo yêu cầu vs Mẫu template có sẵn: Doanh nghiệp nên chọn gì?",
    date: "28/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Phân tích chi tiết ưu nhược điểm, chi phí đầu tư dài hạn và khả năng mở rộng giữa hai hướng đi.",
    image: "/images/img-4-w.jpg ",
    slug: "website-may-do-vs-template-co-san",
  },
  {
    title: "Bảo mật website doanh nghiệp: 5 lỗ hổng phổ biến và cách phòng tránh",
    date: "24/10/2026",
    readTime: "4 phút đọc",
    excerpt:
      "Những nguyên tắc vàng giúp bảo vệ cơ sở dữ liệu khách hàng và chống lại các nguy cơ tấn công mạng.",
    image: "/images/img-5-w.jpg ",
    slug: "bao-mat-website-doanh-nghiep-lo-hong-pho-bien",
  },
  {
    title: "Xây dựng phễu chuyển đổi khách hàng từ Landing Page chuyên nghiệp",
    date: "18/10/2026",
    readTime: "8 phút đọc",
    excerpt:
      "Cách sắp xếp các nút kêu gọi hành động (CTA), tiêu đề và biểu mẫu đặt hẹn để tối đa hóa tỷ lệ chốt đơn.",
    image: "/images/img-6-w.jpg",
    slug: "xay-dung-pheu-chuyen-doi-landing-page",
  },
];

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-200/70">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-up" className="max-w-2xl mx-auto text-center px-4">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl">
            Blog ZmartWeb
          </h2>
          <p className="mt-3 text-base text-gray-800 sm:text-lg">
            Cập nhật những xu hướng thiết kế, kiến thức công nghệ và giải pháp tối ưu chuyển đổi số cho doanh nghiệp.
          </p>
        </div>

        <div className="mt-12">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`no-scrollbar flex gap-6 overflow-x-auto pb-4 pt-1 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab scroll-smooth snap-x snap-mandatory"
            }`}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="w-[84%] shrink-0 snap-start sm:w-[350px] lg:w-[380px]"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  onClick={handleCardClick}
                  draggable={false}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image.trim()}
                      alt={post.title}
                      fill
                      draggable={false}
                      className="object-cover object-center transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold leading-snug text-[#1D1D1F] transition-colors group-hover:text-blue-600 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 border-t border-gray-100 pt-4 text-xs font-semibold text-[#1D1D1F] transition-colors group-hover:text-blue-600">
                      Đọc chi tiết
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-gray-200/90 bg-white px-6 py-2 text-sm font-semibold text-[#1D1D1F] shadow-2xs transition hover:border-gray-300 hover:bg-gray-50 hover:shadow-xs"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
