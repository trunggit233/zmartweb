import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CtaActionSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div
          data-aos="fade-up"
          className="relative overflow-hidden rounded-3xl bg-[#1D1D1F] px-8 py-10 text-white shadow-xl sm:px-12 sm:py-14 lg:px-16"
        >
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Sẵn sàng nâng tầm thương hiệu cùng ZmartWeb?
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:text-lg">
                Đồng hành cùng bạn xây dựng website may đo đẳng cấp, tối ưu trải nghiệm và thúc đẩy tăng trưởng doanh số bền vững.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-bold text-[#1D1D1F] transition hover:bg-gray-100 hover:scale-101 active:scale-95"
              >
                Bắt đầu dự án
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/10 hover:border-white/30"
              >
                <PhoneCall className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
