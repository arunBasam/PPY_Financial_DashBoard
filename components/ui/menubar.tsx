"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Menubar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full bg-background border-b shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Brand */}
        <div className="text-lg font-semibold">FinancialBoard</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Reports
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Analytics
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Settings
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Reports
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Settings
          </a>
        </div>
      )}
    </nav>
  );
}
