import Link from "next/link";
import Image from "next/image";

export default function BrandTrust() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center px-4">
          <span className="inline-flex items-center px-3 py-1 text-lg font-medium text-gray-800 rounded-md">
            Thiết kế website theo yêu cầu
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl">
            Website theo yêu cầu mang tới dấu ấn NIỀM TIN sâu sắc cho thương hiệu
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Website được thiết kế theo yêu cầu giúp tạo giao diện mang đậm bản sắc thương hiệu, độc đáo và khác biệt. Mọi chi tiết được thiết kế đồng bộ với bộ nhận diện, tạo ấn tượng chuyên nghiệp và ghi dấu trong tâm trí khách hàng.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-aos="fade-right" className="relative aspect-4/3 w-full overflow-hidden border border-gray-200/80 shadow-sm sm:aspect-[4/3]">
            <div className="relative h-full w-full overflow-hidden bg-gray-50">
              <Image
                src="/images/working.png"
                alt="Dấu ấn thương hiệu website"
                fill
                className="object-cover object-[center_25%] "
              />
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-4">
            <div className="rounded-[7px] border border-gray-200/70 bg-white p-6 shadow-2xs transition hover:border-gray-300">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 font-bold text-gray-800">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1F]">Độc bản & Bản sắc riêng</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mỗi chi tiết được may đo chính xác theo bộ nhận diện thương hiệu, nói không với các mẫu giao diện rập khuôn đại trà.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[7px] border border-gray-200/70 bg-white p-6 shadow-2xs transition hover:border-gray-300">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 font-bold text-gray-800">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1F]">Trải nghiệm người dùng chuẩn mực (UI/UX)</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Bố cục tinh gọn và trực quan giúp truyền tải trọn vẹn thông điệp, tạo dựng sự tín nhiệm ngay từ những giây đầu tiên.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[7px] border border-gray-200/70 bg-white p-6 shadow-2xs transition hover:border-gray-300">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 font-bold text-gray-800">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1F]">Tối ưu chuyển đổi & Chuẩn SEO</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Cấu trúc mã nguồn chuẩn chỉ giúp website đạt thứ hạng cao trên công cụ tìm kiếm và gia tăng tỷ lệ chuyển đổi khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}