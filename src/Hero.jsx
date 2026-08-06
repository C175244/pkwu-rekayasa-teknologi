import { ArrowDown, Fish } from 'lucide-react';
import { projectInfo } from './data';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-dark via-primary to-secondary overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="absolute top-20 left-10 text-white/20 animate-float hidden lg:block">
        <Fish size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20 animate-float delay-300 hidden lg:block">
        <Fish size={60} />
      </div>

      <div className="container-nvidia relative z-10 px-6 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            PKWU – Rekayasa Teknologi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {projectInfo.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            {projectInfo.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-white/80">
            <span>👨‍🎓 {projectInfo.author}</span>
            <span>📚 {projectInfo.kelas}</span>
            <span>🏫 {projectInfo.sekolah}</span>
          </div>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('about')} className="btn-primary bg-white text-primary hover:bg-white/90 shadow-lg">
              Mulai Jelajahi
            </button>
            <button onClick={() => scrollToSection('cara')} className="btn-outline border-white text-white hover:bg-white/10">
              Cara Budidaya
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}
