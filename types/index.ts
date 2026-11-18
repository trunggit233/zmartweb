export interface SubNavItem {
  title: string;
  description?: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  title: string;
  href?: string;
  external?: boolean;
  items?: SubNavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: string;
}

export * from "./booking";
