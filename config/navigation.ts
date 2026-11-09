import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Giải pháp",
    items: [
      {
        title: "Thiết kế Landing Page",
        description: "Tối ưu tỷ lệ chuyển đổi, bứt phá doanh số chiến dịch.",
        href: "/solution/landing-page",
      },
      {
        title: "Thiết kế Website Nhiều Trang",
        description: "May đo nhận diện thương hiệu độc quyền, chuẩn SEO Google.",
        href: "/solution/multi-page-web",
      },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Liên hệ", href: "/contact" },
];
