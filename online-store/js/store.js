/* Admiral Malika E-Commerce Store Engine */

const STORE_KEY = 'admiral_store_data';
const CART_KEY = 'admiral_store_cart';

const DEFAULT_STORE_DATA = {
  categories: [
    { id: 'cat-all', name: 'Semua Produk', icon: 'fa-th-large' },
    { id: 'cat-agraria', name: 'Produk Agraria', icon: 'fa-seedling' },
    { id: 'cat-olahan-kelapa', name: 'Olahan Kelapa', icon: 'fa-tree' },
    { id: 'cat-food-packaging', name: 'Food Grade Packaging', icon: 'fa-box' },
    { id: 'cat-snack', name: 'Snack & Retail', icon: 'fa-cookie-bite' }
  ],
  products: [
    {
      id: 'prod-1',
      name: 'Daun Pisang Vacuum Pack (500g)',
      category: 'cat-food-packaging',
      price: 25000,
      unit: 'Pack 500g',
      stock: 150,
      description: 'Daun pisang segar kualitas ekspor, bersih higienis dan divakum tahan lama.',
      icon: 'fa-leaf'
    },
    {
      id: 'prod-2',
      name: 'Gula Semut Organik Premium (1kg)',
      category: 'cat-olahan-kelapa',
      price: 45000,
      unit: 'Pouch 1kg',
      stock: 200,
      description: 'Gula kelapa murni organik kadar air rendah, sehat dan aman untuk diabetes.',
      icon: 'fa-cube'
    },
    {
      id: 'prod-3',
      name: 'Tepung Singkong Mocaf Super (1kg)',
      category: 'cat-agraria',
      price: 32000,
      unit: 'Pouch 1kg',
      stock: 100,
      description: 'Tepung olahan singkong gluten-free pengganti tepung terigu.',
      icon: 'fa-bread-slice'
    },
    {
      id: 'prod-4',
      name: 'Keripik Singkong Renyah Export Quality',
      category: 'cat-snack',
      price: 18000,
      unit: 'Pouch 200g',
      stock: 300,
      description: 'Keripik singkong gurih aneka rasa dari bumbu rempah pilihan.',
      icon: 'fa-utensils'
    }
  ],
  paymentSettings: {
    bankName: 'BCA (Bank Central Asia)',
    accountNumber: '8830-192-389',
    accountHolder: 'PT. Admiral Malika Internasional',
    waNumber: '+6281118893389',
    qrisImage: 'https://via.placeholder.com/300x300.png?text=QRIS+ADMIRAL+MALIKA',
    enableGateway: true
  },
  orders: []
};

// Data Store Accessors
function getStoreData() {
  const data = localStorage.getItem(STORE_KEY);
  if (!data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(DEFAULT_STORE_DATA));
    return DEFAULT_STORE_DATA;
  }
  return JSON.parse(data);
}

function saveStoreData(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

// Cart Accessors
function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId) {
  const store = getStoreData();
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;

  let cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  saveCart(cart);
  alert(`" ${prod.name} " telah ditambahkan ke keranjang belanja!`);
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const badgeElements = document.querySelectorAll('.cart-count');
  badgeElements.forEach(el => {
    el.textContent = totalItems;
  });
}

function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});
