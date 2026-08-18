// Standalone Online Store JavaScript Engine (store.admiralmalika.com)
const DEFAULT_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Tas Selempang Kulit Premium',
    price: 249000,
    oldPrice: 299000,
    categoryId: 'cat-fashion',
    categoryName: 'FASHION & BAGS',
    badge: 'Terlaris',
    badgeClass: 'badge-terlaris',
    image: 'images/bag_leather.jpg'
  },
  {
    id: 'prod-2',
    name: 'Kacamata Hitam Motif Tortoise',
    price: 149000,
    oldPrice: 189000,
    categoryId: 'cat-accessories',
    categoryName: 'AKSESORIS',
    badge: 'Popular',
    badgeClass: 'badge-baru',
    image: 'images/sunglasses_tortoise.jpg'
  },
  {
    id: 'prod-3',
    name: 'Jam Tangan Minimalis Strap Kulit',
    price: 289000,
    oldPrice: 349000,
    categoryId: 'cat-accessories',
    categoryName: 'AKSESORIS',
    badge: 'Baru',
    badgeClass: 'badge-baru',
    image: 'images/watch_leather.jpg'
  },
  {
    id: 'prod-4',
    name: 'Serum Wajah Glow Booster 30ml',
    price: 129000,
    oldPrice: 159000,
    categoryId: 'cat-beauty',
    categoryName: 'PERAWATAN DIRI',
    badge: 'Popular',
    badgeClass: 'badge-baru',
    image: 'images/serum_bottle.jpg'
  },
  {
    id: 'prod-5',
    name: 'Parfum Eau de Parfum Signature',
    price: 199000,
    oldPrice: 259000,
    categoryId: 'cat-beauty',
    categoryName: 'PERAWATAN DIRI',
    badge: 'Diskon 23%',
    badgeClass: 'badge-diskon',
    image: 'images/perfume_gold.jpg'
  },
  {
    id: 'prod-6',
    name: 'Dompet Kulit Bifold Pria',
    price: 179000,
    oldPrice: 219000,
    categoryId: 'cat-fashion',
    categoryName: 'FASHION',
    badge: 'Unggulan',
    badgeClass: 'badge-terlaris',
    image: 'images/wallet_leather.jpg'
  }
];

const DEFAULT_CATEGORIES = [
  { id: 'cat-all', name: 'Semua Produk', icon: 'fa-layer-group' },
  { id: 'cat-fashion', name: 'Fashion & Tas', icon: 'fa-shirt' },
  { id: 'cat-accessories', name: 'Aksesoris', icon: 'fa-clock' },
  { id: 'cat-beauty', name: 'Perawatan Diri', icon: 'fa-sparkles' }
];

function getWALink(productName, price) {
  const adminWA = '6281118893389';
  const text = `Halo Admin Admiral Malika Store,\n\nSaya mau pesan produk ini:\n• *Produk:* ${productName}\n• *Harga:* Rp${price.toLocaleString('id-ID')}\n\nMohon info ketersediaan stok dan total ongkirnya ya. Terima kasih!`;
  return `https://wa.me/${adminWA}?text=${encodeURIComponent(text)}`;
}
