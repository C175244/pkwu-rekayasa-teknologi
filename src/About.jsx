import { useInView } from './hooks/useInView';
import { reasons } from './data';
import * as Icons from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const getIcon = (name) => {
    const Icon = Icons[name];
    return Icon ? <Icon size={28} /> : <Icons.HelpCircle size={28} />;
  };

  return (
    <section id="about" ref={ref} className={`bg-surface section-padding fade-up ${inView ? 'visible' : ''}`}>
      <div className="container-nvidia">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-wide">Mengapa Gurame?</span>
            <div className="w-3 h-3 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Alasan Memilih Budidaya Ikan Gurame</h2>
          <p className="mt-3 text-mute text-lg">Budidaya gurame adalah peluang usaha yang menjanjikan dengan teknologi sederhana.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children visible">
          {reasons.map((reason) => (
            <div key={reason.id} className="card text-center group hover:border-primary">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {getIcon(reason.icon)}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{reason.title}</h3>
              <p className="text-mute text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
