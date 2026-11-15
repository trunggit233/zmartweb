"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Thời gian hoàn thành một website theo yêu cầu là bao lâu?",
    answer:
      "Thông thường dự án sẽ hoàn thiện từ 10 đến 20 ngày làm việc tùy thuộc vào quy mô và độ phức tạp của các tính năng nghiệp vụ. ZmartWeb cam kết tiến độ minh bạch theo từng giai đoạn phát triển.",
  },
  {
    question: "Chi phí thiết kế website may đo được tính như thế nào?",
    answer:
      "Chi phí phụ thuộc vào độ phức tạp của giao diện may đo, các tính năng tích hợp và yêu cầu bảo mật riêng. Chúng tôi sẽ tư vấn và gửi báo giá trọn gói rõ ràng, cam kết không phát sinh phụ phí sau khi ký hợp đồng.",
  },
  {
    question: "Website có được chuẩn SEO và tối ưu trên điện thoại không?",
    answer:
      "100% website do ZmartWeb xây dựng đều được tối ưu cấu trúc chuẩn SEO kỹ thuật, tốc độ tải trang nhanh theo chuẩn Google Core Web Vitals và hiển thị chuẩn mực trên mọi màn hình di động, tablet, máy tính.",
  },
  {
    question: "Sau khi bàn giao, tôi có thể tự quản trị và cập nhật nội dung không?",
    answer:
      "Có. Giao diện quản trị nội dung được thiết kế tối giản, trực quan và dễ sử dụng. Chúng tôi cung cấp video hướng dẫn chi tiết và hỗ trợ 1-1 cho đến khi nhân sự của bạn sử dụng thành thạo.",
  },
  {
    question: "Chính sách bảo hành và hỗ trợ sau khi website đi vào hoạt động ra sao?",
    answer:
      "ZmartWeb bảo hành kỹ thuật trọn đời đối với các lỗi phát sinh từ mã nguồn. Đồng thời chúng tôi luôn sẵn sàng hỗ trợ kỹ thuật, kiểm tra định kỳ và sao lưu dữ liệu an toàn.",
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-up" className="max-w-2xl mx-auto text-center px-4">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl md:text-5xl">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Tổng hợp các câu hỏi phổ biến nhất về quy trình triển khai, chi phí và chế độ bảo hành tại ZmartWeb.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xs transition-all duration-200 hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-2 text-left"
                >
                  <span className="text-base font-bold text-[#1D1D1F] sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1D1D1F] text-white" : "text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-sm sm:text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div data-aos="fade-up" className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Bạn vẫn còn câu hỏi chưa được giải đáp?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#1D1D1F] underline underline-offset-4 hover:text-blue-600 transition-colors"
            >
              Liên hệ trực tiếp với chúng tôi
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
