// ============================================================
// DATA KONTEN WEBSITE PKWU – BUDIDAYA IKAN GURAME
// ============================================================

export const projectInfo = {
  title: 'Budidaya Ikan Gurame',
  tagline: 'Rekayasa Teknologi Tepat Guna untuk Ketahanan Pangan',
  author: 'Bayu Alfatir Aji Utomo',
  kelas: 'XII IPA 1',
  sekolah: 'SMAN 104 Jakarta',
};

// ============================================================
// ALASAN MEMILIH
// ============================================================
export const reasons = [
  {
    id: 1,
    icon: 'TrendingUp',
    title: 'Permintaan Pasar Tinggi',
    desc: 'Ikan gurame selalu dicari karena rasa dagingnya yang gurih dan teksturnya padat. Harga jual stabil dan cenderung naik.',
  },
  {
    id: 2,
    icon: 'Droplet',
    title: 'Teknologi Sederhana',
    desc: 'Budidaya gurame bisa dilakukan dengan kolam terpal, kolam tanah, atau keramba. Teknologi yang dibutuhkan mudah dijangkau.',
  },
  {
    id: 3,
    icon: 'Coins',
    title: 'Keuntungan Menjanjikan',
    desc: 'Dengan modal awal yang tidak terlalu besar, hasil panen bisa mencapai 3-5 kali lipat dari modal dalam satu siklus (8-12 bulan).',
  },
  {
    id: 4,
    icon: 'Leaf',
    title: 'Ramah Lingkungan',
    desc: 'Limbah budidaya gurame dapat diolah menjadi pupuk organik. Sistem bioflok juga mengurangi dampak lingkungan.',
  },
];

// ============================================================
// CARA BUDIDAYA (Step-by-step)
// ============================================================
export const steps = [
  {
    id: 1,
    title: 'Persiapan Kolam',
    desc: 'Pilih lokasi dekat sumber air. Gunakan kolam terpal ukuran 4x6 meter dengan kedalaman 1 meter. Jemur terpal dan isi air setinggi 80 cm.',
    image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Pemilihan Bibit Unggul',
    desc: 'Pilih bibit gurame ukuran 5-8 cm (benih) atau 10-15 cm (konsumsi). Pastikan bibit sehat, aktif, dan tidak cacat. Tebar 500-1000 ekor per kolam.',
    image: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Pemberian Pakan',
    desc: 'Berikan pelet apung (kadar protein 30-35%) sebanyak 3% dari bobot ikan per hari. Tambahkan pakan alami seperti daun pepaya atau kangkung untuk variasi.',
    image: 'https://images.unsplash.com/photo-1530748698682-9f6f149a0f59?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Manajemen Kualitas Air',
    desc: 'Jaga pH air 6,5-8, suhu 25-30°C, dan oksigen terlarut >3 mg/L. Ganti air 20-30% setiap minggu. Gunakan aerator untuk sirkulasi.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Pencegahan Hama & Penyakit',
    desc: 'Lakukan karantina bibit baru. Beri garam ikan 1-2 kg/m³ untuk mencegah jamur. Jika ada ikan mati, segera angkat dan obati dengan antiseptik.',
    image: 'https://images.unsplash.com/photo-1584132967332-10e028bd69f7?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Panen',
    desc: 'Panen setelah 8-12 bulan dengan bobot 400-800 gram per ekor. Gunakan jaring halus, lakukan panen bertahap (selektif) agar ikan kecil tetap tumbuh.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop',
  },
];

// ============================================================
// MODAL DAN HASIL
// ============================================================
export const financialData = {
  modalAwal: {
    kolamTerpal: 1500000,
    bibit: 1200000,
    pakan: 2500000,
    obatGaram: 300000,
    listrik: 600000,
    total: 6100000,
  },
  hasilPanen: {
    jumlahIkan: 850,
    beratRata: 0.6,
    totalBerat: 510,
    hargaPerKilo: 35000,
    pendapatanKotor: 17850000,
    keuntunganBersih: 11750000,
  },
};

// ============================================================
// PENGOLAHAN & PEMASARAN
// ============================================================
export const olahData = [
  {
    id: 1,
    title: 'Gurame Goreng Crispy',
    desc: 'Potong gurame fillet, lumuri bumbu, lalu goreng dengan tepung crispy. Sajikan dengan sambal dan lalapan.',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac6c2a5c?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Gurame Bakar Madu',
    desc: 'Lumuri gurame dengan bumbu kecap, madu, dan rempah. Bakar di atas arang atau oven hingga matang dan beraroma.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Gurame Asam Manis',
    desc: 'Goreng gurame utuh, siram dengan saus asam manis pedas yang terbuat dari nanas, cabai, dan tomat.',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45c8?w=600&h=400&fit=crop',
  },
];

export const marketingChannels = [
  {
    id: 1,
    name: 'Marketplace (Shopee, Tokopedia)',
    desc: 'Jual gurame segar atau olahan beku. Kemas dengan kemasan vakum dan beri label menarik.',
    icon: 'ShoppingBag',
  },
  {
    id: 2,
    name: 'Restoran & Katering',
    desc: 'Kerjasama dengan restoran seafood atau katering untuk pasokan gurame segar secara rutin.',
    icon: 'Utensils',
  },
  {
    id: 3,
    name: 'Media Sosial (Instagram, TikTok)',
    desc: 'Buat konten menarik tentang proses budidaya dan olahan gurame. Bangun komunitas pecinta ikan.',
    icon: 'Share2',
  },
  {
    id: 4,
    name: 'Pasar Tradisional & Modern',
    desc: 'Jual langsung di pasar ikan atau titipkan di supermarket dengan sistem konsinyasi.',
    icon: 'Store',
  },
];

// ============================================================
// DATA NAVIGASI
// ============================================================
export const navItems = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Alasan' },
  { id: 'cara', label: 'Cara Budidaya' },
  { id: 'modal', label: 'Modal & Hasil' },
  { id: 'olah', label: 'Pengolahan' },
];
