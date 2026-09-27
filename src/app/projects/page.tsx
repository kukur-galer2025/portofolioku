import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function Projects() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      techStack,
      demoLink,
      githubLink
    }
  `);

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
          {/* Header Banner */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] p-8 mb-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
            <h1 className="text-3xl md:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 relative z-10">Proyek Saya</h1>
            <p className="text-slate-400 font-medium max-w-2xl relative z-10 text-sm md:text-base leading-relaxed">
              Sebuah koleksi dari berbagai karya pengembangan sistem, aplikasi web, dan platform digital yang telah saya bangun untuk memecahkan masalah nyata.
            </p>
          </div>

          <ProjectsGrid projects={projects} />
        </div>
      </main>
    </div>
  );
}
