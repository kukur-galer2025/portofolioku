"use client";

import { Home, User, Folder, Trophy, Briefcase, Mail, Users, Phone } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "BERANDA", href: "/" },
    { icon: User, label: "TENTANG", href: "/about" },
    { icon: Folder, label: "PROYEK", href: "/projects" },
    { icon: Users, label: "VOLUNTEER", href: "/volunteer" },
    { icon: Trophy, label: "PENCAPAIAN", href: "/achievements" },
    { icon: Briefcase, label: "LAYANAN", href: "/services" },
    { icon: Mail, label: "KONTAK", href: "/contact" },
  ];

  return (
    <aside className="w-56 border-r border-white/5 min-h-screen p-5 flex flex-col fixed bg-[#030712]/80 backdrop-blur-xl z-50">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full p-1 border-2 border-indigo-500/30 mb-3 bg-white/5 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img src="/fotoku.jpg" alt="Prima Dzaky Hibatulloh" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-lg font-black text-slate-200 mb-1 text-center leading-tight">Prima Dzaky <br/>Hibatulloh</h2>
        <p className="text-[11px] font-bold text-cyan-400 mb-4 tracking-wide">@zakypatra</p>
        
        <button className="bg-white/5 text-cyan-400 text-[9px] font-black px-3 py-2 flex items-center gap-1.5 rounded-full border border-indigo-500/20 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full justify-center">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          AVAILABLE FOR WORK
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-[13px] transition-all duration-300 group ${
                isActive 
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-md shadow-cyan-500/20 translate-x-2" 
                  : "text-slate-200/60 hover:bg-gradient-to-r from-cyan-400 to-indigo-500/10 hover:text-cyan-400 hover:translate-x-1"
              }`}
            >
              <item.icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Connect</p>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/prima-dzaky-hibatulloh-93078b34b/" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group">
            <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://wa.me/6287864270595" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group">
            <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/zakypatra/" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group">
            <FaInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </aside>
  );
}
