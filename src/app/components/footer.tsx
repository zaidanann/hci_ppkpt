/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer
      className="text-white py-10 mt-10"
      style={{ backgroundColor: "#006198" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        {/* LOGO KIRI */}
        <div className="shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src="/image/logoputih.png"
            alt="Logo PPKPT Paramadina"
            className="h-16 md:h-20 w-auto object-contain scale-125 md:scale-[1.7]"
            style={{ transformOrigin: "left center" }}
          />
        </div>

        {/* 3 KOLOM TETAP KE SAMPING */}
        <div className="flex flex-row w-full justify-between items-start text-center gap-4 md:gap-10">

          {/* ALAMAT */}
          <div className="flex-1">
            <img src="/image/lokasi.png" className="h-6 md:h-7 mx-auto mb-3" alt="Location" />
            <p className="font-bold text-lg md:text-xl">Alamat</p>
            <p className="text-xs md:text-sm opacity-90">Universitas Paramadina</p>
            <p className="text-xs md:text-sm opacity-90">Cipayung, Jakarta Timur</p>
          </div>

          {/* EMAIL */}
          <div className="flex-1">
            <img src="/image/email.png" className="h-6 md:h-7 mx-auto mb-3" alt="Email" />
            <p className="font-bold text-lg md:text-xl">Email</p>
            <a
              href="mailto:satgas.ppkpt@paramadina.ac.id"
              className="text-xs md:text-sm hover:underline opacity-90 break-words"
            >
              satgas.ppkpt@paramadina.ac.id
            </a>
          </div>

          {/* HOTLINE */}
          <div className="flex-1">
            <img src="/image/hotline.png" className="h-6 md:h-7 mx-auto mb-3" alt="Hotline" />
            <p className="font-bold text-lg md:text-xl">Hotline</p>
            <p className="text-xs md:text-sm opacity-90">0858-1319-9452</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
