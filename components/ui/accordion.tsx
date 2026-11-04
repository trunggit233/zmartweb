"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}

export default function Accordion({ title, children, active = false }: AccordionProps) {
  const [open, setOpen] = useState(active);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-gray-800"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden px-5 pb-4 text-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}

