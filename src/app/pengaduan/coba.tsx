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
      posisi: "top"
    },
    {
      nama: "Alia Rahmatulummah, M.Sos",
      jabatan: "SEKRETARIS",
      foto: "/profile/alia.jpeg",
      posisi: "top"
    },
    {
      nama: "Muhammad Zakaria, S.Pd",
      jabatan: "WAKIL SEKRETARIS",
      foto: "/profile/zakaria.JPG",
      posisi: "top"
    },
    {
      nama: "Dr. Mohammad Subhi",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Subhi.jpg",
      posisi: "middle-left"
    },
    {
      nama: "Muhammad Iqbal Tawakal A.Md.",
      jabatan: "Divisi Investigasi",
      foto: "/profile/iqbal.jpg",
      posisi: "middle-left"
    },
    {
      nama: "Wulandari, M.Ds",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Wulandari.jpg",
      posisi: "middle-left"
    },
    {
      nama: "Annisa Luthfiyah, M.I.Kom",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Annisa.jpg",
      posisi: "middle-left"
    },
    {
      nama: "Amirul Mukminin, S.Kom",
      jabatan: "Divisi Investigasi",
      foto: "/profile/Amirul.jpg",
      posisi: "middle-left"
    },
    {
      nama: "Wilma Listra Azzahra",
      jabatan: "SOSIALISASI DAN EDUKASI",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      posisi: "middle-center-left"
    },
    {
      nama: "Fitri Aiyash Mahdiyah",
      jabatan: "SOSIALISASI DAN EDUKASI",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      posisi: "middle-center-right"
    },
    {
      nama: "Heni Dwi Kusbiyanti, S.Pd",
      jabatan: "PELAPORAN DAN PENGADUAN KASUS",
      foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      posisi: "middle-right"
    },
    {
      nama: "Fitri Aiyash Mahdiyah",
      jabatan: "REHABILITAS",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      posisi: "bottom-left"
    },
    {
      nama: "Dr. Muhammad Sobri",
      jabatan: "PENANGANAN KASUS",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      posisi: "bottom-center-left"
    },
    {
      nama: "Alia Rahmahummah, S.Sos",
      jabatan: "PENANGANAN KASUS",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      posisi: "bottom-center-right"
    },
    {
      nama: "Farah Nur Sabrina",
      jabatan: "PENANGANAN KASUS",
      foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
      posisi: "bottom-right"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sejarah */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">SEJARAH</h2>
          <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
            <p className="text-white leading-relaxed text-justify">
              Satgas ppkpt (pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi) 
              universitas paramadina dibentuk berdasarkan permendikbudristek nomor 55 tahun 2024 
              sebagai bentuk komitmen kampus dalam menciptakan lingkungan yang aman, inklusif 
              dan bebas kekerasan satgas berperan dalam pencegahan, penanganan, serta pemulihan 
              kasus sekaligus menanamkan nilai saling menghormati seluruh civitas akademika.
            </p>
          </div>
        </section>

        {/* Visi */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">VISI</h2>
          <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
            <p className="text-white leading-relaxed text-justify">
              Mewujudkan lingkungan kampus yang aman, inklusif, berkeadilan, serta 
              menjunjung tinggi martabat manusia melalui pencegahan, penanganan, dan 
              edukasi terhadap segala bentuk kekerasan di lingkungan Universitas Paramadina 
              maupun di luar lingkungan Universitas Paramadina.
            </p>
          </div>
        </section>

        {/* Misi */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">MISI</h2>
          <div className="space-y-4">
            <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
              <p className="text-white text-center">
                Melakukan edukasi dan sosialisasi tentang pencegahan segala bentuk kekerasan
              </p>
            </div>
            <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
              <p className="text-white text-center">
                Menyediakan mekasisme pelapiran yang aman rahasia dan berpihak pada korban
              </p>
            </div>
            <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
              <p className="text-white text-center">
                Memberikan pendampingan psikologis dan sosial bagi penyitas
              </p>
            </div>
            <div className="rounded-2xl p-8 shadow-lg"
          style={{ backgroundColor: "#006198" }}>
              <p className="text-white text-center">
                Mendorong budaya kampus yang menghargai kesetaraan dan keselamatan semua pihak
              </p>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">STRUKTUR ORGANISASI</h2>
          
          <div className="space-y-8">
            {/* Top Level - Ketua & Sekretaris */}
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                  <Image 
                    src={strukturOrganisasi[0].foto} 
                    alt={strukturOrganisasi[0].nama}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-blue-900 font-semibold text-center mb-1">
                  {strukturOrganisasi[0].nama}
                </p>
                <p className="text-blue-900 font-bold">{strukturOrganisasi[0].jabatan}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                  <Image 
                    src={strukturOrganisasi[1].foto} 
                    alt={strukturOrganisasi[1].nama}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-blue-900 font-semibold text-center mb-1">
                  {strukturOrganisasi[1].nama}
                </p>
                <p className="text-blue-900 font-bold">{strukturOrganisasi[1].jabatan}</p>
              </div>
            </div>

            {/* Middle Level - 4 positions */}
            <div className="flex justify-center gap-8">
              {strukturOrganisasi.slice(2, 6).map((person, index) => (
                <div key={index} className="flex flex-col items-center max-w-[180px]">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                    <Image 
                      src={person.foto} 
                      alt={person.nama}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-blue-900 font-semibold text-center mb-1">
                    {person.nama}
                  </p>
                  <p className="text-blue-900 font-bold text-sm text-center">{person.jabatan}</p>
                </div>
              ))}
            </div>

            {/* Bottom Level - 4 positions */}
            <div className="flex justify-center gap-8">
              {strukturOrganisasi.slice(6, 10).map((person, index) => (
                <div key={index} className="flex flex-col items-center max-w-[180px]">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow-lg">
                    <Image 
                      src={person.foto} 
                      alt={person.nama}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-blue-900 font-semibold text-center mb-1">
                    {person.nama}
                  </p>
                  <p className="text-blue-900 font-bold text-sm text-center">{person.jabatan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}