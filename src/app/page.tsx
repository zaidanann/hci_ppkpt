'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone, Play } from 'lucide-react';
import Image from 'next/image';

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
      descriptionImage: "Workshop dan sosialisasi...",
      descriptionVideo: "Video edukasi..."
    },
    {
      image: "https://fs.uin-antasari.ac.id/wp-content/uploads/2023/03/kekerasan-seksual-islam-kartun.jpg",
      videoId: "93FiM3tWT0g",
      videoThumbnail: "https://img.youtube.com/vi/93FiM3tWT0g/maxresdefault.jpg",
      subtitleImage: "Kegiatan Edukasi Mahasiswa",
      subtitleVideo: "Video Edukasi 2",
      descriptionImage: "Seminar edukasi...",
      descriptionVideo: "Video edukasi mahasiswa"
    },
    {
      image: "https://statik.unesa.ac.id/plb/thumbnail/1c92bc98-d817-4045-a449-e90af057dd04.jpg",
      videoId: "qY_HPz6gMSA",
      videoThumbnail: "https://img.youtube.com/vi/qY_HPz6gMSA/maxresdefault.jpg",
      subtitleImage: "Kegiatan Sosialisasi Lanjutan",
      subtitleVideo: "Video Edukasi 3",
      descriptionImage: "Kegiatan lanjutan...",
      descriptionVideo: "Video edukasi tambahan"
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const nextNews = () => setCurrentNews((prev) => (prev + 1) % newsItems.length);
  const prevNews = () => setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(210,227,236,0.6), rgba(231,238,245,0.6)),
            url('${heroSlides[currentSlide].background}')
          `
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="p-1 sm:p-2 rounded-full hover:bg-white/40 transition z-20"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>

              {/* Main Content */}
              <div className="flex-1 flex items-center justify-center px-4 sm:px-12 text-center">
                <div className="max-w-xl">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
                    {heroSlides[currentSlide].title}
                  </h1>

                  <a
                    href={heroSlides[currentSlide].link}
                    className="inline-flex bg-white/80 hover:bg-white text-blue-900 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full"
                  >
                    {heroSlides[currentSlide].buttonText}
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>

                  {/* Indicators */}
                  <div className="flex gap-2 mt-6 justify-center">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-1 sm:p-2 rounded-full hover:bg-white/40 transition z-20"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

            {/* Left text */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 mt-6">
                ABOUT US
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                PPKPT Universitas Paramadina...
              </p>

              <a 
                href="/abaut"
                className="inline-flex text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white"
              >
                Selengkapnya <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">

              {/* Konsultasi */}
              <a 
                href={`https://api.whatsapp.com/send?phone=+6285813199452&text=${encodeURIComponent("Halo, saya ingin konsultasi dengan Satgas PPKPT Paramadina.")}`}
                target="_blank"
                className="bg-gradient-to-br from-[#1C4B69] to-[#A6CDE4] rounded-3xl p-6 sm:p-8 text-white w-full sm:w-64 h-72 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-3xl">👥</div>
                <h3 className="text-xl font-bold">KONSULTASI</h3>
                <p className="text-sm mt-2 opacity-90">Layanan konsultasi profesional</p>
              </a>

              {/* Pengaduan */}
              <a 
                href="/pengaduan"
                className="bg-gradient-to-br from-[#1C4B69] to-[#A6CDE4] rounded-3xl p-6 sm:p-8 text-white w-full sm:w-64 h-72 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-3xl">📋</div>
                <h3 className="text-xl font-bold">PENGADUAN</h3>
                <p className="text-sm mt-2 opacity-90">Laporkan kejadian kekerasan</p>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="mt-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
            PUBLIKASI & EDUKASI
          </h2>

          <div className="relative flex items-center justify-center gap-4">

            {/* Prev */}
            <button onClick={prevNews} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-7 h-7 text-blue-900" />
            </button>

            {/* Slides */}
            <div className="relative w-full max-w-6xl h-auto sm:h-96">

              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentNews ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-6 h-auto sm:h-full">

                    {/* Left: Image */}
                    <div className="w-full sm:w-1/2 relative rounded-xl overflow-hidden h-64 sm:h-full">
                      <img src={item.image} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 bg-black/60 text-white p-3">
                        {item.subtitleImage}
                      </div>
                    </div>

                    {/* Right: Video */}
                    <div 
                      className="w-full sm:w-1/2 relative rounded-xl overflow-hidden h-64 sm:h-full group cursor-pointer"
                      onClick={() => handleVideoClick(item.videoId)}
                    >
                      <img src={item.videoThumbnail} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="text-white w-8 h-8 sm:w-10 sm:h-10 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 bg-black/60 text-white p-3">
                        {item.subtitleVideo}
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* Next */}
            <button onClick={nextNews} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight className="w-7 h-7 text-blue-900" />
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}
