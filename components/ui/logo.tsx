import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#1D1D1F]">
      <span>{siteConfig.name}</span>
    </Link>
  );
}

