"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  _id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  techStack?: string[];
  demoLink?: string;
  githubLink?: string;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 pb-24">
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="bento-card group flex flex-col"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-[#0a0f1c]">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="text-slate-500 font-bold">Tidak ada gambar</span>
              </div>
            )}
            
            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-[#030712]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-black text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            {project.description && (
              <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            )}

            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {project.techStack?.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
              {(!project.techStack || project.techStack.length === 0) && (
                <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/10 rounded-md">
                  Aplikasi Web
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {projects.length === 0 && (
        <div className="col-span-full py-20 text-center text-slate-500 font-bold">
          Belum ada proyek yang ditambahkan.
        </div>
      )}
    </div>
  );
}
