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

## Kế hoạch tiếp theo
- [X] Sửa lại css Brand trust.
- [X] Fix lỗi cuộn ngang của our-project, sửa lại tiểu tiết bo góc, content, ảnh, căn chữ center...
- [X] Dựng UI chi tiết cho các section trang chủ.
- [ ] Dựng trang contact, bóc tách cấu trúc, from gọn gàng.
- [ ] Hoàn thiện xử lý form Đặt lịch & gửi mail/API.

