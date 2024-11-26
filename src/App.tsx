import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { ProductProvider, useProducts } from './context/ProductContext';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import SearchAndFilter from './components/SearchAndFilter';
import Cart from './components/Cart';
import CarShowcase from './components/CarShowcase';
import About from './components/About';
import AnnouncementBanner from './components/AnnouncementBanner';
import { Product } from './types';

function ProductList() {
  const { filteredProducts } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <SearchAndFilter />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetailsClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'foods' | 'cars'>('foods');

  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <AnnouncementBanner />
          <Navbar 
            onCartClick={() => setIsCartOpen(true)} 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          {/* Hero Section */}
          <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-wine-700 to-wine-800 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Yoma's Enterprise
              </h1>
              <p className="text-xl mb-8 text-wine-100">
                Premium African Foods & Quality Used Cars
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => setActiveSection('foods')}
                  className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                    activeSection === 'foods' 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-transparent border-2 border-white hover:bg-white/10'
                  }`}
                >
                  Explore Foods
                </button>
                <button 
                  onClick={() => setActiveSection('cars')}
                  className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                    activeSection === 'cars' 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-transparent border-2 border-white hover:bg-white/10'
                  }`}
                >
                  View Cars
                </button>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {activeSection === 'foods' ? (
                <>
                  <h2 className="text-3xl font-bold text-wine-800 mb-8 text-center">
                    African Foods
                  </h2>
                  <ProductList />
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-wine-800 mb-8 text-center">
                    Available Cars
                  </h2>
                  <CarShowcase />
                </>
              )}
            </div>
          </section>

          {/* About Section */}
          <About />

          {/* Cart Sidebar */}
          <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="h-full flex flex-col">
              <div className="p-4 bg-wine-700 text-white shadow-sm flex justify-between items-center">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-white hover:text-wine-200"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Cart />
              </div>
            </div>
          </div>

          {/* Cart Toggle Button */}
          {activeSection === 'foods' && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="fixed bottom-6 right-6 bg-brand-orange text-white p-4 rounded-full shadow-lg hover:bg-brand-orangeDark transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
            </button>
          )}
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;