"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { mainNav } from "@/config/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSolution, setExpandedSolution] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => {
            if (item.items) {
              return (
                <div key={item.title} className="group relative py-2">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-black focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-3.5 w-3.5 text-gray-500 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="invisible absolute -left-12 top-full w-[360px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-xl">
                      <div className="space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="group/item flex flex-col rounded-xl p-3 transition hover:bg-gray-50"
                          >
                            <span className="text-sm font-bold text-[#1D1D1F] transition-colors group-hover/item:text-blue-600">
                              {subItem.title}
                            </span>
                            {subItem.description && (
                              <span className="mt-0.5 line-clamp-1 text-xs text-gray-500">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (!item.href) return null;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-sm bg-[#1D1D1F] px-4 py-2 text-sm font-medium text-white transition hover:scale-101 hover:bg-black"
          >
            Liên hệ ngay
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-[#1D1D1F] shadow-2xs transition hover:bg-gray-50 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/20 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`absolute inset-x-4 top-[calc(100%+8px)] z-50 rounded-2xl border border-gray-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-1">
          {mainNav.map((item) => {
            if (item.items) {
              return (
                <div key={item.title} className="py-1">
                  <button
                    onClick={() => setExpandedSolution(!expandedSolution)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#1D1D1F] transition hover:bg-gray-50"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        expandedSolution ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      expandedSolution
                        ? "mt-1 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="space-y-1 overflow-hidden pl-3 pr-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (!item.href) return null;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#1D1D1F] transition hover:bg-gray-50"
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 border-t border-gray-100 pt-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-[#1D1D1F] py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-black active:scale-98"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
