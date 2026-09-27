"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar } from "lucide-react";

export default function Volunteer() {
  const volunteerData = [
    {
      title: "Staff Publik & Relasi",
      date: "2026",
      category: "Organisasi",
      file: "/panitia/sertifikat_organisasi.pdf"
    },
    {
      title: "Webinar: Cara Penulisan Proposal Hibah Penelitian Internasional",
      date: "01 Agt 2026",
      category: "Webinar Series ASASI",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh.pdf"
    },
    {
      title: "Webinar: Cara Mencari Mitra Luar Negeri Untuk Penelitian Internasional",
      date: "25 Jul 2026",
      category: "Webinar Series ASASI",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (1) copy.pdf"
    },
    {
      title: "Webinar: Cara Mencari Peluang Riset Internasional",
      date: "18 Jul 2026",
      category: "Webinar Series ASASI",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (2) copy.pdf"
    },
    {
      title: "Kupas Tuntas Perhitungan AK Dosen: Kenaikan Jabatan LK ke Guru Besar",
      date: "23 Mei 2026",
      category: "Acara Nasional — Mengacu Regulasi Terbaru",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (4).pdf"
    },
    {
      title: "Kupas Tuntas Perhitungan AK Dosen: Kenaikan Jabatan L ke LK",
      date: "16 Mei 2026",
      category: "Acara Nasional — Mengacu Regulasi Terbaru",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (2).pdf"
    },
    {
      title: "Kupas Tuntas Perhitungan AK Dosen: Kenaikan Jabatan AA ke Lektor",
      date: "09 Mei 2026",
      category: "Acara Nasional — Mengacu Regulasi Terbaru",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (3).pdf"
    },
    {
      title: "Webinar IndoCEISS: Kolaborasi Riset Menuju Riset Unggul Berdampak",
      date: "09 Mei 2026",
      category: "Kolaborasi IndoCEISS & ASASI — Acara Nasional",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (5).pdf"
    },
    {
      title: "Kupas Tuntas Perhitungan AK Dosen Terbaru",
      date: "02 Mei 2026",
      category: "Acara Nasional — Mengacu Permendiktisaintek No. 52/2025",
      file: "/panitia/Sertifikat_PANITIA_Prima_Dzaky_Hibatulloh (1).pdf"
    }
  ];

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Fixed Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:ml-56 flex flex-col relative min-h-screen">
        <MobileHeader />

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 font-bold text-sm mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
              Pengalaman Kepanitiaan
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 uppercase tracking-tight mb-4 drop-shadow-sm">
              Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Experience</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium max-w-3xl leading-relaxed">
              Kumpulan sertifikat penghargaan atas kontribusi aktif sebagai anggota panitia dalam berbagai rangkaian kegiatan nasional bersama ASASI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card bento-card-hover group flex flex-col"
              >
                {/* PDF Preview Area */}
                <div className="h-40 md:h-56 bg-white/[0.01] relative overflow-hidden border-b border-white/5 flex-shrink-0">
                  <div className="absolute inset-[-10px] bg-[#030712]">
                    <iframe 
                      src={`${item.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-110"
                      title={item.title}
                      scrolling="no"
                    />
                  </div>
                  {/* Overlay for clicking */}
                  <a href={item.file} target="_blank" rel="noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-[#030712]/70 transition-all duration-500">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-[#0a1c18]/90 border border-white/20 text-cyan-400 font-black px-6 py-3 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> BUKA PENUH
                    </div>
                  </a>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 relative z-20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Sertifikat
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-black text-slate-200 leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-slate-400 mt-auto pt-2">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
