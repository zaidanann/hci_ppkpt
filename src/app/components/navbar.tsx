/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/image/logoku.png"
            alt="Logo PPKPT Paramadina"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-blue-900 font-semibold hover:text-blue-700">HOME</Link>
          <Link href="/abaut" className="text-blue-900 font-semibold hover:text-blue-700">TENTANG KAMI</Link>
          <Link href="/publikasi" className="text-blue-900 font-semibold hover:text-blue-700">PUBLIKASI</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-blue-900 font-semibold hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>

          <Link
            href="/abaut"
            className="block text-blue-900 font-semibold hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            TENTANG KAMI
          </Link>

          <Link
            href="/publikasi"
            className="block text-blue-900 font-semibold hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            PUBLIKASI
          </Link>
        </div>
      )}
    </header>
  );
}
