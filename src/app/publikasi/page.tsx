'use client';

import React, { useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

type Publikasi = {
  id: number;
  judul: string;
  tanggal: string;
  image: string;
  konten: string;
};

export default function PublikasiPPKPT() {
  const [selectedItem, setSelectedItem] = useState<Publikasi | null>(null);
  const [view, setView] = useState<'list' | 'detail'>('list');

  const publikasiTulisan = [
    { 
      id: 1, 
      judul: "Tulisan (Topik 1) ...", 
      tanggal: "1 November 2025", 
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { 
      id: 2, 
      judul: "Tulisan (Topik 2) ...", 
      tanggal: "2 November 2025", 
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    { 
      id: 3, 
      judul: "Tulisan (Topik 3) ...", 
      tanggal: "3 November 2025", 
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { 
      id: 4, 
      judul: "Tulisan (Topik 4) ...", 
      tanggal: "4 November 2025", 
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 4. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    { 
      id: 5, 
      judul: "Tulisan (Topik 5) ...", 
      tanggal: "5 November 2025", 
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 5. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    { 
      id: 6, 
      judul: "Tulisan (Topik 6) ...", 
      tanggal: "6 November 2025", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 6. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    { 
      id: 7, 
      judul: "Tulisan (Topik 7) ...", 
      tanggal: "7 November 2025", 
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 7. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
    },
    { 
      id: 8, 
      judul: "Tulisan (Topik 8) ...", 
      tanggal: "8 November 2025", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 8. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
    },
    { 
      id: 9, 
      judul: "Tulisan (Topik 9) ...", 
      tanggal: "9 November 2025", 
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 9. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    },
    { 
      id: 10, 
      judul: "Tulisan (Topik 10) ...", 
      tanggal: "10 November 2025", 
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 10. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
    },
    { 
      id: 11, 
      judul: "Tulisan (Topik 11) ...", 
      tanggal: "11 November 2025", 
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 11. Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
    },
    { 
      id: 12, 
      judul: "Tulisan (Topik 12) ...", 
      tanggal: "12 November 2025", 
      image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Tulisan Topik 12. Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
    }
  ];

  const publikasiLaporan = [
    { 
      id: 1, 
      judul: "Laporan (Topik 1) : Analisis Fenomena Kekerasan Seksual, Tantangan Pelaporan, dan Efektivitas Perlindungan Hukum di Indonesia", 
      tanggal: "1 November 2025", 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      konten: `Laporan ini menyajikan analisis komprehensif mengenai fenomena kekerasan seksual di Indonesia, dengan fokus pada profil korban, modus operandi pelaku, serta hambatan struktural yang dihadapi korban dalam mencari keadilan. Tujuan utama penelitian adalah mengevaluasi efektivitas kerangka hukum dan mekanisme layanan pendampingan yang tersedia bagi penyintas. Penelitian ini menggunakan pendekatan kualitatif dan kuantitatif, meliputi analisis data sekunder dari lembaga bantuan hukum dan kesehatan, serta wawancara mendalam dengan penyintas dan tenaga profesional pendamping. Hasil penelitian mengidentifikasi bahwa 85% kasus kekerasan seksual terjadi di lingkungan terdekat (keluarga, sekolah, atau tempat kerja), dan tingginya stigmatisasi sosial serta prosedur pelaporan yang berbelit menjadi tantangan utama bagi penyintas.

Meskipun Undang-Undang Tindak Pidana Kekerasan Seksual (UU TPKS) telah ada, implementasi di tingkat aparat penegak hukum masih menunjukkan variasi signifikan, terutama dalam aspek pemulihan psikososial korban. Disimpulkan bahwa diperlukan penguatan kapasitas aparat penegak hukum, standardisasi prosedur pendampingan lintas sektor, dan kampanye masif untuk melawan budaya impunitas dan stigmatisasi. Rekomendasi mendesak adalah pembentukan unit layanan terpadu yang sensitif terhadap trauma di setiap wilayah.`
    },
    { 
      id: 2, 
      judul: "Laporan (Topik 2) ...", 
      tanggal: "2 November 2025", 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 2. Temuan-temuan penting disajikan dengan data yang valid dan terverifikasi."
    },
    { 
      id: 3, 
      judul: "Laporan (Topik 3) ...", 
      tanggal: "3 November 2025", 
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 3. Metodologi penelitian dijelaskan secara komprehensif dan sistematis."
    },
    { 
      id: 4, 
      judul: "Laporan (Topik 4) ...", 
      tanggal: "4 November 2025", 
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 4. Hasil analisis menunjukkan tren yang signifikan dalam periode observasi."
    },
    { 
      id: 5, 
      judul: "Laporan (Topik 5) ...", 
      tanggal: "5 November 2025", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 5. Rekomendasi strategis disusun berdasarkan bukti empiris yang kuat."
    },
    { 
      id: 6, 
      judul: "Laporan (Topik 6) ...", 
      tanggal: "6 November 2025", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 6. Implikasi praktis dari temuan penelitian diuraikan dengan jelas."
    },
    { 
      id: 7, 
      judul: "Laporan (Topik 7) ...", 
      tanggal: "7 November 2025", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 7. Kesimpulan diambil setelah analisis menyeluruh terhadap semua data."
    },
    { 
      id: 8, 
      judul: "Laporan (Topik 8) ...", 
      tanggal: "8 November 2025", 
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 8. Visualisasi data membantu pemahaman yang lebih baik tentang pola yang ditemukan."
    },
    { 
      id: 9, 
      judul: "Laporan (Topik 9) ...", 
      tanggal: "9 November 2025", 
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 9. Studi kasus konkret mengilustrasikan aplikasi teori dalam praktik."
    },
    { 
      id: 10, 
      judul: "Laporan (Topik 10) ...", 
      tanggal: "10 November 2025", 
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 10. Limitasi penelitian diakui dan saran untuk penelitian lanjutan diberikan."
    },
    { 
      id: 11, 
      judul: "Laporan (Topik 11) ...", 
      tanggal: "11 November 2025", 
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 11. Kontribusi akademik dari penelitian ini disoroti dengan tepat."
    },
    { 
      id: 12, 
      judul: "Laporan (Topik 12) ...", 
      tanggal: "12 November 2025", 
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=400&h=300&fit=crop",
      konten: "Ini adalah konten lengkap dari Laporan Topik 12. Ringkasan eksekutif memberikan gambaran cepat untuk pembaca yang sibuk."
    }
  ];

  // Ambil laporan lain untuk sidebar (exclude yang sedang dibuka)
  const getLaporanLainnya = () =>
    publikasiLaporan.filter(item => item.id !== selectedItem?.id).slice(0, 5);

  const handleOpenDetail = (item: Publikasi) => {
    setSelectedItem(item);
    setView('detail');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedItem(null);
    setView('list');
  };

  return (
    <div className="min-h-screen">
      {view === 'list' ? (
        /* ================= LIST VIEW ================= */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Publikasi Tulisan */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
              Publikasi Tulisan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {publikasiTulisan.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleOpenDetail(item)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="h-40 sm:h-48 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.judul}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 bg-[#006198]">
                    <div className="flex items-center gap-2 text-white text-xs sm:text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.tanggal}
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {item.judul}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publikasi Laporan */}
          <section>
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
              Publikasi Laporan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {publikasiLaporan.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleOpenDetail(item)}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer bg-[#006198]"
                >
                  <div className="h-40 sm:h-48 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.judul}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-white text-xs sm:text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.tanggal}
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {item.judul}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      ) : (
        /* ================= DETAIL VIEW ================= */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
                Detail Laporan
              </h1>

              {/* Cover */}
              <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-lg mb-6 sm:mb-8">
                <div className="max-w-xs sm:max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={selectedItem?.image || ''}
                    alt="Cover"
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Judul */}
              <div className="rounded-3xl p-5 sm:p-6 shadow-lg mb-6 sm:mb-8 bg-[#006198]">
                <h2 className="text-white text-sm sm:text-lg font-semibold leading-relaxed">
                  {selectedItem?.judul}
                </h2>
              </div>

              {/* Konten */}
              <div className="rounded-3xl p-5 sm:p-8 shadow-lg bg-[#006198]">
                <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line text-justify">
                  {selectedItem?.konten}
                </p>
              </div>

              {/* Back */}
              <button
                onClick={handleBackToList}
                className="mt-6 sm:mt-8 flex items-center gap-2 text-white font-bold px-6 sm:px-8 py-3 rounded-full bg-[#006198]"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali
              </button>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
                Laporan Lainnya
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {getLaporanLainnya().map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenDetail(item)}
                    className="rounded-2xl p-4 shadow-lg cursor-pointer bg-[#006198]"
                  >
                    <div className="flex items-start gap-2 text-white text-xs sm:text-sm mb-2">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {item.tanggal}
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-snug">
                      {item.judul}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      )}
    </div>
  );
}