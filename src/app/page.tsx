'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone, Play } from 'lucide-react';

export default function PPKPTLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

  const heroSlides = [
    {
      title: "Berita tertangkapnya Agus Buntung!",
      buttonText: "SELENGKAPNYA",
      link: "#about",
      background: "/image/agus.png"
    },
    {
      title: "Layanan Konsultasi dan Pengaduan PPKPT",
      buttonText: "SELENGKAPNYA",
      link: "#contact",
      background: "/image/logoku.png"
    },
    {
      title: "Edukasi dan Pencegahan Kekerasan di Kampus",
      buttonText: "SELENGKAPNYA",
      link: "#news",
      background: "/image/logoku.png"
    }
  ];

  const newsItems = [
  {
    image: "https://ykp.or.id/datainfo/wp-content/uploads/2025/01/40445pemkot-tangerang-berikan-pendampingan-korban-kekerasan-pada-perempuan-dan-anak-40445.jpg",
    videoId: "AaTYHDI-o1w",
    videoThumbnail: "https://img.youtube.com/vi/AaTYHDI-o1w/maxresdefault.jpg",
    subtitleImage: "Kegiatan Sosialisasi PPKPT",
    subtitleVideo: "Video Edukasi 1",
    descriptionImage: "Workshop dan sosialisasi tentang pencegahan kekerasan di kampus",
    descriptionVideo: "Video edukasi tentang cara mencegah dan melaporkan pelecehan seksual"
  },
  {
    image: "https://fs.uin-antasari.ac.id/wp-content/uploads/2023/03/kekerasan-seksual-islam-kartun.jpg",
    videoId: "93FiM3tWT0g",
    videoThumbnail: "https://img.youtube.com/vi/93FiM3tWT0g/maxresdefault.jpg",
    subtitleImage: "Kegiatan Edukasi Mahasiswa",
    subtitleVideo: "Video Edukasi 2",
    descriptionImage: "Seminar tentang edukasi anti kekerasan di kampus",
    descriptionVideo: "Video edukasi untuk mahasiswa"
  },
  {
    image: "https://statik.unesa.ac.id/plb/thumbnail/1c92bc98-d817-4045-a449-e90af057dd04.jpg",
    videoId: "qY_HPz6gMSA",
    videoThumbnail: "https://img.youtube.com/vi/qY_HPz6gMSA/maxresdefault.jpg",
    subtitleImage: "Kegiatan Sosialisasi Lanjutan",
    subtitleVideo: "Video Edukasi 3",
    descriptionImage: "Kegiatan lanjutan pencegahan kekerasan di kampus",
    descriptionVideo: "Video edukasi tambahan untuk mahasiswa"
  }
];


  // Auto slide untuk hero section setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="min-h-screen ">

      <section
  id="home"
  className="relative h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
  style={{
  backgroundImage: `
    linear-gradient(to bottom, rgba(210,227,236,0.6), rgba(231,238,245,0.6)),
    url('${heroSlides[currentSlide].background || "/image/default.jpg"}')
  `
}}

>
  {/* Overlay agar teks lebih jelas */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">

        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-white/50 transition-colors z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <div className="flex-1 flex items-center justify-between px-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-xl transition-all duration-500">
              {heroSlides[currentSlide].title}
            </h1>

            <a
              href={heroSlides[currentSlide].link}
              className="inline-flex bg-white/80 hover:bg-white text-blue-900 font-semibold px-8 py-3 rounded-full transition-colors items-center gap-2"
            >
              {heroSlides[currentSlide].buttonText}
              <ChevronRight className="w-5 h-5" />
            </a>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-white/50 transition-colors z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-blue-900 mb-6 mt-6">ABOUT US</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                PPKPT Universitas Paramadina berkomitmen untuk memberikan layanan konsultasi 
                pengaduan dan publikasi kegiatan yang mendukung penguatan kapasitas 
                perempuan dan anak lingkungan kampus Paramadina dan masyarakat
              </p>
              <a 
                href="/abaut"
                className="inline-flex text-blue-900 font-semibold items-center gap-2 border-2 border-blue-900 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
              >
                Selengkapnya
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6">
              <a 
                href={`https://api.whatsapp.com/send?phone=+6285813199452&text=${encodeURIComponent("Halo, saya ingin konsultasi dengan Satgas PPKPT Paramadina.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-[linear-gradient(to_bottom_right,#1C4B69,#A6CDE4)] 
                          rounded-3xl p-8 text-white w-64 h-80 flex flex-col items-center 
                          justify-center text-center shadow-lg hover:shadow-2xl 
                          transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <div className="text-4xl">👥</div>
                </div>
                <h3 className="text-xl font-bold">KONSULTASI</h3>
                <p className="text-sm mt-2 opacity-90">Layanan konsultasi profesional</p>
              </a>


              <a 
                href="/pengaduan"
                className="mt-5 bg-[linear-gradient(to_bottom_right,#1C4B69,#A6CDE4)] 
                          rounded-3xl p-8 text-white w-64 h-80 flex flex-col items-center 
                          justify-center text-center shadow-lg hover:shadow-2xl 
                          transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <div className="text-4xl">📋</div>
                </div>
                <h3 className="text-xl font-bold">PENGADUAN</h3>
                <p className="text-sm mt-2 opacity-90">Laporkan kejadian kekerasan</p>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center mt-20">PUBLIKASI & EDUKASI</h2>
          
          <div className="relative flex items-center justify-center gap-6">
            <button 
              onClick={prevNews}
              className="p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Previous news"
            >
              <ChevronLeft className="w-8 h-8 text-blue-900" />
            </button>

            <div className="relative w-full max-w-6xl h-96 overflow-hidden">
              {newsItems.map((item, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentNews ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="rounded-2xl shadow-lg overflow-hidden h-full flex gap-6 p-6">
                    {/* Kiri - Foto */}
                    <div className="w-1/2 relative rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.subtitleImage}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white font-semibold">{item.subtitleImage}</p>
                      </div>
                    </div>

                    {/* Kanan - Video */}
                    <div className="w-1/2 relative rounded-xl overflow-hidden group cursor-pointer" 
                        onClick={() => handleVideoClick(item.videoId)}>
                      <img 
                        src={item.videoThumbnail} 
                        alt={item.subtitleVideo}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white font-semibold">{item.subtitleVideo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <button 
              onClick={nextNews}
              className="p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Next news"
            >
              <ChevronRight className="w-8 h-8 text-blue-900" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}