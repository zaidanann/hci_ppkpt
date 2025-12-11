/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    
    <div className="flex items-center gap-3">
      <img
          src="/image/logoku.png"
          alt="Logo PPKPT Paramadina"
          className="h-20 w-auto object-contain scale-[1.9]"
          style={{ transformOrigin: "left center" }}
      />

    </div>

    <nav className="hidden md:flex gap-8">
      <Link href="/" className="text-blue-900 font-semibold hover:text-blue-700">HOME</Link>
      <Link href="/abaut" className="text-blue-900 font-semibold hover:text-blue-700">TENTANG KAMI</Link>
      <Link href="/publikasi" className="text-blue-900 font-semibold hover:text-blue-700">PUBLIKASI</Link>
    </nav>

  </div>
</header>

  );
}
