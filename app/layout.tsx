import "./css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    images: [""],
  },
  metadataBase: new URL('https://domain.com')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#FAF5EF] font-inter text-[#1C1F33] antialiased`}>
        <div className="flex min-h-screen flex-col overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}