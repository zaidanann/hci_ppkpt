/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer
      className="text-white py-10 mt-10"
      style={{ backgroundColor: "#006198" }} // GANTI WARNA DI SINI
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        {/* LOGO KIRI */}
        <div className="shrink-0">
          <img
            src="/image/logoputih.png"
            alt="Logo PPKPT Paramadina"
            className="h-20 w-auto object-contain scale-[1.9]"
            style={{ transformOrigin: "left center" }}
          />
        </div>

        {/* 3 KOLOM KANAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10">

          {/* ALAMAT */}
          <div>
            <img src="/image/lokasi.png" className="h-7 mx-auto mb-3" alt="Location" />
            <p className="font-bold text-lg">Alamat</p>
            <p className="text-sm opacity-90">Universitas Paramadina</p>
            <p className="text-sm opacity-90">Cipayung, Jakarta Timur</p>
          </div>

          {/* EMAIL */}
          <div>
            <img src="/image/email.png" className="h-7 mx-auto mb-3" alt="Email" />
            <p className="font-bold text-lg">Email</p>
            <a href="mailto:satgas.ppkpt@paramadina.ac.id" className="text-sm hover:underline opacity-90">
              satgas.ppkpt@paramadina.ac.id
            </a>
          </div>

          {/* HOTLINE */}
          <div>
            <img src="/image/hotline.png" className="h-7 mx-auto mb-3" alt="Phone" />
            <p className="font-bold text-lg">Hotline</p>
            <p className="text-sm opacity-90">0858-1319-9452</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
