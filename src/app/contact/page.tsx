"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const socials = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/prima-dzaky-hibatulloh-93078b34b/",
      icon: FaLinkedin,
      color: "bg-[#0A66C2]",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/zakypatra/",
      icon: FaInstagram,
      color: "bg-[#E4405F]",
    },
    {
      name: "WHATSAPP",
      url: "https://wa.me/6287864270595",
      icon: FaWhatsapp,
      color: "bg-[#25D366]",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/primadzakyhibatulloh@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: "Pesan Baru dari Halaman Kontak Portfolio!"
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Fixed Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:ml-56 flex flex-col relative min-h-screen z-10">
        <MobileHeader />

        <div className="p-6 md:p-10 max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-orange-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white leading-tight">Hubungi Saya</h1>
              <p className="text-slate-400 text-sm">Mari terhubung dan diskusikan ide-ide Anda</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* Left Column: Socials */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-4 bg-[#0a0f1c] border border-indigo-500/20 rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-lg font-black text-white mb-2">Terhubung Dengan Saya</h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Ikuti saya di media sosial untuk kabar terbaru dan peluang kolaborasi.
              </p>

              <div className="flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-2 pr-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg ${social.color}`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-8 bg-[#0a0f1c] border border-indigo-500/20 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h2 className="text-lg font-black text-white mb-2">Kirim Pesan</h2>
              <p className="text-slate-400 text-sm mb-8">
                Punya ide proyek? Mari kita diskusikan bagaimana kita bisa berkolaborasi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Nama Anda</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Budi Santoso" 
                    className="w-full bg-[#131b2f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Alamat Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="budi@example.com" 
                    className="w-full bg-[#131b2f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Subjek</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Pertanyaan Proyek" 
                    className="w-full bg-[#131b2f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Pesan</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Ceritakan tentang proyek Anda..." 
                    className="w-full bg-[#131b2f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      MENGIRIM...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-indigo-400" />
                      KIRIM PESAN
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20 text-sm font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    Pesan berhasil terkirim! Saya akan segera membalasnya.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-rose-400 bg-rose-400/10 p-3 rounded-lg border border-rose-400/20 text-sm font-semibold">
                    <AlertCircle className="w-5 h-5" />
                    Gagal mengirim pesan. Silakan coba lagi atau gunakan email.
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Bottom Email Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-cyan-400 text-[#030712] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            <div className="flex items-center gap-2 font-black mb-1">
              <Mail className="w-5 h-5" />
              <span>Atau hubungi saya via email</span>
            </div>
            <a 
              href="mailto:primadzakyhibatulloh@gmail.com" 
              className="font-bold underline underline-offset-4 decoration-[#030712]/40 hover:decoration-[#030712] transition-colors"
            >
              primadzakyhibatulloh@gmail.com
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
