"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import FloatingContact from "@/components/ui/floating-contact";

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
    <div className="flex min-h-screen flex-col bg-[#FAF5EF] text-[#1C1F33]">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}