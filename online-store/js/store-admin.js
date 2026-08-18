/* Admiral Malika StoreAdmin Panel Script */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure default data exists
  if (typeof getStoreData === 'function') {
    getStoreData();
  }
});

// Category Management Functions
function addCategory(name, icon) {
  const store = getStoreData();
  const newCat = {
    id: 'cat-' + Date.now(),
    name: name,
    icon: icon || 'fa-tag'
  };
  store.categories.push(newCat);
  saveStoreData(store);
  return newCat;
}

function deleteCategory(catId) {
  const store = getStoreData();
  store.categories = store.categories.filter(c => c.id !== catId);
  saveStoreData(store);
}

// Product Management Functions
function addProduct(productData) {
  const store = getStoreData();
  const newProd = {
    id: 'prod-' + Date.now(),
    name: productData.name,
    category: productData.category,
    price: parseInt(productData.price),
    unit: productData.unit,
    stock: parseInt(productData.stock),
    description: productData.description,
    icon: 'fa-box'
  };
  store.products.push(newProd);
  saveStoreData(store);
  return newProd;
}

function deleteProduct(prodId) {
  const store = getStoreData();
  store.products = store.products.filter(p => p.id !== prodId);
  saveStoreData(store);
}

// Payment Settings Update
function updatePaymentSettings(settings) {
  const store = getStoreData();
  store.paymentSettings = { ...store.paymentSettings, ...settings };
  saveStoreData(store);
}
