import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import CertificatesSection from "@/components/CertificatesSection";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function Achievements() {
  const certificates = await client.fetch(`
    *[_type == "certificate"] | order(title asc) {
      _id,
      title,
      category,
      "fileUrl": file.asset->url
    }
  `);

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:ml-56 flex flex-col">
        <MobileHeader />

        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          {/* Header Banner */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] p-8 mb-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <h1 className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 relative z-10">Pencapaian Saya</h1>
            <p className="text-slate-400 font-medium max-w-2xl relative z-10">
              Galeri lengkap yang berisi seluruh sertifikasi, penghargaan, dan pencapaian sebagai bukti pembelajaran dan pengembangan diri yang berkelanjutan.
            </p>
          </div>

          <CertificatesSection certificates={certificates} />
        </div>
      </main>
    </div>
  );
}
