import "./css/style.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#FFFFFF] font-inter text-[#1D1D1F] antialiased`}>
        <div className="flex min-h-screen flex-col overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
