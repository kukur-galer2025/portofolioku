"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { 
  User, Code, MapPin, GraduationCap, Briefcase, BookOpen, FileText,
  Layout, Server, Smartphone, Database, PenTool, GitBranch, Github as GithubIcon, Trello
} from "lucide-react";
import { 
  SiNextdotjs, SiReact, SiVuedotjs, SiDocker, SiLaravel, 
  SiFlutter, SiDart, SiPostgresql, SiCodeigniter, SiBootstrap, 
  SiHtml5, SiCss, SiJavascript, SiPhp, SiCplusplus, 
  SiAlpinedotjs, SiTailwindcss, SiNodedotjs, SiGo, SiMysql, SiLivewire, SiLaragon,
  SiFigma, SiGit, SiGithub, SiXampp, SiPostman
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaPaintBrush, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const frameworks = [
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Vue', icon: SiVuedotjs, color: 'text-[#4FC08D]' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-[#FF2D20]' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-[#02569B]' },
    { name: 'Dart', icon: SiDart, color: 'text-[#0175C2]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
    { name: 'CodeIgniter', icon: SiCodeigniter, color: 'text-[#EF4223]' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-[#7952B3]' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss, color: 'text-[#1572B6]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]' },
    { name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },
    { name: 'Alpine.js', icon: SiAlpinedotjs, color: 'text-[#8BC0D0]' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Go Lang', icon: SiGo, color: 'text-[#00ADD8]' },
    { name: 'Fiber', icon: FaBolt, color: 'text-[#00ADD8]' },
    { name: 'Livewire', icon: SiLivewire, color: 'text-[#4E56A6]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' }
  ];

  const tools = [
    { name: 'VS Code', icon: TbBrandVscode, color: 'text-[#007ACC]' },
    { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: SiGithub, color: 'text-[#181717]' },
    { name: 'Canva', icon: FaPaintBrush, color: 'text-[#00C4CC]' },
    { name: 'Laragon', icon: SiLaragon, color: 'text-[#00C4CC]' },
    { name: 'XAMPP', icon: SiXampp, color: 'text-[#FB7A24]' },
    { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' }
  ];

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 md:ml-56 flex flex-col transition-colors duration-300">
        <MobileHeader />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 md:p-8 max-w-5xl mx-auto w-full"
        >
          
          {/* Header */}
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#c9a97d]/30 rounded-2xl bg-white/[0.02] shadow-md shrink-0">
              <User className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-200 uppercase tracking-tight leading-tight">Tentang Saya</h1>
              <p className="text-xs md:text-sm font-bold text-cyan-400 mt-0.5">IT Consultant & Web Developer Profesional</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* WHO I AM */}
            <div className="bento-card p-5 md:p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#f07148]/10 rounded-xl border border-[#f07148]/30 shadow-sm shrink-0">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-[#f07148]" />
                </div>
                <h2 className="text-base md:text-lg font-black text-slate-200 uppercase">Siapa Saya</h2>
              </div>
              <p className="text-sm md:text-[15px] text-slate-200/80 font-medium leading-relaxed">
                Sebagai seorang <span className="font-black text-[#f07148]">Konsultan IT & Web Developer</span>, saya membantu bisnis merancang strategi digital yang tepat sekaligus membangun aplikasinya dari nol. Saya sangat menikmati keseluruhan proses perancangan sistem—mulai dari <span className="font-black text-cyan-400">Desain UI/UX</span> yang interaktif, hingga meracik <span className="font-black text-green-500">Arsitektur Back-End</span> yang tangguh. Fokus utama saya adalah memberikan solusi digital responsif, teroptimasi, dan tepat sasaran.
              </p>
            </div>

            {/* LOCATION */}
            <div className="bento-card p-5 md:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#f07148]/10 rounded-xl border border-[#f07148]/30 shadow-sm shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#f07148]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-black text-cyan-400 uppercase">Lokasi</p>
                  <h3 className="text-base md:text-lg font-black text-slate-200 leading-tight">Purwokerto</h3>
                  <p className="text-[10px] md:text-xs font-semibold text-slate-200/70">Banyumas, Jawa Tengah</p>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="bento-card p-5 md:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-cyan-500/10 rounded-xl border border-[#c9a97d]/30 shadow-sm shrink-0">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] md:text-xs font-black text-cyan-400 uppercase">Pendidikan</p>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 text-[9px] md:text-[10px] font-black border border-cyan-400/20 shrink-0">
                      IPK: 3.95/4.00
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-black text-slate-200 mt-1 truncate">S1 Informatika</h3>
                  <p className="text-[10px] md:text-xs font-semibold text-slate-200/70 truncate">Universitas Jend. Soedirman</p>
                </div>
              </div>
            </div>

            {/* MY APPROACH */}
            <div className="bento-card p-5 md:p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-green-500/10 rounded-xl border border-green-500/30 shadow-sm shrink-0">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
                <h2 className="text-base md:text-lg font-black text-slate-200 uppercase">Pendekatan Saya</h2>
              </div>
              <p className="text-sm md:text-[15px] text-slate-200/80 font-medium leading-relaxed">
                Pengalaman saya dalam mengoordinasikan laboratorium, memimpin organisasi mahasiswa, dan mengelola proyek internal telah sangat mengasah kemampuan saya dalam <span className="font-black text-yellow-600">manajemen proyek</span>, <span className="font-black text-purple-600">mentoring teknis</span>, dan <span className="font-black text-green-600">pemecahan masalah kolaboratif</span>. Sebagai seorang konsultan, saya menempatkan kerja sama tim dan riset kebutuhan pengguna di posisi terdepan sebelum mulai menulis kode.
              </p>
            </div>
          </div>

          {/* FRAMEWORKS & LANGUAGES */}
          <div className="mb-10 md:mb-12 overflow-hidden w-full">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-purple-500/10 rounded-xl border border-purple-500/30 shadow-sm shrink-0">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>
              <h2 className="text-lg md:text-xl font-black text-[#eef0eb] uppercase tracking-tight leading-tight">Framework & Bahasa Pemrograman</h2>
            </div>
            
            <div className="relative flex overflow-x-hidden group py-2 mask-horizontal-fade">
              <motion.div 
                className="flex gap-3 px-1.5 min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
              >
                {[...frameworks, ...frameworks, ...frameworks, ...frameworks].map((tech, i) => (
                  <div key={i} className="bento-card bento-card-hover shrink-0 px-4 py-2.5 md:px-5 md:py-3 flex items-center justify-center gap-2 md:gap-3 bg-[#0a1c18] border border-white/5 hover:border-purple-500/30">
                    <tech.icon className={`w-4 h-4 md:w-5 md:h-5 ${tech.color}`} />
                    <span className="font-bold text-xs md:text-sm text-[#eef0eb] whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="mb-12 md:mb-16 overflow-hidden w-full">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-yellow-500/10 rounded-xl border border-yellow-500/30 shadow-sm shrink-0">
                <PenTool className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
              </div>
              <h2 className="text-lg md:text-xl font-black text-[#eef0eb] uppercase tracking-tight leading-tight">Alat & Teknologi</h2>
            </div>
            
            <div className="relative flex overflow-x-hidden group py-2 mask-horizontal-fade">
              <motion.div 
                className="flex gap-3 px-1.5 min-w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              >
                {[...tools, ...tools, ...tools, ...tools, ...tools, ...tools].map((tool, i) => (
                  <div key={i} className="bento-card bento-card-hover shrink-0 px-4 py-2.5 md:px-5 md:py-3 flex items-center justify-center gap-2 md:gap-3 bg-[#0a1c18] border border-white/5 hover:border-yellow-500/30">
                    <tool.icon className={`w-4 h-4 md:w-5 md:h-5 ${tool.color}`} />
                    <span className="font-bold text-xs md:text-sm text-[#eef0eb] whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* PROFESSIONAL EXPERIENCES */}
          <div className="mt-16 md:mt-20">
            <div className="flex items-center gap-3 mb-10 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#c9a97d]/10 rounded-xl md:rounded-2xl border border-[#c9a97d]/30 shadow-sm shrink-0">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#c9a97d]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#eef0eb] uppercase tracking-tight leading-tight">Pengalaman Profesional</h2>
            </div>

            <div className="relative border-l-[3px] border-[#c9a97d]/10 ml-4 md:ml-6 flex flex-col gap-10 pb-8">
              
              {/* Experience 1: Project Manager */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#f07148]/20 group-hover:border-[#f07148]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/logo-amania.webp" alt="Amania Indonesia" width={48} height={48} className="object-contain w-full h-full p-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#f07148]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#f07148] transition-colors">Project Manager</h3>
                      <p className="text-sm font-bold text-slate-500">Amania Indonesia · Purna Waktu (Full-Time)</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#f07148]/10 text-[#f07148] text-[10px] font-black rounded-full shadow-sm">
                      MAR 2026 - PRESENT
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Memimpin perencanaan dan eksekusi strategis untuk berbagai proyek digital, memastikan siklus pengembangan berjalan tepat waktu dengan standar kualitas tinggi. Bertanggung jawab penuh dalam orkestrasi tim lintas divisi untuk menyelaraskan solusi teknis dengan visi dan target bisnis perusahaan.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['Project Planning', 'Project Management'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#f07148]/5 text-[#f07148] rounded-md border border-[#f07148]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 2: Laboratorium Informatika */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#c9a97d]/20 group-hover:border-[#c9a97d]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/lab-if.jpg" alt="Lab IF UNSOED" width={48} height={48} className="object-cover w-full h-full p-0.5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#1a857b]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#c9a97d] transition-colors">Laboratorium Informatika UNSOED</h3>
                      <p className="text-sm font-bold text-slate-500">Kontrak · Purbalingga, Jawa Tengah</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#c9a97d]/10 text-[#c9a97d] text-[10px] font-black rounded-full shadow-sm">
                      AGT 2025 - PRESENT
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-5">
                    <div className="relative pl-6 border-l-2 border-[#c9a97d]/10">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#c9a97d] rounded-full shadow-[0_0_8px_rgba(26,133,123,0.6)]"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-black text-[#eef0eb] text-sm">Asisten Praktikum Pemrograman Website</span>
                        <span className="text-[10px] text-[#c9a97d] font-bold px-2 py-0.5 bg-[#c9a97d]/10 rounded-sm">Jul 2026 - Saat ini</span>
                      </div>
                      <p className="text-xs text-[#eef0eb]/70 font-medium leading-relaxed">Membimbing puluhan mahasiswa dalam merangkai arsitektur fundamental pengembangan web modern, serta menyusun kurikulum praktikum aplikatif yang berorientasi pada standar industri.</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-[#c9a97d]/10">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#c9a97d]/50 rounded-full"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-black text-[#eef0eb] text-sm">Asisten Praktikum Jaringan Komputer</span>
                        <span className="text-[10px] text-[#c9a97d]/70 font-bold px-2 py-0.5 bg-[#c9a97d]/5 rounded-sm">Jan 2026 - Jun 2026</span>
                      </div>
                      <p className="text-xs text-[#eef0eb]/70 font-medium leading-relaxed">Mengawal mahasiswa mendalami topologi dan konfigurasi jaringan tingkat lanjut, mencakup implementasi Routing, NAT, Firewall, serta Manajemen Bandwidth menggunakan infrastruktur MikroTik riil.</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-[#c9a97d]/10">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#c9a97d]/50 rounded-full"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-black text-[#eef0eb] text-sm">Asisten Praktikum PBO</span>
                        <span className="text-[10px] text-[#c9a97d]/70 font-bold px-2 py-0.5 bg-[#c9a97d]/5 rounded-sm">Agt 2025 - Des 2025</span>
                      </div>
                      <p className="text-xs text-[#eef0eb]/70 font-medium leading-relaxed">Menjadi fasilitator utama bagi lebih dari 40 praktikan dalam menanamkan pemahaman komprehensif mengenai paradigma <i>Object-Oriented Programming</i> (OOP) yang bersih dan terstruktur berbasis bahasa Java.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#134440]/5">
                    {['Java', 'OOP', 'Mikrotik', 'Cisco Packet Tracer', 'HTML', 'CSS', 'PHP'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#c9a97d]/5 text-[#c9a97d] rounded-md border border-[#c9a97d]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 2.5: UNSOED Press */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#ec4899]/20 group-hover:border-[#ec4899]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <div className="w-full h-full bg-[#ec4899]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 text-[#ec4899]" />
                  </div>
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#ec4899]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#ec4899] transition-colors">Fullstack Developer</h3>
                      <p className="text-sm font-bold text-slate-500">UNSOED Press · Kontrak</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#ec4899]/10 text-[#ec4899] text-[10px] font-black rounded-full shadow-sm">
                      JUL 2026 - SEP 2026
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Merancang dan mengembangkan sistem katalog buku digital interaktif serta platform percetakan terpadu untuk UNSOED Press. Membangun arsitektur <i>headless</i> berkinerja tinggi menggunakan Next.js di sisi klien, yang dikombinasikan dengan <i>backend</i> Laravel untuk memanajemen data buku, inventaris, dan alur percetakan secara efisien.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['Next.js', 'Laravel', 'REST API', 'Web Development'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#ec4899]/5 text-[#ec4899] rounded-md border border-[#ec4899]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 3: EduTechid */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#8b5cf6]/20 group-hover:border-[#8b5cf6]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/edutech.png" alt="EduTechid" width={48} height={48} className="object-contain w-full h-full p-1.5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#8b5cf6]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#8b5cf6] transition-colors">Web Programmer</h3>
                      <p className="text-sm font-bold text-slate-500">EduTechid · Paruh Waktu (Part-Time)</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-black rounded-full shadow-sm">
                      DES 2025 - FEB 2026
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Merancang dan merekayasa solusi aplikasi web berperforma tinggi memanfaatkan kapabilitas Laravel dan Alpine.js. Berfokus meracik arsitektur yang <i>scalable</i> dan mengintegrasikan fitur esensial yang mendongkrak <i>user experience</i> dalam ranah edukasi.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['Alpine.js', 'Laravel', 'Web Development'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#8b5cf6]/5 text-[#8b5cf6] rounded-md border border-[#8b5cf6]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 4: Ruang Juang */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#3b82f6]/20 group-hover:border-[#3b82f6]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/logorj.webp" alt="Ruang Juang" width={48} height={48} className="object-contain w-full h-full p-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#3b82f6]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#3b82f6] transition-colors">Fullstack Engineer</h3>
                      <p className="text-sm font-bold text-slate-500">Ruang Juang · Kontrak</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-black rounded-full shadow-sm">
                      SEP 2025 - DES 2025
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Memiliki peran kunci sebagai pendorong teknis dalam merekayasa serta membangun platform <span className="font-bold">ruangjuang.id</span> dari nol. Sukses menghidupkan interaksi UI secara <i>real-time</i> tanpa mengorbankan kecepatan menggunakan paduan mulus ekosistem TALL (Tailwind, Alpine, Laravel, Livewire).
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['Livewire', 'Laravel', 'Full-Stack Web Development'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#3b82f6]/5 text-[#3b82f6] rounded-md border border-[#3b82f6]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 5: ASASI NTB */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#10b981]/20 group-hover:border-[#10b981]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/logo-asasi.webp" alt="ASASI NTB" width={48} height={48} className="object-contain w-full h-full p-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#10b981]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#10b981] transition-colors">Web Application Developer</h3>
                      <p className="text-sm font-bold text-slate-500">ASASI NTB · Paruh Waktu (Part-Time)</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] text-[10px] font-black rounded-full shadow-sm">
                      SEP 2025 - DES 2025
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Membangun sistem informasi dan portal manajemen pendaftaran resmi Seminar Nasional ASASI NTB (starnas.asasi.or.id). Merancang dan menyatukan antarmuka (UI/UX) yang intuitif sekaligus menjamin stabilitas <i>database</i> yang melayani ratusan pengakses serentak dengan lancar.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['Laravel', 'Tailwind CSS'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#10b981]/5 text-[#10b981] rounded-md border border-[#10b981]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Experience 6: Pertamina */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[23.5px] top-2 w-12 h-12 bg-[#0a1c18] border-4 border-[#eab308]/20 group-hover:border-[#eab308]/40 transition-colors rounded-full flex items-center justify-center shadow-md overflow-hidden z-10">
                  <Image src="/logo-kerja/pertamina.webp" alt="PT Kilang Pertamina Internasional" width={48} height={48} className="object-contain w-full h-full p-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="bento-card p-6 md:p-8 bg-[#0a1c18]/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#eab308]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-[#eef0eb] group-hover:text-[#eab308] transition-colors">Fullstack Engineer</h3>
                      <p className="text-sm font-bold text-slate-500">PT Kilang Pertamina Internasional · Magang (Internship)</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-1.5 bg-[#eab308]/10 text-[#eab308] text-[10px] font-black rounded-full shadow-sm">
                      JUL 2025 - AGT 2025
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#eef0eb]/80 font-medium leading-relaxed">
                    Diberi kepercayaan merancang Sistem Pendaftaran Kerja Praktik Mahasiswa terpadu di lingkungan korporasi Pertamina RU IV Cilacap. Berhasil melakukan eskalasi kompetensi dengan cepat dengan mengadopsi standar <i>enterprise-grade</i> berarsitektur MVC menggunakan ekosistem C# ASP.NET.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#134440]/5">
                    {['C#', '.NET Framework', 'ASP.NET', 'MVC'].map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black bg-[#eab308]/5 text-[#eab308] rounded-md border border-[#eab308]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>


        </motion.div>
      </main>
    </div>
  );
}
