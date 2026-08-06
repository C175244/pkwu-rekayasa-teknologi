import { Fish, Heart } from 'lucide-react';
import { projectInfo, navItems } from './data';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white/80">
      <div className="container-nvidia px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-extrabold text-lg mb-3">
              <Fish size={24} />
              <span>Gurame<span className="text-secondary">Bud</span></span>
            </div>
            <p className="text-sm text-white/60">{projectInfo.tagline}</p>
            <p className="text-sm text-white/60 mt-1">{projectInfo.author} • {projectInfo.kelas}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Navigasi</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Tentang</h4>
            <p className="text-sm text-white/60">
              Website ini dibuat untuk tugas PKWU (Rekayasa Teknologi) tentang budidaya ikan gurame.
            </p>
            <p className="text-sm text-white/60 mt-2">Dibuat dengan <Heart className="inline text-primary" size={14} /> menggunakan React & Tailwind</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          © 2026 {projectInfo.author}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
