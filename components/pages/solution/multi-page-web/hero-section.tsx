import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroMultiPageSection() {
  return (
    <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#09090B] py-20 sm:min-h-[640px] md:py-28 lg:min-h-[720px]">
      {/* =========================================================================
          1. HIỆU ỨNG NỀN ĐỘNG MONOCHROME (Apple / Vercel Style)
          Hoàn toàn dùng CSS/Tailwind thuần, GPU-accelerated, siêu nhẹ & mượt
          ========================================================================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
        {/* Lớp lưới ô vuông công nghệ mờ dần ra các góc (Radial Mask Grid) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full stroke-white/[0.04] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        >
          <defs>
            <pattern
              id="multipage-hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#multipage-hero-grid)" />
        </svg>

        {/* Luồng sáng 1: Trắng bạc mờ (Silver Glow) trôi chậm góc trên bên phải */}
        <div className="absolute -top-24 right-1/4 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-white/[0.08] to-zinc-400/[0.02] blur-[120px] animate-float-1" />

        {/* Luồng sáng 2: Xám khói mờ (Charcoal / Mist Glow) trôi góc giữa bên trái */}
        <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-zinc-300/[0.06] via-white/[0.03] to-transparent blur-[130px] animate-float-2" />

        {/* Luồng sáng 3: Ánh xám than sâu (Deep Ash Glow) trôi nhẹ phía dưới */}
        <div className="absolute -bottom-24 left-1/3 h-[400px] w-[550px] rounded-full bg-gradient-to-t from-zinc-600/[0.07] to-transparent blur-[110px] animate-float-3" />

        {/* Đốm sáng đỉnh đầu mờ (Top Spotlight) tạo chiều sâu không gian */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[260px] w-[700px] bg-gradient-to-b from-white/[0.06] to-transparent blur-[90px]" />
      </div>

      {/* =========================================================================
          2. NỘI DUNG CHỮ & CTA TƯƠNG PHẢN CAO (TẬP TRUNG KHẢ NĂNG ĐỌC)
          ========================================================================= */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl lg:max-w-3xl" data-aos="fade-right">
          {/* Tiêu đề chính: Trắng tinh & Chuyển sắc bạc thanh lịch */}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.12]">
            <span className="block bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">
              Thiết kế Website đa trang
            </span>
            <span className="block text-white mt-1">
              chuẩn nhận diện thương hiệu
            </span>
          </h1>

          {/* Đoạn mô tả màu xám nhạt (text-zinc-400) */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Khẳng định vị thế doanh nghiệp, mở rộng quy mô thông tin và tối ưu hóa thứ hạng tìm kiếm Google (SEO) bền vững với nền tảng công nghệ may đo cao cấp.
          </p>

          {/* Nút bấm CTA tương phản cao */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-white/10 transition-all duration-200 hover:bg-zinc-200 hover:scale-102 active:scale-98 cursor-pointer"
            >
              Xem bảng giá
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900/60 px-7 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-white cursor-pointer"
            >
              Tư vấn miễn phí
            </Link>
          </div>

          {/* Dải thông số nhanh tinh tế phía dưới */}
          <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">Tối ưu</p>
              <p className="text-xs text-zinc-400 mt-1">Thiết kế theo thương hiệu</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">90+</p>
              <p className="text-xs text-zinc-400 mt-1">Google PageSpeed</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">Chuẩn SEO</p>
              <p className="text-xs text-zinc-400 mt-1">Cấu trúc đa tầng</p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. CSS KEYFRAMES CHUYỂN ĐỘNG TRÔI NỔI SIÊU CHẬM 
          ========================================================================= */}
      <style>{`
        @keyframes float-blob-1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(55px, -35px, 0) scale(1.08);
          }
          100% {
            transform: translate3d(-35px, 45px, 0) scale(0.95);
          }
        }

        @keyframes float-blob-2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-45px, 50px, 0) scale(1.12);
          }
          100% {
            transform: translate3d(40px, -30px, 0) scale(0.92);
          }
        }

        @keyframes float-blob-3 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.96);
          }
          50% {
            transform: translate3d(40px, 35px, 0) scale(1.07);
          }
          100% {
            transform: translate3d(-35px, -25px, 0) scale(1);
          }
        }

        .animate-float-1 {
          animation: float-blob-1 9s ease-in-out infinite alternate;
          will-change: transform;
        }

        .animate-float-2 {
          animation: float-blob-2 14s ease-in-out infinite alternate;
          will-change: transform;
        }

        .animate-float-3 {
          animation: float-blob-3 10s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
