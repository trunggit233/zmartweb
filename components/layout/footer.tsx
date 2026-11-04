import Link from "next/link";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/80 bg-white py-12 text-[#1D1D1F]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Điều hướng</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Liên hệ</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Hotline: {siteConfig.phone}</li>
              <li>Email: {siteConfig.email}</li>
              <li>Địa chỉ: {siteConfig.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name}. Tất cả các quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}

