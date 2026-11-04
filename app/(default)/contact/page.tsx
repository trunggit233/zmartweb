import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Liên hệ",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
        Liên hệ với chúng tôi
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Hãy để lại thông tin hoặc liên hệ trực tiếp qua hotline {siteConfig.phone} để được tư vấn nhanh chóng.
      </p>
    </div>
  );
}

