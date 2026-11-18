import Link from "next/link";
import Image from "next/image";

export default function HeroLandingPageSection() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden py-20 sm:min-h-[600px] md:py-28 lg:min-h-[680px]">
      {/* =========================================================================
          ẢNH NỀN FULL MÀN NGANG (KHÔNG LỚP PHỦ ĐỂ GIỮ NÉT 100%)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
        <Image
          src="/images/bg-img-hero-2.png"
          alt="Landing Page Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================================
          NỘI DUNG CHỮ TỐI ƯU CHO NỀN NEON (ĐỘ TƯƠNG PHẢN & ĐỔ BÓNG NỔI BẬT)
          ========================================================================= */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl lg:max-w-3xl" data-aos="fade-right">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] sm:text-5xl lg:text-6xl leading-[1.15]">
            Landing page tối ưu giải pháp số cho doanh nghiệp
          </h1>

          <p className="mt-5 text-base font-medium text-gray-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:text-lg sm:leading-relaxed">
            Xây dựng trải nghiệm trực tuyến ấn tượng, tối ưu hiệu suất và thúc đẩy tăng trưởng doanh số với nền tảng hiện đại nhất.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="rounded-sm bg-white px-6 py-3 font-bold text-[#1D1D1F] shadow-[0_0_25px_rgba(255,255,255,0.4)] transition hover:-translate-y-0.5 hover:bg-gray-100 cursor-pointer"
            >
              Xem gói
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/60 bg-black/45 px-6 py-3 font-semibold text-white backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-black/65 hover:border-white cursor-pointer"
            >
              Tư vấn miễn phí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
