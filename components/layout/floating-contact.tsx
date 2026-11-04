import { siteConfig } from "@/config/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-110"
        aria-label="Gọi điện thoại"
      >
        📞
      </a>
    </div>
  );
}

