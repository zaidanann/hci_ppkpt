'use client';

import React, { useState } from 'react';
import { Upload, ChevronRight } from 'lucide-react';

export default function FormPengaduanPPKPT() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    namaPelapor: '',
    statusPelapor: '',
    statusPelaporKeterangan: '',
    nomorTeleponPelapor: '',
    namaTerlapor: '',
    statusTerlapor: '',
    nomorTeleponTerlapor: '',
    ciriTerlapor: '',
    deskripsiKronologi: '',
    bentukKekerasan: '',
    persetujuanMekanisme: '',
    dokumen: null as File | null,
    kebutuhanKorban: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      kebutuhanKorban: prev.kebutuhanKorban.includes(value)
        ? prev.kebutuhanKorban.filter(item => item !== value)
        : [...prev.kebutuhanKorban, value]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        dokumen: e.target.files![0]
      }));
    }
  };

  const handleSubmit = () => {
    if (!formData.namaPelapor || !formData.statusPelapor || !formData.nomorTeleponPelapor) {
      alert('Mohon lengkapi data identitas pelapor!');
      return;
    }
    if (!formData.namaTerlapor || !formData.statusTerlapor || !formData.ciriTerlapor) {
      alert('Mohon lengkapi data identitas terlapor!');
      return;
    }
    if (!formData.deskripsiKronologi || !formData.bentukKekerasan) {
      alert('Mohon lengkapi peristiwa kejadian!');
      return;
    }
    if (!formData.persetujuanMekanisme) {
      alert('Mohon pilih persetujuan mekanisme!');
      return;
    }
    if (!formData.dokumen) {
      alert('Mohon unggah dokumen bukti!');
      return;
    }
    if (formData.kebutuhanKorban.length === 0) {
      alert('Mohon pilih minimal satu kebutuhan korban!');
      return;
    }

    console.log('Form Data:', formData);
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      namaPelapor: '',
      statusPelapor: '',
      statusPelaporKeterangan: '',
      nomorTeleponPelapor: '',
      namaTerlapor: '',
      statusTerlapor: '',
      nomorTeleponTerlapor: '',
      ciriTerlapor: '',
      deskripsiKronologi: '',
      bentukKekerasan: '',
      persetujuanMekanisme: '',
      dokumen: null,
      kebutuhanKorban: []
    });
  };

  return (
    <div className="min-h-screen mt-5 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-linear-to-r from-blue-800/50 to-blue-900/50 rounded-2xl p-6 md:p-8 mb-8 text-center shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Pengaduan Tindakan Kekerasan</h1>
        </div>

        {/* Form */}
        <div className="space-y-8">

          {/* Identitas Pelapor */}
          <div className="bg-linear-to-br from-blue-800/50 to-blue-900/50 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Identitas Pelapor</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nama Pelapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="namaPelapor"
                  value={formData.namaPelapor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 focus:border-blue-600 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Status Pelapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="statusPelapor"
                  value={formData.statusPelapor}
                  onChange={handleInputChange}
                  placeholder="(Mahasiswa/Tenaga Pendidik/Dosen/Lainnya)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 placeholder:text-gray-400 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Status Pelapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="statusPelaporKeterangan"
                  value={formData.statusPelaporKeterangan}
                  onChange={handleInputChange}
                  placeholder="(Saksi/Korban)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 placeholder:text-gray-400 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Nomor Telepon/ (e-mail) Pelapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="nomorTeleponPelapor"
                  value={formData.nomorTeleponPelapor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-black"
                />
              </div>
            </div>
          </div>

          {/* Identitas Terlapor */}
          <div className="bg-linear-to-br from-blue-800/50 to-blue-900/50 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Identitas Terlapor</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nama Terlapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="namaTerlapor"
                  value={formData.namaTerlapor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Status Terlapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="statusTerlapor"
                  value={formData.statusTerlapor}
                  onChange={handleInputChange}
                  placeholder="(Mahasiswa/Tenaga Pendidik/Dosen/Lainnya)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 placeholder:text-gray-400 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Nomor Telepon/ (e-mail) Terlapor
                </label>
                <input
                  type="text"
                  name="nomorTeleponTerlapor"
                  value={formData.nomorTeleponTerlapor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Ciri Lengkap Terlapor <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="ciriTerlapor"
                  value={formData.ciriTerlapor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-black"
                />
              </div>
            </div>
          </div>

          {/* Peristiwa Kejadian */}
          <div className="bg-linear-to-br from-blue-800/50 to-blue-900/50 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Peristiwa Kejadian</h2>

            <div className="space-y-4">

              <div>
                <label className="block text-white font-semibold mb-2">
                  Deskripsi Kronologi <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="deskripsiKronologi"
                  value={formData.deskripsiKronologi}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="(Tanpa Singkat, Tanggal Kejadian, Lokasi, Detail Peristiwa)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 placeholder:text-gray-400 text-black resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Bentuk Kekerasan <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="bentukKekerasan"
                  value={formData.bentukKekerasan}
                  onChange={handleInputChange}
                  placeholder="(Kekerasan Fisik/Kekerasan Verbal/Kekerasan Psikis/Kekerasan Seksual/Perundungan/Diskriminasi)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 placeholder:text-gray-400 text-black"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Apakah Korban Setuju untuk diproses dengan Mekanisme Penanganan Kekerasan <span className="text-red-300">*</span>
                </label>
                <div className="space-y-2 bg-white/90 rounded-lg p-4">
                  <label className="flex items-center gap-3 cursor-pointer text-black">
                    <input
                      type="radio"
                      name="persetujuanMekanisme"
                      value="setuju"
                      checked={formData.persetujuanMekanisme === 'setuju'}
                      onChange={(e) => handleRadioChange('persetujuanMekanisme', e.target.value)}
                      className="w-4 h-4"
                    />
                    <span>Setuju</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer text-black">
                    <input
                      type="radio"
                      name="persetujuanMekanisme"
                      value="tidak-setuju"
                      checked={formData.persetujuanMekanisme === 'tidak-setuju'}
                      onChange={(e) => handleRadioChange('persetujuanMekanisme', e.target.value)}
                      className="w-4 h-4"
                    />
                    <span>Tidak Setuju</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Unggah Dokumen Bukti <span className="text-red-600">*</span>
                </label>

                <div className="bg-white/90 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="dokumen"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="dokumen"
                    className="inline-flex items-center gap-2 bg-blue-800/50 hover:bg-blue-900/50 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer"
                  >
                    <Upload className="w-5 h-5" />
                    Tambah Dokumen
                  </label>

                  {formData.dokumen && (
                    <p className="mt-3 text-sm text-gray-600">
                      File terpilih: {formData.dokumen.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Identifikasi Kebutuhan Korban <span className="text-red-600">*</span>
                </label>

                <div className="space-y-2 bg-white/90 rounded-lg p-4">
                  {[
                    { label: "Konseling Psikologis", value: "konseling-psikologis" },
                    { label: "Bantuan Hukum/Sanksi", value: "bantuan-hukum" },
                    { label: "Bantuan Medis", value: "bantuan-medis" },
                    { label: "Mediasi", value: "mediasi" },
                  ].map((item) => (
                    <label key={item.value} className="flex items-center gap-3 cursor-pointer text-black">
                      <input
                        type="checkbox"
                        value={item.value}
                        checked={formData.kebutuhanKorban.includes(item.value)}
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-linear-to-r from-blue-800/50 to-blue-900/50 hover:from-blue-900 hover:to-blue-900 text-white font-bold px-10 md:px-12 py-3 md:py-4 rounded-full shadow-lg flex items-center gap-2 text-lg"
            >
              KIRIM
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* POPUP */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-linear-to-b from-gray-400 to-blue-500 rounded-3xl p-1 w-full max-w-sm md:max-w-2xl">
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="bg-linear-to-r from-blue-400/70 to-blue-500/70 rounded-2xl py-10 md:py-12 px-6 md:px-8 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">LAPORAN</h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">BERHASIL TERKIRIM</h3>
                  <p className="text-lg md:text-xl text-white font-semibold">TERIMAKASIH!</p>
                </div>

                <button
                  onClick={handleClosePopup}
                  className="bg-linear-to-r from-blue-400/70 to-blue-500/70 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-10 py-3 rounded-full shadow-lg"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
