import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1
          data-aos="fade-up"
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Giải pháp công nghệ hiện đại cho doanh nghiệp của bạn
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
        >
          Xây dựng trải nghiệm trực tuyến ấn tượng, tối ưu hiệu suất và thúc đẩy tăng trưởng vượt bậc.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/services"
            className="rounded-full bg-[#1D1D1F] px-6 py-3 font-medium text-white transition hover:bg-black"
          >
            Khám phá dịch vụ
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-[#1D1D1F] shadow-xs transition hover:bg-gray-50"
          >
            Tư vấn miễn phí
          </Link>
        </div>
      </div>
    </section>
  );
}

