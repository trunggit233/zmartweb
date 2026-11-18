import Image from "next/image";
import { Zap, Target, ShieldCheck, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";

export interface TrustPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "cro",
    number: "01",
    title: "Cấu trúc tâm lý học hành vi (CRO)",
    description:
      "Bố cục từng phần được nghiên cứu kỹ lưỡng để dẫn dắt cảm xúc khách hàng: từ khơi gợi nhu cầu, giải quyết nỗi đau cho đến chốt đơn tự nhiên.",
  },
  {
    id: "speed",
    number: "02",
    title: "Tốc độ tải trang dưới 1.5 giây",
    description:
      "Công nghệ Next.js tối tân giúp Landing Page tải gần như tức thì. Giảm tối đa tỷ lệ thoát trang và tối ưu hóa chi phí giá thầu khi chạy Ads.",
  },
  {
    id: "mobile",
    number: "03",
    title: "Tối ưu 100% trải nghiệm chạm trên Mobile",
    description:
      "Hơn 85% khách hàng truy cập từ điện thoại. Giao diện được may đo vừa vặn mọi kích thước màn hình với các nút gọi, đặt lịch 1 chạm tiện lợi.",
  },
  {
    id: "social-proof",
    number: "04",
    title: "Minh chứng năng lực & Xóa tan rào cản do dự",
    description:
      "Bố trí khéo léo các khối đánh giá khách hàng (Feedback), chứng nhận uy tín và chính sách cam kết rõ ràng, gia tăng niềm tin tuyệt đối.",
  },
];

export const TRUST_METRICS = [
  { value: "90+", label: "Điểm Google PageSpeed" },
  { value: "3.2x", label: "Tăng tỷ lệ chuyển đổi Ads" },
  { value: "100%", label: "Tương thích đa thiết bị" },
  { value: "24/7", label: "Sẵn sàng tiếp nhận data" },
];

export default function BrandTrustLandingPageSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Phần Header Section */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Landing Page chuẩn chỉnh – Khởi nguồn cho niềm tin thương hiệu
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Khách hàng chỉ mất chưa đầy 3 giây để quyết định ở lại hay rời đi. Một Landing Page chuyên nghiệp sẽ biến lượt nhấp chuột đắt đỏ thành khách hàng trung thành.
          </p>
        </div>

        {/* Nội dung chính: Ảnh minh họa + 4 Trụ cột niềm tin */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Cột Trái: Ảnh Mockup trực quan + Thẻ số liệu nổi bật */}
          <div data-aos="fade-right" className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-gray-200/80 bg-gray-50 shadow-xl">
              <Image
                src="/images/working.png"
                alt="Thiết kế Landing Page tạo dựng niềm tin thương hiệu"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-103"
              />

              {/* Lớp phủ chuyển sắc nhẹ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Hiệu ứng trang trí mờ phía sau ảnh */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -top-8 -right-8 -z-10 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
          </div>

          {/* Cột Phải: 4 Trụ cột cốt lõi */}
          <div data-aos="fade-left" className="space-y-5 lg:col-span-6">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group rounded-sm border border-gray-200/80 bg-white p-5.5 sm:p-6 shadow-2xs transition-all duration-200 hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EF] font-bold text-sm text-[#1D1D1F] transition-colors group-hover:bg-[#1D1D1F] group-hover:text-white">
                    {pillar.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#1D1D1F] sm:text-lg">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Khối Thống kê số liệu (Metrics Grid) */}
        <div
          data-aos="fade-up"
          className="mt-16 rounded-sm bg-[#1D1D1F] px-8 py-10 text-white shadow-xl sm:px-12 sm:py-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-white/10">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="text-center sm:px-4">
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-amber-400">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gray-300 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
