import { useInView } from './hooks/useInView';
import { olahData, marketingChannels } from './data';
import * as Icons from 'lucide-react';

export default function Pengolahan() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const getIcon = (name) => {
    const Icon = Icons[name];
    return Icon ? <Icon size={24} /> : <Icons.HelpCircle size={24} />;
  };

  return (
    <section id="olah" ref={ref} className={`bg-white section-padding fade-up ${inView ? 'visible' : ''}`}>
      <div className="container-nvidia">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-wide">Kreasi</span>
            <div className="w-3 h-3 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Pengolahan & Pemasaran</h2>
          <p className="mt-3 text-mute text-lg">Dari kolam ke meja makan – berbagai cara mengolah dan memasarkan gurame.</p>
        </div>

        <h3 className="text-2xl font-bold text-dark mb-6 text-center">🍳 Resep Olahan Gurame</h3>
        <div className="grid md:grid-cols-3 gap-6 stagger-children visible">
          {olahData.map((item) => (
            <div key={item.id} className="card hover:border-primary img-zoom">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-nvidia mb-4" loading="lazy" />
              <h4 className="text-xl font-bold text-dark mb-2">{item.title}</h4>
              <p className="text-mute text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">📢 Strategi Pemasaran</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children visible">
            {marketingChannels.map((channel) => (
              <div key={channel.id} className="card text-center hover:border-secondary">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                  {getIcon(channel.icon)}
                </div>
                <h4 className="font-bold text-dark mb-1">{channel.name}</h4>
                <p className="text-mute text-sm">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-nvidia text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Siap Memulai Budidaya Gurame?</h3>
          <p className="text-white/80 mb-4">Dengan modal terjangkau dan teknologi sederhana, kamu bisa meraih keuntungan besar.</p>
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-nvidia hover:bg-white/90 transition-colors shadow-lg">
            Konsultasi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
