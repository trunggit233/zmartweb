import Link from "next/link";
import Image from "next/image";

export default function HeroLandingPageSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-10 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-5xl lg:text-6xl">
              Landing page tối ưu giải pháp số cho doanh nghiệp
            </h1>

            <p className="mt-5 text-base text-gray-600 sm:text-lg">
              Xây dựng trải nghiệm trực tuyến ấn tượng, tối ưu hiệu suất và thúc đẩy tăng trưởng doanh số với nền tảng hiện đại nhất.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="rounded-sm bg-[#1D1D1F] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-black "
              >
                Xem gói
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-gray-200 bg-white px-6 py-3 font-medium text-[#1D1D1F] shadow-xs transition hover:-translate-y-0.5 hover:bg-gray-50"
              >
                Tư vấn miễn phí
              </Link>
            </div>

          </div>

          <div data-aos="fade-left" className="relative flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-gray-300/40 via-gray-200/30 to-transparent blur-3xl -z-10" />
            <Image
              src="/images/bg-tk-web.png"
              alt="Thiết kế website doanh nghiệp"
              width={736}
              height={1288}
              priority
              className="relative z-10 h-auto max-h-[520px] w-auto object-contain drop-shadow-2xl transition-transform duration-300 lg:max-h-[620px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
