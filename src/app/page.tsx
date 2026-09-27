"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-56 flex flex-col transition-colors duration-300">
        
        {/* Mobile Header */}
        <MobileHeader />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 md:p-8 max-w-7xl mx-auto w-full"
        >
          
          {/* Top Banner */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-8 md:p-12 mb-10 flex justify-between relative overflow-hidden">
            
            {/* Background Decorative Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 text-xs font-bold rounded-full mb-6 border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-[#c9a97d] animate-pulse"></span>
                SELAMAT DATANG DI PORTFOLIO SAYA
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-slate-200 mb-6 tracking-tight leading-tight"
              >
                HALO, SAYA PRIMA<br/>
                <span className="text-3xl md:text-5xl opacity-70">FULL-STACK WEB DEV &</span><br/>
                <span className="text-cyan-400">IT CONSULTANT.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-200/70 text-base md:text-lg font-medium mb-10 max-w-xl leading-relaxed"
              >
                Mengubah kerumitan menjadi kemudahan — menghadirkan solusi pengembangan web yang terintegrasi penuh dengan fondasi logika <i>back-end</i> yang kuat serta sistem data yang teroptimasi.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="btn-primary">
                  LIHAT PROYEK SAYA →
                </button>
                <button className="btn-secondary">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    UNDUH CV
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Bento Grid (3 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            
            {/* Column 1: Projects & Services */}
            <div className="flex flex-col gap-6">
              {/* Projects Showcase */}
              <div className="bento-card bento-card-hover p-6 flex flex-col h-[350px]">
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl mb-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-slate-200 tracking-tight">ETALASE PROYEK</h3>
                  <p className="text-sm font-medium text-slate-200/60">Kumpulan aplikasi nyata yang dibangun untuk memecahkan masalah.</p>
                </div>
                <Link href="/projects" className="flex-1 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden relative group cursor-pointer shadow-inner">
                  <img src="https://cdn.sanity.io/images/ijthr5am/production/c22d6a34815b378e80d7fa55e19fa94a9bfb6274-1896x877.png" alt="Proyek" className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold text-sm px-5 py-2.5 rounded-full group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">Lihat Proyek</span>
                  </div>
                </Link>
              </div>

              {/* Services */}
              <Link href="/services" className="bento-card bento-card-hover p-6 flex items-center justify-between group">
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">LAYANAN</h3>
                  <p className="text-xs font-medium text-slate-200/60">Solusi dari awal hingga akhir.</p>
                </div>
                <div className="text-right text-[10px] font-bold uppercase leading-relaxed opacity-90 flex flex-col gap-1">
                  <span className="text-indigo-400">E-Commerce Web</span>
                  <span className="text-emerald-400">POS System</span>
                  <span className="text-amber-400">Landing Page Bisnis</span>
                  <span className="text-rose-400">Sistem Informasi</span>
                </div>
              </Link>
            </div>

            {/* Column 2: About & Achievements */}
            <div className="flex flex-col gap-6">
              {/* About Me */}
              <Link href="/about" className="bento-card bento-card-hover p-6 flex flex-col group">
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">TENTANG SAYA</h3>
                  <p className="text-xs font-medium text-slate-200/60">Siapa saya dan apa yang saya lakukan.</p>
                </div>
                <div className="flex-1 flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden shadow-lg border-2 border-[#0a1c18] ring-2 ring-cyan-500/20">
                    <img src="/fotoku.jpg" alt="Prima Dzaky" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0a1c18] border border-white/10 rounded-full text-[#F7DF1E] shadow-sm hover:scale-110 transition-transform" title="JavaScript">
                      <SiJavascript className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0a1c18] border border-white/10 rounded-full text-[#61DAFB] shadow-sm hover:scale-110 transition-transform" title="React">
                      <FaReact className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0a1c18] border border-white/10 rounded-full text-[#06B6D4] shadow-sm hover:scale-110 transition-transform" title="Tailwind CSS">
                      <SiTailwindcss className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0a1c18] border border-white/10 rounded-full text-[#FF2D20] shadow-sm hover:scale-110 transition-transform" title="Laravel">
                      <FaLaravel className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0a1c18] border border-white/10 rounded-full text-[#336791] shadow-sm hover:scale-110 transition-transform" title="Database SQL">
                      <FaDatabase className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Achievements Preview */}
              <Link href="/achievements" className="bento-card bento-card-hover p-6 flex-1 flex flex-col min-h-[300px] group">
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-500/10 rounded-xl mb-3 group-hover:bg-indigo-500 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-200">PENCAPAIAN</h3>
                  <p className="text-xs font-medium text-slate-200/60">Tonggak sejarah & sertifikasi.</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/5 to-cyan-500/10 rounded-xl p-4 text-center relative overflow-hidden">
                   <div className="relative w-36 h-24 mb-4 z-10 group-hover:scale-110 transition-transform duration-500">
                     {/* 3rd Cert (Back) */}
                     <div className="absolute inset-0 -rotate-6 translate-x-2 translate-y-1 rounded-lg shadow-md overflow-hidden group-hover:-rotate-12 group-hover:translate-x-4 transition-all duration-500 opacity-60 border border-white/10">
                       <img src="https://cdn.sanity.io/files/ijthr5am/production/91398d0b2fd67d4f822af58cb6969181f5cda5fc.jpeg" alt="Cert 3" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                     </div>
                     {/* 2nd Cert (Middle) */}
                     <div className="absolute inset-0 rotate-3 -translate-x-1 -translate-y-0.5 rounded-lg shadow-md overflow-hidden group-hover:rotate-6 group-hover:-translate-x-2 transition-all duration-500 opacity-80 border border-white/20">
                       <img src="https://cdn.sanity.io/files/ijthr5am/production/1da95318f47c66bf7dbeaa81ed4d397849e1886a.jpeg" alt="Cert 2" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                     </div>
                     {/* 1st Cert (Front with Number Overlay) */}
                     <div className="absolute inset-0 bg-black rounded-lg shadow-xl overflow-hidden z-10 border border-indigo-500/30 group-hover:border-cyan-400/50 transition-all duration-500">
                        <img src="https://cdn.sanity.io/files/ijthr5am/production/ea7b8656420820466c3cb49bae7b8c9a77b75f1e.jpeg" alt="Cert 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent">
                          <span className="text-3xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">142</span>
                        </div>
                     </div>
                   </div>
                   <h4 className="font-bold text-sm text-slate-200 z-10 group-hover:text-cyan-400 transition-colors">Lihat Semua Sertifikat</h4>
                   <p className="text-[10px] font-semibold text-slate-200/50 z-10 mt-1">Klik untuk membuka galeri</p>
                </div>
              </Link>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col gap-6">
              {/* Contact Form */}
              <div className="bento-card p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-200">KONTAK</h3>
                  <p className="text-xs font-medium text-slate-200/60">Mari diskusikan ide proyek Anda.</p>
                </div>
                <form action="https://formsubmit.co/primadzakyhibatulloh@gmail.com" method="POST" className="flex flex-col gap-4 flex-1">
                  <input type="hidden" name="_next" value="http://localhost:3000" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Pesan Baru dari Beranda Portfolio!" />
                  
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Nama Anda..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all"
                  />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email Anda..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all"
                  />
                  <textarea 
                    name="message"
                    required
                    placeholder="Pesan..." 
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 resize-none flex-1 transition-all"
                  ></textarea>
                  <button type="submit" className="btn-primary mt-2 flex items-center justify-center gap-2">
                    Kirim Pesan
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
