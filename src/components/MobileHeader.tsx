"use client";

import { Menu, X, Home, User, Folder, Trophy, Briefcase, Mail, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-[#030712]/60 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 transition-colors shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-indigo-500/30 bg-white/5 overflow-hidden shadow-sm">
            <img src="/fotoku.jpg" alt="Prima Dzaky Hibatulloh" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-200 leading-none">Prima Dzaky</h2>
            <p className="text-[10px] text-cyan-400 font-bold mt-0.5">@zakypatra</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white/5 text-cyan-400 rounded-xl border border-white/10 shadow-sm hover:bg-[#c9a97d]/10 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#030712]/80 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0a0f1c] border-l border-white/10 z-50 p-6 flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-black text-white">MENU</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 text-slate-400 rounded-full hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-3 overflow-y-auto custom-scrollbar pr-2">
                {menuItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-md shadow-cyan-500/20 translate-x-2" 
                          : "text-slate-300 hover:bg-gradient-to-r from-cyan-400 to-indigo-500/10 hover:text-cyan-400 bg-white/5"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Connect</p>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/prima-dzaky-hibatulloh-93078b34b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/6287864270595" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/zakypatra/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
