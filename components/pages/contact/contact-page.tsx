"use client";

import { siteConfig } from "@/config/site";
import BookingForm from "@/components/ui/booking-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <div>
      <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-[#FAF5EF]/60 to-white py-16 sm:min-h-[260px] md:py-20">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D1D1F" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#8E8E93" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#1D1D1F" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0071E3" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#8E8E93" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#1D1D1F" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="wave-line" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1D1D1F" stopOpacity="0.03" />
              <stop offset="50%" stopColor="#1D1D1F" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1D1D1F" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d="M0,160 C320,280 480,40 800,180 C1120,320 1280,100 1440,200 L1440,360 L0,360 Z"
            fill="url(#wave-grad-1)"
          />
          <path
            d="M0,220 C240,100 520,300 840,140 C1160,-20 1320,240 1440,160 L1440,360 L0,360 Z"
            fill="url(#wave-grad-2)"
          />

          <path
            d="M-100,180 C280,320 540,60 900,220 C1260,380 1400,120 1600,220"
            stroke="url(#wave-line)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-100,140 C240,40 600,320 960,160 C1320,0 1460,260 1600,170"
            stroke="url(#wave-line)"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M-100,220 C200,340 500,140 860,260 C1220,380 1380,160 1600,280"
            stroke="url(#wave-line)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl"
          >
            Liên hệ & Đặt lịch tư vấn
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 text-base text-gray-600 sm:text-lg"
          >
            Chúng tôi sẽ giải đáp thắc mắc và tư vấn giải pháp tối ưu cho bạn.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Cột thông tin liên hệ trực tiếp */}
          <div data-aos="fade-right" className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl">
              Thông tin liên hệ trực tiếp
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Bạn có thể đến trực tiếp văn phòng hoặc kết nối nhanh qua Hotline / Zalo để được hỗ trợ tức thì.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#1D1D1F]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-[#1D1D1F]">Địa chỉ văn phòng</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed break-words">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#1D1D1F]">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-[#1D1D1F]">Hotline / Zalo</h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors break-words"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#1D1D1F]">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-[#1D1D1F]">Email hỗ trợ</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors break-words"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#1D1D1F]">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-[#1D1D1F]">Thời gian làm việc</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed break-words">
                    Thứ 2 - Thứ 7: 08:30 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Form đặt lịch chi tiết */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
