"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Certificate = {
  _id: string;
  title: string;
  category?: string;
  fileUrl?: string;
};

// Define Soft Skills categories
const SOFT_SKILLS_CATEGORIES = [
  "Project Management",
  "Professional Development",
];

function MediaPreview({ fileUrl, title }: { fileUrl: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const isImage = fileUrl.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);

  return (
    <>
      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
          <svg className="w-6 h-6 text-slate-600 animate-spin" fill="none" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full"
      >
        <div className="absolute inset-0 z-10 pointer-events-none" />
        {isImage ? (
          <img 
            src={`${fileUrl}?q=80&fm=webp&w=800`} 
            alt={title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-[-10px]">
            <iframe
              src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="w-full h-full object-cover scale-105"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        )}
      </motion.div>
    </>
  );
}

export default function CertificatesSection({ certificates }: { certificates: Certificate[] }) {
  // Main Category state (Semua, Hard Skills, Soft Skills, Prestasi)
  const [mainCategory, setMainCategory] = useState<"Semua" | "Hard Skills" | "Soft Skills" | "Prestasi">("Semua");
  
  // Sub Category state (Bootstrap, JS, dll)
  const [subCategory, setSubCategory] = useState<string>("Semua");

  // Pagination state
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Get unique categories present in the data
  const allAvailableCategories = Array.from(new Set(certificates.map(c => c.category || "Lainnya")));

  // Determine subcategories based on active main category
  const activeSubCategories = useMemo(() => {
    let filtered = allAvailableCategories;
    
    if (mainCategory === "Soft Skills") {
      filtered = allAvailableCategories.filter(c => SOFT_SKILLS_CATEGORIES.includes(c));
    } else if (mainCategory === "Prestasi") {
      filtered = allAvailableCategories.filter(c => c === "Prestasi");
    } else if (mainCategory === "Hard Skills") {
      filtered = allAvailableCategories.filter(c => !SOFT_SKILLS_CATEGORIES.includes(c) && c !== "Prestasi");
    }
    
    return ["Semua", ...filtered.sort()];
  }, [mainCategory, allAvailableCategories]);

  // Handle Main Category click
  const handleMainCategoryChange = (newMainCategory: "Semua" | "Hard Skills" | "Soft Skills" | "Prestasi") => {
    setMainCategory(newMainCategory);
    setSubCategory("Semua"); // Reset sub category when changing main category
    setVisibleCount(9); // Reset pagination
  };

  const handleSubCategoryChange = (newSub: string) => {
    setSubCategory(newSub);
    setVisibleCount(9);
  };

  // Filter the certificates
  const filteredCerts = useMemo(() => {
    let filtered = certificates;

    // Filter by Main Category
    if (mainCategory === "Soft Skills") {
      filtered = filtered.filter(c => SOFT_SKILLS_CATEGORIES.includes(c.category || "Lainnya"));
    } else if (mainCategory === "Prestasi") {
      filtered = filtered.filter(c => (c.category || "Lainnya") === "Prestasi");
    } else if (mainCategory === "Hard Skills") {
      filtered = filtered.filter(c => !SOFT_SKILLS_CATEGORIES.includes(c.category || "Lainnya") && (c.category || "Lainnya") !== "Prestasi");
    }

    // Filter by Sub Category
    if (subCategory !== "Semua") {
      filtered = filtered.filter(c => (c.category || "Lainnya") === subCategory);
    }

    return filtered;
  }, [certificates, mainCategory, subCategory]);

  const visibleCerts = filteredCerts.slice(0, visibleCount);

  return (
    <div className="relative z-10 pb-24">
      {/* 1. MAIN CATEGORY FILTER */}
      <div className="flex overflow-x-auto pb-4 mb-4 gap-3 custom-scrollbar">
        {(["Semua", "Hard Skills", "Soft Skills", "Prestasi"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => handleMainCategoryChange(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border border-white/10 ${
              mainCategory === cat
                ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-cyan-400 shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. SUB CATEGORY FILTER (Muncul jika kategori utama dipilih) */}
      {mainCategory !== "Semua" && mainCategory !== "Prestasi" && activeSubCategories.length > 1 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex overflow-x-auto pb-4 mb-6 gap-2 custom-scrollbar"
        >
          {activeSubCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleSubCategoryChange(category)}
              className={`px-4 py-1.5 border border-white/10 rounded-full whitespace-nowrap text-xs font-bold transition-all ${
                subCategory === category
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  : "bg-white/5 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${mainCategory}-${subCategory}-${visibleCount}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleCerts.map((cert) => (
            <div
              key={cert._id}
              className="bento-card bento-card-hover p-4 flex flex-col group relative"
            >
              {/* PDF Preview */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 mb-5 border border-white/10">
                {cert.fileUrl ? (
                  <MediaPreview fileUrl={cert.fileUrl} title={cert.title} />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                    <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-1">
                <span className={`inline-flex px-2 py-0.5 rounded-sm text-[10px] font-black uppercase border ${
                  (cert.category || "Lainnya") === "Prestasi"
                    ? "bg-amber-500 text-white border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                    : SOFT_SKILLS_CATEGORIES.includes(cert.category || "Lainnya") 
                      ? "bg-indigo-500 text-white border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.4)]" 
                      : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                }`}>
                  {(cert.category || "Lainnya") === "Prestasi" 
                    ? "Prestasi" 
                    : SOFT_SKILLS_CATEGORIES.includes(cert.category || "Lainnya") 
                      ? "Soft Skills" 
                      : "Hard Skills"}
                </span>
                <span className="inline-flex px-2 py-0.5 rounded-sm bg-cyan-500/10 text-[10px] font-black uppercase text-cyan-400 border border-cyan-500/30">
                  {cert.category || "Lainnya"}
                </span>
              </div>
              
              <h3 className="text-sm font-black text-slate-200 mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300">
                {cert.title}
              </h3>

              <div className="mt-auto pt-4 border-t border-white/5">
                {cert.fileUrl ? (
                  <a 
                    href={cert.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-black text-cyan-400 hover:text-indigo-400 flex items-center space-x-1.5 group/btn relative z-20 transition-colors"
                  >
                    <span>BUKA SERTIFIKAT</span>
                    <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs font-bold text-slate-400">FILE BELUM DIUNGGAH</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {filteredCerts.length > visibleCount && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setVisibleCount(prev => prev + 9)}
            className="btn-secondary flex items-center gap-2 mx-auto"
          >
            MUAT LEBIH BANYAK
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {filteredCerts.length === 0 && (
        <div className="text-center py-24 text-slate-500 font-bold">
          Belum ada sertifikat di kategori ini.
        </div>
      )}
    </div>
  );
}
