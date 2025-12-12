'use client';

import React from 'react';
import { MapPin, Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';

export default function TentangKamiPPKPT() {
  const strukturOrganisasi = [
    {
      nama: "Tia Rahmania, M.Psi, Psikolog",
      jabatan: "KETUA",
      foto: "/profile/tia.jpeg",
    },
    {
      nama: "Alia Rahmatulummah, M.Sos",
      jabatan: "SEKRETARIS",
      foto: "/profile/alia.jpeg",
    },
    {
      nama: "Muhammad Zakaria, S.Pd",
      jabatan: "WAKIL SEKRETARIS",
      foto: "/profile/zakaria.JPG",
    },
    {
      nama: "Dr. Mohammad Subhi",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Subhi.jpg",
    },
    {
      nama: "Muhammad Iqbal Tawakal A.Md.",
      jabatan: "Divisi Investigasi",
      foto: "/profile/iqbal.jpg",
    },
    {
      nama: "Wulandari, M.Ds",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Wulandari.jpg",
    },
    {
      nama: "Annisa Luthfiyah, M.I.Kom",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Annisa.jpg",
    },
    {
      nama: "Amirul Mukminin, S.Kom",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Amirul.jpg",
    },
    {
      nama: "Wilma Listra Azzahra",
      jabatan: "SOSIALISASI DAN EDUKASI",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      nama: "Fitri Aiyash Mahdiyah",
      jabatan: "SOSIALISASI DAN EDUKASI",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* SEJARAH */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">SEJARAH</h2>
          <div
            className="rounded-2xl p-8 shadow-lg"
            style={{ backgroundColor: "#006198" }}
          >
            <p className="text-white leading-relaxed text-justify">
              Satgas ppkpt (pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi) 
              universitas paramadina dibentuk berdasarkan permendikbudristek nomor 55 tahun 2024 
              sebagai bentuk komitmen kampus dalam menciptakan lingkungan yang aman, inklusif 
              dan bebas kekerasan satgas berperan dalam pencegahan, penanganan, serta pemulihan 
              kasus sekaligus menanamkan nilai saling menghormati seluruh civitas akademika.
            </p>
          </div>
        </section>

        {/* VISI */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">VISI</h2>
          <div
            className="rounded-2xl p-8 shadow-lg"
            style={{ backgroundColor: "#006198" }}
          >
            <p className="text-white leading-relaxed text-justify">
              Mewujudkan lingkungan kampus yang aman, inklusif, berkeadilan, serta 
              menjunjung tinggi martabat manusia melalui pencegahan, penanganan, dan 
              edukasi terhadap segala bentuk kekerasan di lingkungan Universitas Paramadina 
              maupun di luar lingkungan Universitas Paramadina.
            </p>
          </div>
        </section>

        {/* MISI */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">MISI</h2>
          <div className="space-y-4">
            {["Melakukan edukasi dan sosialisasi tentang pencegahan segala bentuk kekerasan", "Menyediakan mekasisme pelapiran yang aman rahasia dan berpihak pada korban", "Memberikan pendampingan psikologis dan sosial bagi penyitas", "Mendorong budaya kampus yang menghargai kesetaraan dan keselamatan semua pihak"].map((misi, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 shadow-lg text-white text-center"
                style={{ backgroundColor: "#006198" }}
              >
                {misi}
              </div>
            ))}
          </div>
        </section>

        {/* STRUKTUR ORGANISASI */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            STRUKTUR ORGANISASI
          </h2>

          <div className="space-y-10">

            {/* Top Level - Ketua & Sekretaris */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-12">
              {strukturOrganisasi.slice(0, 2).map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                    <Image
                      src={person.foto}
                      alt={person.nama}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-blue-900 font-semibold">
                    {person.nama}
                  </p>
                  <p className="text-blue-900 font-bold text-sm sm:text-base">
                    {person.jabatan}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Level – mobile grid, desktop row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-6 sm:gap-8">
              {strukturOrganisasi.slice(2, 6).map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-[160px]">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                    <Image
                      src={person.foto}
                      alt={person.nama}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-900 font-semibold">{person.nama}</p>
                  <p className="text-blue-900 font-bold text-xs sm:text-sm">{person.jabatan}</p>
                </div>
              ))}
            </div>

            {/* Bottom Level – mobile grid, desktop row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-6 sm:gap-8">
              {strukturOrganisasi.slice(6, 10).map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-[160px]">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                    <Image
                      src={person.foto}
                      alt={person.nama}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-900 font-semibold">{person.nama}</p>
                  <p className="text-blue-900 font-bold text-xs sm:text-sm">{person.jabatan}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
