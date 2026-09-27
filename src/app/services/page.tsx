"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { motion } from "framer-motion";
import { Monitor, Server, Lightbulb, Handshake, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Pengembangan Web Premium",
      description: "Membangun aplikasi web modern yang responsif, kencang, dan berkinerja tinggi untuk memberikan pengalaman pengguna terbaik di semua perangkat.",
      icon: Monitor,
      features: [
        "Aplikasi Web Kustom (React, Next.js)",
        "Desain Responsif & Interaktif",
        "Optimasi Kecepatan & SEO",
        "Integrasi Layanan & API"
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: "backend-dev",
      title: "Arsitektur Backend Tangguh",
      description: "Merancang logika server dan database yang sangat aman serta dapat diskalakan (scalable) untuk menangani ribuan lalu lintas data tanpa kendala.",
      icon: Server,
      features: [
        "Pembuatan RESTful & GraphQL API",
        "Desain & Optimasi Database",
        "Sistem Autentikasi Tingkat Lanjut",
        "Manajemen Server & Cloud"
      ],
      color: "from-indigo-400 to-purple-500"
    },
    {
      id: "private-tutor",
      title: "Mentoring & Private Tutor",
      description: "Bimbingan intensif 1-on-1 bagi Anda yang ingin menguasai pemrograman web dari nol hingga mahir dengan standar industri profesional.",
      icon: Lightbulb,
      features: [
        "Belajar Praktik Langsung (Hands-on)",
        "Review Kode & Best Practices",
        "Konsultasi Skripsi / Tugas Akhir",
        "Persiapan Karir & Interview IT"
      ],
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: "collab-project",
      title: "Kolaborasi Inovasi & Proyek",
      description: "Butuh Partner Teknis (CTO) yang andal? Saya sangat terbuka untuk berkolaborasi membangun startup atau ide produk digital brilian Anda bersama.",
      icon: Handshake,
      features: [
        "Brainstorming & Strategi Produk",
        "Pengembangan MVP dengan Cepat",
        "Sistem Kemitraan Fleksibel",
        "Dukungan Teknis Jangka Panjang"
      ],
      color: "from-orange-400 to-rose-500"
    }
  ];

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Fixed Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:ml-56 flex flex-col relative min-h-screen z-10">
        <MobileHeader />

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-bold text-sm mb-4 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              Layanan Profesional
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 tracking-tight mb-4 drop-shadow-sm">
              Solusi Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Terbaik</span> Untuk Anda
            </h1>
            <p className="text-lg text-slate-400 font-medium max-w-2xl leading-relaxed">
              Mulai dari pengembangan perangkat lunak hingga kolaborasi strategis, saya hadir untuk membantu mewujudkan visi Anda menjadi produk nyata yang berdampak.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card bento-card-hover group p-8 flex flex-col h-full relative overflow-hidden"
              >
                {/* Glow Background Effect inside card */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="mb-6">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl`}></div>
                    <service.icon className="w-7 h-7 text-slate-200 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-200 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-400 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-sm font-black text-cyan-400 hover:text-indigo-400 transition-colors w-fit group/link">
                  Mulai Diskusi Sekarang 
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section (Have a project in mind?) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full rounded-[2rem] bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1px] relative overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.25)] group"
          >
            {/* Animated shimmer effect on border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            
            <div className="bg-[#030712]/90 backdrop-blur-3xl w-full h-full rounded-[calc(2rem-1px)] p-10 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-md">
                Punya Ide Besar yang Menunggu Diwujudkan?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                Jangan biarkan ide Anda hanya menjadi angan. Mari berdiskusi, susun strategi terbaik, dan ubah ide tersebut menjadi produk digital nyata yang memukau dunia!
              </p>
              
              <Link href="/contact" className="btn-primary flex items-center gap-3 text-lg px-10 py-4">
                <MessageSquare className="w-5 h-5" />
                HUBUNGI SAYA SEKARANG
              </Link>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
