/* Admiral Malika E-Commerce Store Engine */

const STORE_KEY = 'admiral_store_v2';

const DEFAULT_STORE_DATA = {
  categories: [
    { id: 'cat-all', name: 'Semua Produk', icon: 'fa-th-large' },
    { id: 'cat-fashion', name: 'Fashion & Kulit', icon: 'fa-shopping-bag' },
    { id: 'cat-aksesoris', name: 'Aksesoris', icon: 'fa-glasses' },
    { id: 'cat-perawatan', name: 'Perawatan Diri', icon: 'fa-pump-soap' },
    { id: 'cat-agraria', name: 'Produk Agraria', icon: 'fa-seedling' }
  ],
  products: [
    {
      id: 'prod-1',
      name: 'Tas Selempang Kulit Premium',
      categoryName: 'FASHION',
      categoryId: 'cat-fashion',
      price: 249000,
      oldPrice: null,
      badge: 'Terlaris',
      badgeClass: 'badge-terlaris',
      image: 'images/bag_leather.jpg',
      description: 'Tas selempang kulit sapi sintetis grade A dengan kompartemen luas dan zipper emas tahan karat.'
    },
    {
      id: 'prod-2',
      name: 'Kacamata Hitam Motif Tortoise',
      categoryName: 'AKSESORIS',
      categoryId: 'cat-aksesoris',
      price: 149000,
      oldPrice: null,
      badge: 'Popular',
      badgeClass: 'badge-baru',
      image: 'images/sunglasses_tortoise.jpg',
      description: 'Kacamata hitam gaya retro motif tortoise shell dengan lensa UV400 pelindung sinar matahari.'
    },
    {
      id: 'prod-3',
      name: 'Jam Tangan Minimalis Strap Kulit',
      categoryName: 'AKSESORIS',
      categoryId: 'cat-aksesoris',
      price: 289000,
      oldPrice: null,
      badge: 'Baru',
      badgeClass: 'badge-baru',
      image: 'images/watch_leather.jpg',
      description: 'Jam tangan quartz minimalis case stainless steel dan strap kulit asli warna coklat hangat.'
    },
    {
      id: 'prod-4',
      name: 'Serum Wajah Glow Booster 30ml',
      categoryName: 'PERAWATAN',
      categoryId: 'cat-perawatan',
      price: 129000,
      oldPrice: null,
      badge: 'Diskon',
      badgeClass: 'badge-diskon',
      image: 'images/serum_bottle.jpg',
      description: 'Serum pencerah wajah dengan Vitamin C & Niacinamide untuk kulit glowing alami seharian.'
    },
    {
      id: 'prod-5',
      name: 'Parfum Eau de Parfum Signature',
      categoryName: 'PERAWATAN',
      categoryId: 'cat-perawatan',
      price: 199000,
      oldPrice: 259000,
      badge: 'Diskon',
      badgeClass: 'badge-diskon',
      image: 'images/perfume_gold.jpg',
      description: 'Aroma woody floral mewah tahan hingga 12 jam dengan botol kaca kristal tutup emas eksklusif.'
    },
    {
      id: 'prod-6',
      name: 'Dompet Kulit Bifold Pria',
      categoryName: 'FASHION',
      categoryId: 'cat-fashion',
      price: 179000,
      oldPrice: null,
      badge: 'Terlaris',
      badgeClass: 'badge-terlaris',
      image: 'images/wallet_leather.jpg',
      description: 'Dompet lipat dua pria dari bahan kulit asli lembut dengan 8 slot kartu dan sekat uang kertas.'
    }
  ],
  waNumber: '6281118893389'
};

// Data Store Accessors & Cache Purge
function getStoreData() {
  localStorage.removeItem('admiral_store_data');

  const data = localStorage.getItem(STORE_KEY);
  if (!data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(DEFAULT_STORE_DATA));
    return DEFAULT_STORE_DATA;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    localStorage.setItem(STORE_KEY, JSON.stringify(DEFAULT_STORE_DATA));
    return DEFAULT_STORE_DATA;
  }
}

function saveStoreData(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

// Generate WhatsApp Order Link
function getWALink(productName, price) {
  const formattedPrice = 'Rp' + price.toLocaleString('id-ID');
  const message = `Halo Admin Admiral Malika, saya ingin pesan *${productName}* seharga *${formattedPrice}*. Mohon informasi ketersediaan stok & ongkirnya ya. Terima kasih!`;
  return `https://wa.me/6281118893389?text=${encodeURIComponent(message)}`;
}
