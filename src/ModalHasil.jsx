import { useInView } from './hooks/useInView';
import { financialData } from './data';
import { Wallet, TrendingUp, Fish, Package } from 'lucide-react';

export default function ModalHasil() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const { modalAwal, hasilPanen } = financialData;

  const modalItems = [
    { label: 'Kolam Terpal', value: modalAwal.kolamTerpal },
    { label: 'Bibit 1000 ekor', value: modalAwal.bibit },
    { label: 'Pakan (10 bulan)', value: modalAwal.pakan },
    { label: 'Obat & Garam', value: modalAwal.obatGaram },
    { label: 'Listrik & Aerator', value: modalAwal.listrik },
  ];

  const hasilItems = [
    { label: 'Jumlah Panen', value: `${hasilPanen.jumlahIkan} ekor` },
    { label: 'Berat Rata-rata', value: `${hasilPanen.beratRata} kg` },
    { label: 'Total Berat', value: `${hasilPanen.totalBerat} kg` },
    { label: 'Harga per kg', value: `Rp ${hasilPanen.hargaPerKilo.toLocaleString()}` },
  ];

  return (
    <section id="modal" ref={ref} className={`bg-surface section-padding fade-up ${inView ? 'visible' : ''}`}>
      <div className="container-nvidia">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-accent" />
            <span className="text-accent text-sm font-bold uppercase tracking-wide">Analisis</span>
            <div className="w-3 h-3 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Modal Awal & Hasil Panen</h2>
          <p className="mt-3 text-mute text-lg">Rincian biaya dan proyeksi pendapatan budidaya gurame skala kecil.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card border-t-4 border-t-primary">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="text-primary" size={28} />
              <h3 className="text-xl font-bold text-dark">Modal Awal</h3>
            </div>
            <ul className="space-y-2 text-body">
              {modalItems.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-border-color py-2">
                  <span>{item.label}</span>
                  <span className="font-bold">Rp {item.value.toLocaleString()}</span>
                </li>
              ))}
              <li className="flex justify-between pt-3 text-lg font-extrabold text-primary">
                <span>Total Modal</span>
                <span>Rp {modalAwal.total.toLocaleString()}</span>
              </li>
            </ul>
          </div>

          <div className="card border-t-4 border-t-secondary">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-secondary" size={28} />
              <h3 className="text-xl font-bold text-dark">Hasil Panen</h3>
            </div>
            <ul className="space-y-2 text-body">
              {hasilItems.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-border-color py-2">
                  <span>{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </li>
              ))}
              <li className="flex justify-between border-b border-border-color py-2">
                <span>Pendapatan Kotor</span>
                <span className="font-bold text-primary">Rp {hasilPanen.pendapatanKotor.toLocaleString()}</span>
              </li>
              <li className="flex justify-between pt-3 text-lg font-extrabold text-accent">
                <span>Keuntungan Bersih</span>
                <span>Rp {hasilPanen.keuntunganBersih.toLocaleString()}</span>
              </li>
            </ul>
            <div className="mt-4 bg-primary/10 p-3 rounded-nvidia text-sm text-dark">
              💡 <span className="font-bold">ROI:</span> {Math.round((hasilPanen.keuntunganBersih / modalAwal.total) * 100)}% dalam 10 bulan
            </div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 stagger-children visible">
          <div className="card text-center">
            <Fish className="mx-auto text-primary mb-2" size={32} />
            <p className="text-mute text-sm">Total Ikan</p>
            <p className="text-2xl font-extrabold text-dark">{hasilPanen.jumlahIkan} ekor</p>
          </div>
          <div className="card text-center">
            <Package className="mx-auto text-secondary mb-2" size={32} />
            <p className="text-mute text-sm">Total Berat</p>
            <p className="text-2xl font-extrabold text-dark">{hasilPanen.totalBerat} kg</p>
          </div>
          <div className="card text-center">
            <TrendingUp className="mx-auto text-accent mb-2" size={32} />
            <p className="text-mute text-sm">Keuntungan</p>
            <p className="text-2xl font-extrabold text-primary">Rp {hasilPanen.keuntunganBersih.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
