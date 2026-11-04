"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingContact from "@/components/layout/floating-contact";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
