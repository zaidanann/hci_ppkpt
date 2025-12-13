'use client';

import React from 'react';
import Image from 'next/image';

export default function TentangKamiPPKPT() {
  const strukturOrganisasi = [
    { nama: "Tia Rahmania, M.Psi, Psikolog", jabatan: "KETUA", foto: "/profile/tia.jpeg" },
    { nama: "Alia Rahmatulummah, M.Sos", jabatan: "SEKRETARIS", foto: "/profile/alia.jpeg" },
    { nama: "Muhammad Zakaria, S.Pd", jabatan: "WAKIL SEKRETARIS", foto: "/profile/zakaria.JPG" },

    { nama: "Dr. Mohammad Subhi", jabatan: "Divisi Investigasi", foto: "/profile/Subhi.jpg" },
    { nama: "Muhammad Iqbal Tawakal A.Md.", jabatan: "Divisi Investigasi", foto: "/profile/iqbal.jpg" },
    { nama: "Wulandari, M.Ds", jabatan: "Divisi Investigasi", foto: "/profile/Wulandari.jpg" },
    { nama: "Annisa Luthfiyah, M.I.Kom", jabatan: "Divisi Investigasi", foto: "/profile/Annisa.jpg" },
    { nama: "Amirul Mukminin, S.Kom", jabatan: "Divisi Investigasi", foto: "/profile/Amirul.jpg" },

    { nama: "Fitri Aisyah Mahdiyah", jabatan: "Sosialisasi dan Edukasi", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { nama: "Aulia Destiarani", jabatan: "Sosialisasi dan Edukasi", foto: "https://images.unsplash.com/photo-1544716278-9c377afd8e3b?w=200&h=200&fit=crop" },
    { nama: "Dian", jabatan: "Sosialisasi dan Edukasi", foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop" },

    { nama: "Siti Radinta Al Aishya", jabatan: "Pendampingan dan Perlindungan", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { nama: "Tannia Meisa Juwana", jabatan: "Pendampingan dan Perlindungan", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },

    { nama: "Heni Dwi Febriyanti, S.Pd", jabatan: "Riset dan Pengembangan", foto: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&h=200&fit=crop" },
    { nama: "Didip Diandra, MBA", jabatan: "Riset dan Pengembangan", foto: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=200&h=200&fit=crop" },
  ];

  const groupedStruktur = strukturOrganisasi.reduce((acc: any, curr) => {
    if (!acc[curr.jabatan]) acc[curr.jabatan] = [];
    acc[curr.jabatan].push(curr);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* SEJARAH */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
            SEJARAH
          </h2>
          <div className="rounded-2xl p-5 sm:p-8 shadow-lg bg-[#006198]">
            <p className="text-white leading-relaxed text-sm sm:text-base text-justify">
              Satgas ppkpt (pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi)
              universitas paramadina dibentuk berdasarkan permendikbudristek nomor 55 tahun 2024 ...
            </p>
          </div>
        </section>

        {/* VISI */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
            VISI
          </h2>
          <div className="rounded-2xl p-5 sm:p-8 shadow-lg bg-[#006198]">
            <p className="text-white leading-relaxed text-sm sm:text-base text-justify">
              Mewujudkan lingkungan kampus yang aman, inklusif, berkeadilan...
            </p>
          </div>
        </section>

        {/* MISI */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
            MISI
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              "Melakukan edukasi dan sosialisasi tentang pencegahan segala bentuk kekerasan",
              "Menyediakan mekanisme pelaporan yang aman dan rahasia",
              "Memberikan pendampingan psikologis dan sosial",
              "Mendorong budaya kampus yang menghargai kesetaraan"
            ].map((misi, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-8 shadow-lg text-white text-sm sm:text-base text-center bg-[#006198]"
              >
                {misi}
              </div>
            ))}
          </div>
        </section>

        {/* STRUKTUR ORGANISASI */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-10 sm:mb-12">
            STRUKTUR ORGANISASI
          </h2>

          <div className="space-y-10 sm:space-y-14">
            {Object.entries(groupedStruktur).map(([jabatan, anggota]: any, i) => (
              <div key={i} className="text-center">
                <h3 className="text-lg sm:text-2xl font-bold text-blue-900 mb-5 sm:mb-6">
                  {jabatan.toUpperCase()}
                </h3>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                  {anggota.map((person: any, index: number) => (
                    <div key={index} className="flex flex-col items-center w-[120px] sm:w-[160px]">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 border-4 border-blue-900 shadow-lg">
                        <Image
                          src={person.foto}
                          alt={person.nama}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-[11px] sm:text-sm text-blue-900 font-semibold text-center">
                        {person.nama}
                      </p>
                      <p className="text-blue-900 font-bold text-[11px] sm:text-sm">
                        {person.jabatan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
