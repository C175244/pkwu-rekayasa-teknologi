import { useInView } from './hooks/useInView';
import { steps } from './data';
import { ChevronRight } from 'lucide-react';

export default function CaraBudidaya() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="cara" ref={ref} className={`bg-white section-padding fade-up ${inView ? 'visible' : ''}`}>
      <div className="container-nvidia">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-secondary" />
            <span className="text-secondary text-sm font-bold uppercase tracking-wide">Panduan</span>
            <div className="w-3 h-3 bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Cara Budidaya Gurame</h2>
          <p className="mt-3 text-mute text-lg">Ikuti langkah-langkah berikut untuk hasil panen yang maksimal.</p>
        </div>

        <div className="space-y-12 stagger-children visible">
          {steps.map((step, idx) => (
            <div key={step.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2 img-zoom rounded-nvidia shadow-md">
                <img src={step.image} alt={step.title} className="w-full h-64 object-cover rounded-nvidia" loading="lazy" />
              </div>
              <div className="lg:w-1/2 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white font-extrabold rounded-full text-sm">
                    {step.id}
                  </span>
                  <h3 className="text-2xl font-bold text-dark">{step.title}</h3>
                </div>
                <p className="text-body text-base leading-relaxed">{step.desc}</p>
                <div className="flex items-center text-primary font-bold text-sm">
                  <span>Lanjut</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
