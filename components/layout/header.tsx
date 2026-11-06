import Link from "next/link";
import Logo from "@/components/ui/logo";
import { mainNav } from "@/config/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-sm bg-[#1D1D1F] px-4 py-2 text-sm font-medium text-white transition hover:bg-black hover:scale-101"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </header>
  );
}

