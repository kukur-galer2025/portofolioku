"use client";

import { motion } from"framer-motion";
import { ArrowRight, Award, Briefcase, Code, GraduationCap } from"lucide-react";

export default function HeroSection() {
 return (
 <div className="relative z-10">
 <nav className="flex justify-between items-center mb-24">
 <motion.div 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-xl font-bold tracking-tighter"
 >
 PORT<span className="text-blue-500">FOLIO.</span>
 </motion.div>
 <motion.div 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="hidden md:flex space-x-8 text-sm font-medium text-slate-300"
 >
 <a href="#about" className="hover:text-white transition-colors">Tentang</a>
 <a href="#certificates" className="hover:text-white transition-colors">84 Sertifikat</a>
 <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
 <a href="#blog" className="hover:text-white transition-colors">Blog</a>
 </motion.div>
 </nav>

 {/* Hero Section */}
 <div className="max-w-4xl">
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
 className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20"
 >
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
 </span>
 <span>Available for new opportunities</span>
 </motion.div>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
 >
 Mengubah Ide Menjadi <br />
 <span className="text-gradient">Realitas Digital.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
 >
 Seorang profesional yang berdedikasi tinggi dengan pengalaman organisasi, 
 kegiatan volunteer, dan rekam jejak <strong className="text-slate-200">84 sertifikasi</strong> di berbagai bidang.
 </motion.p>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.4 }}
 className="flex flex-wrap gap-4"
 >
 <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center space-x-2 shadow-lg shadow-blue-500/25">
 <span>Lihat Portofolio</span>
 <ArrowRight className="w-4 h-4" />
 </button>
 <button className="px-8 py-4 rounded-xl glass-panel text-white font-semibold hover:bg-slate-800/80 transition-all">
 Hubungi Saya
 </button>
 </motion.div>
 </div>

 {/* Stats Section */}
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.6 }}
 className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
 >
 {[
 { label:"Sertifikat", value:"84+", icon: Award, color:"text-yellow-400", bg:"bg-yellow-400/10" },
 { label:"Proyek Selesai", value:"15+", icon: Code, color:"text-blue-400", bg:"bg-blue-400/10" },
 { label:"Pengalaman Kerja", value:"3+", icon: Briefcase, color:"text-teal-400", bg:"bg-teal-400/10" },
 { label:"Edukasi & Organisasi", value:"10+", icon: GraduationCap, color:"text-purple-400", bg:"bg-purple-400/10" },
 ].map((stat, i) => (
 <div key={i} className="glass-panel rounded-2xl p-6 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
 <div className={`p-3 rounded-lg ${stat.bg} ${stat.color} mb-4`}>
 <stat.icon className="w-6 h-6" />
 </div>
 <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
 <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
 </div>
 ))}
 </motion.div>
 </div>
 );
}
