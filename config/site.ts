import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ZmartWeb",
  description: "Thiết kế website chuyên nghiệp, chuẩn SEO và tối ưu trải nghiệm",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zmartweb.com",
  phone: process.env.NEXT_PUBLIC_HOTLINE || "0978438191",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.zmartweb@gmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Hà Nội, Việt Nam",
};
