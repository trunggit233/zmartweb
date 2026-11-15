"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  slug: string;
}

const allPosts: BlogPost[] = [
  {
    id: 1,
    title: "Xu hướng thiết kế website tối giản dẫn đầu năm 2026",
    date: "04/11/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Tìm hiểu cách phối màu xám nhạt và trắng cùng khoảng trắng thông minh giúp giữ chân khách hàng lâu hơn.",
    image: "/images/img-2-w.jpg",
    slug: "xu-huong-thiet-ke-website-toi-gian-2026",
  },
  {
    id: 2,
    title: "Tối ưu tốc độ tải trang: Bí quyết đạt điểm Core Web Vitals 100/100",
    date: "02/11/2026",
    readTime: "7 phút đọc",
    excerpt:
      "Khám phá các kỹ thuật nén ảnh, Server Components và tối ưu hóa script giúp trang web tải dưới 1 giây.",
    image: "/images/img-3-w.jpg",
    slug: "toi-uu-toc-do-tai-trang-core-web-vitals",
  },
  {
    id: 3,
    title: "Website may đo theo yêu cầu vs Mẫu template có sẵn: Doanh nghiệp nên chọn gì?",
    date: "28/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Phân tích chi tiết ưu nhược điểm, chi phí đầu tư dài hạn và khả năng mở rộng giữa hai hướng đi.",
    image: "/images/img-4-w.jpg",
    slug: "website-may-do-vs-template-co-san",
  },
  {
    id: 4,
    title: "Bảo mật website doanh nghiệp: 5 lỗ hổng phổ biến và cách phòng tránh",
    date: "24/10/2026",
    readTime: "4 phút đọc",
    excerpt:
      "Những nguyên tắc vàng giúp bảo vệ cơ sở dữ liệu khách hàng và chống lại các nguy cơ tấn công mạng.",
    image: "/images/img-5-w.jpg",
    slug: "bao-mat-website-doanh-nghiep-lo-hong-pho-bien",
  },
  {
    id: 5,
    title: "Xây dựng phễu chuyển đổi khách hàng từ Landing Page chuyên nghiệp",
    date: "18/10/2026",
    readTime: "8 phút đọc",
    excerpt:
      "Cách sắp xếp các nút kêu gọi hành động (CTA), tiêu đề và biểu mẫu đặt hẹn để tối đa hóa tỷ lệ chốt đơn.",
    image: "/images/img-6-w.jpg",
    slug: "xay-dung-pheu-chuyen-doi-landing-page",
  },
  {
    id: 6,
    title: "Tầm quan trọng của trải nghiệm Mobile-First đối với doanh nghiệp hiện đại",
    date: "15/10/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Hơn 70% lượt truy cập đến từ di động. Xem ngay cách tối ưu chạm vuốt và tốc độ cho màn hình nhỏ.",
    image: "/images/img-2-w.jpg",
    slug: "tam-quan-trong-mobile-first",
  },
  {
    id: 7,
    title: "Chiến lược SEO On-Page hiệu quả cho website mới ra mắt",
    date: "12/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Cấu trúc thẻ heading, sitemap, robots.txt và tối ưu thẻ meta giúp bài viết được lập chỉ mục nhanh chóng.",
    image: "/images/img-3-w.jpg",
    slug: "chien-luoc-seo-on-page-cho-web-moi",
  },
  {
    id: 8,
    title: "Giải pháp kiến trúc Headless Commerce cho cửa hàng trực tuyến lớn",
    date: "09/10/2026",
    readTime: "7 phút đọc",
    excerpt:
      "Tách rời giao diện frontend và backend giúp website thương mại điện tử chịu tải lớn và linh hoạt mở rộng.",
    image: "/images/img-4-w.jpg",
    slug: "headless-commerce-cho-cua-hang-lon",
  },
  {
    id: 9,
    title: "Nghệ thuật sử dụng Typography để định vị thương hiệu cao cấp",
    date: "05/10/2026",
    readTime: "4 phút đọc",
    excerpt:
      "Font chữ không chỉ để đọc, mà là ngôn ngữ thị giác truyền tải đẳng cấp và tính cách của thương hiệu.",
    image: "/images/img-5-w.jpg",
    slug: "typography-dinh-vi-thuong-hieu",
  },
  {
    id: 10,
    title: "Ứng dụng AI trong tự động hóa quy trình hỗ trợ khách hàng trên website",
    date: "01/10/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Tích hợp AI Chatbot thông minh giúp phản hồi khách hàng 24/7 và thu thập thông tin tư vấn tự động.",
    image: "/images/img-6-w.jpg",
    slug: "ung-dung-ai-tu-dong-hoa-cham-soc-khach-hang",
  },
  {
    id: 11,
    title: "Quy trình thiết kế website từ bản phác thảo Wireframe đến sản phẩm",
    date: "27/09/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Khám phá các bước nghiên cứu người dùng, thiết kế giao diện mẫu và lập trình chuẩn chỉ tại ZmartWeb.",
    image: "/images/img-2-w.jpg",
    slug: "quy-trinh-thiet-ke-website-wireframe",
  },
  {
    id: 12,
    title: "Tối ưu hóa tỷ lệ chuyển đổi (CRO): 7 thay đổi nhỏ mang lại doanh thu lớn",
    date: "22/09/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Thay đổi màu sắc nút CTA, rút gọn ô nhập form và bố trí bằng chứng xã hội giúp bứt phá doanh số tức thì.",
    image: "/images/img-3-w.jpg",
    slug: "toi-uu-cro-tang-doanh-thu",
  },
  {
    id: 13,
    title: "Vì sao chứng chỉ SSL và bảo mật HTTPS là bắt buộc đối với mọi website?",
    date: "18/09/2026",
    readTime: "4 phút đọc",
    excerpt:
      "Không chỉ bảo vệ dữ liệu truyền tải, HTTPS còn là tiêu chí đánh giá thứ hạng hàng đầu của Google Search.",
    image: "/images/img-4-w.jpg",
    slug: "tam-quan-trong-cua-ssl-https",
  },
  {
    id: 14,
    title: "Cách xây dựng hệ thống quản lý nội bộ (Internal Dashboard) cho doanh nghiệp",
    date: "14/09/2026",
    readTime: "7 phút đọc",
    excerpt:
      "Thiết kế dashboard trực quan giúp ban giám đốc theo dõi các chỉ số KPI, tài chính và nhân sự tức thì.",
    image: "/images/img-5-w.jpg",
    slug: "xay-dung-internal-dashboard",
  },
  {
    id: 15,
    title: "Chiến lược duy trì và bảo trì website sau khi nghiệm thu bàn giao",
    date: "10/09/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Kiểm tra link hỏng, cập nhật bản vá lỗ hổng và sao lưu định kỳ giúp hệ thống vận hành liên tục không gián đoạn.",
    image: "/images/img-6-w.jpg",
    slug: "chien-luoc-bao-tri-website-sau-ban-giao",
  },
  {
    id: 16,
    title: "Micro-interactions: Những chuyển động nhỏ tạo nên cảm xúc lớn",
    date: "05/09/2026",
    readTime: "4 phút đọc",
    excerpt:
      "Hiệu ứng nút bấm phản hồi, thanh loading sáng tạo mang lại sự thích thú và gắn kết người dùng.",
    image: "/images/img-2-w.jpg",
    slug: "micro-interactions-trong-ui-ux",
  },
  {
    id: 17,
    title: "Cách tối ưu hình ảnh định dạng WebP và AVIF để tăng tốc độ trang web",
    date: "01/09/2026",
    readTime: "5 phút đọc",
    excerpt:
      "Giảm dung lượng ảnh đến 70% mà vẫn giữ nguyên độ nét, giúp web tải nhanh như chớp.",
    image: "/images/img-3-w.jpg",
    slug: "toi-uu-hinh-anh-webp-avif",
  },
  {
    id: 18,
    title: "Xây dựng hệ sinh thái số cho chuỗi bán lẻ: Từ website đến ứng dụng",
    date: "28/08/2026",
    readTime: "6 phút đọc",
    excerpt:
      "Kết nối bán hàng đa kênh omnichannel giúp chăm sóc khách hàng liền mạch và gia tăng giá trị đơn hàng.",
    image: "/images/img-4-w.jpg",
    slug: "he-sinh-thai-so-ban-le",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const postsPerPage = 15;

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setConsultSubmitted(true);
  };

  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-left">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-5xl md:text-6xl"
          >
            Blog
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <article key={post.id} data-aos="fade-up">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image.trim()}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

                    <h2 className="mt-3 text-lg font-bold leading-snug text-[#1D1D1F] transition-colors group-hover:text-blue-600 line-clamp-2">
                      {post.title}
                    </h2>

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

        {totalPages > 1 && (
          <div data-aos="fade-up" className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Trang trước"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-[#1D1D1F] shadow-2xs transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition shadow-2xs ${
                    isActive
                      ? "bg-[#1D1D1F] text-white"
                      : "border border-gray-200/80 bg-white text-[#1D1D1F] hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Trang tiếp theo"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-[#1D1D1F] shadow-2xs transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        <div data-aos="fade-up" className="mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-sm border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/60 p-8 text-center shadow-sm sm:p-12">

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-3xl md:text-4xl">
              Bạn đang tìm kiếm giải pháp website cho doanh nghiệp?
            </h2>

            {consultSubmitted ? (
              <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm font-semibold text-emerald-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                Cảm ơn bạn! Chúng tôi sẽ gửi tài liệu tư vấn qua email trong thời gian sớm nhất.
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="mx-auto mt-8 max-w-md">
                <div className="flex flex-col items-center gap-2 rounded-sm border border-gray-200 bg-white p-1.5 shadow-2xs transition focus-within:border-[#1D1D1F] sm:flex-row sm:rounded-full">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 border-0 focus:ring-0 text-sm text-[#1D1D1F] placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-sm bg-[#1D1D1F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-black active:scale-95 sm:rounded-full sm:w-auto"
                  >
                    Nhận tư vấn
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
