# Backlog & Nhiệm vụ

## Đã hoàn thành
- [x] Khởi tạo dự án Next.js 16 + React 19 + TypeScript.
- [x] Cấu hình Tailwind CSS v4 (`postcss.config.mjs`, `style.css`).
- [x] Cấu hình TypeScript path alias `@/*` (`tsconfig.json`).
- [x] Tái cấu trúc thư mục đa trang (Multi-page Architecture):
  - Phân tách `components/layout/` (`header`, `footer`, `floating-contact`).
  - Phân tách `components/ui/` (`logo`, `accordion`).
  - Phân tách `components/pages/home/` (`hero-section`).
  - Thiết lập quản lý dữ liệu tập trung `config/` (`site.ts`, `navigation.ts`).
  - Thiết lập `types/` và `lib/utils.ts`.
  - Khởi tạo khung các route đa trang: `/`, `/about`, `/services`, `/contact`, `/signin`, `/api/booking`.
- [x] Kiểm tra TypeCheck (`tsc --noEmit`) đạt 100% không lỗi.
- [X] Sửa lại css Brand trust.
- [X] Fix lỗi cuộn ngang của our-project, sửa lại tiểu tiết bo góc, content, ảnh, căn chữ center...
- [X] Dựng UI chi tiết cho các section trang chủ.
- [X] Bỏ href solution thay vào đó chỉ sử dụng các href khi hover hiện ra.
- [X] Sửa nội dung, bố cục, sửa code thừa, căn chỉnh cho phù hợp với trang contact.

## Kế hoạch tiếp theo ưu ( tiên mức độ 1 )
- [x] Hoàn thiện xử lý form Đặt lịch chi tiết & API chuẩn (Validation, Rate limiting, Honeypot, Logging).
- [ ] Xây dựng trang landing page section.
  - [x] Nêu ra bảng giá (`price-section.tsx`) 3 gói dịch vụ chuẩn UI.
  - [x] Dựng Brand Trust & Niềm tin chuyển đổi (`brand-trust-section.tsx`).
  - [x] Dựng Luận điểm vì sao cần Website (`why-website-section.tsx`) dạng editorial chuyên sâu.
  - [x] Dựng Kho mẫu giao diện thực chiến (`template-showcase-section.tsx`) dạng hàng ngang lướt gọn.
  - [ ] Giới thiệu dịch vụ & tính năng nổi bật.
  - [x] CTA đến form đặt lịch (`cta-section.tsx`) đồng bộ thiết kế trang chủ.
- [ ] Xây dựng trang multi page section.
  - [x] Khởi tạo khung banner Hero (`hero-section.tsx`).
  - [ ] .
  - [ ] .

## Đang hoạt động nhưng sẽ cải thiện sau khi nó đã ổn ưu ( tiên mức độ 2 ).
  - [ ] Sửa lại hero-section của mutil-web nó đang thừa hiệu ứng động cũng như lên phương án sửa đổi.
  - [ ] .
