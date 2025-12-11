'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const nextNews = () => setCurrentNews((prev) => (prev + 1) % newsItems.length);
  const prevNews = () => setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="min-h-screen">

      {/* HERO SECTION (lebih responsif) */}
      <section
        id="home"
        className="relative h-[70vh] md:h-[90vh] flex items-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.5)),
            url('${heroSlides[currentSlide].background}')
          `
        }}
      >
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="text-center md:text-left max-w-lg mx-auto md:mx-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-5">
            {heroSlides[currentSlide].title}
          </h1>

          <a
            href={heroSlides[currentSlide].link}
            className="inline-flex bg-white/90 text-blue-900 px-6 py-2 rounded-full font-semibold"
          >
            {heroSlides[currentSlide].buttonText}
          </a>

          {/* INDICATORS */}
          <div className="flex gap-2 mt-5 justify-center md:justify-start">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* NEWS SECTION – Mobile jadi vertikal */}
      <section id="news" className="mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
          PUBLIKASI & EDUKASI
        </h2>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevNews}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          <div className="w-full max-w-5xl">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentNews ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col md:flex-row gap-4">

                  {/* FOTO */}
                  <div className="w-full md:w-1/2 relative">
                    <img
                      src={item.image}
                      alt={item.subtitleImage}
                      className="w-full h-56 md:h-full object-cover rounded-xl"
                    />
                    <p className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                      {item.subtitleImage}
                    </p>
                  </div>

                  {/* VIDEO */}
                  <div
                    className="w-full md:w-1/2 relative group cursor-pointer"
                    onClick={() => handleVideoClick(item.videoId)}
                  >
                    <img
                      src={item.videoThumbnail}
                      alt={item.subtitleVideo}
                      className="w-full h-56 md:h-full object-cover rounded-xl"
                    />

                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                      </div>
                    </div>

                    <p className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                      {item.subtitleVideo}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextNews}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>
      </section>
    </div>
  );
}
