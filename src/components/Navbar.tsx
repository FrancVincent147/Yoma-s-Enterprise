import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
  activeSection: 'foods' | 'cars';
  onSectionChange: (section: 'foods' | 'cars') => void;
}

export default function Navbar({ onCartClick, activeSection, onSectionChange }: NavbarProps) {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-wine-700">Yoma's Enterprise</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onSectionChange('foods')}
              className={`text-lg font-medium hover:text-brand-orange transition-colors ${
                activeSection === 'foods' ? 'text-brand-orange' : 'text-wine-600'
              }`}
            >
              Foods
            </button>
            <button 
              onClick={() => onSectionChange('cars')}
              className={`text-lg font-medium hover:text-brand-orange transition-colors ${
                activeSection === 'cars' ? 'text-brand-orange' : 'text-wine-600'
              }`}
            >
              Cars
            </button>
            <a href="#about" className="text-lg font-medium text-wine-600 hover:text-brand-orange transition-colors">About</a>
            <a href="#contact" className="text-lg font-medium text-wine-600 hover:text-brand-orange transition-colors">Contact</a>
            {activeSection === 'foods' && (
              <button 
                className="relative p-2"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-7 w-7 text-wine-600 hover:text-brand-orange transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7 text-wine-600" />
              ) : (
                <Menu className="h-7 w-7 text-wine-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => {
                onSectionChange('foods');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-lg rounded-lg ${
                activeSection === 'foods' 
                  ? 'bg-brand-orange text-white' 
                  : 'text-wine-600 hover:bg-gray-50'
              }`}
            >
              Foods
            </button>
            <button 
              onClick={() => {
                onSectionChange('cars');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-lg rounded-lg ${
                activeSection === 'cars' 
                  ? 'bg-brand-orange text-white' 
                  : 'text-wine-600 hover:bg-gray-50'
              }`}
            >
              Cars
            </button>
            <a 
              href="#about" 
              className="block px-4 py-2 text-lg text-wine-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 text-lg text-wine-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            {activeSection === 'foods' && (
              <button 
                onClick={() => {
                  onCartClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-lg text-wine-600 hover:bg-gray-50 rounded-lg"
              >
                <ShoppingCart className="h-6 w-6 mr-2" />
                Cart ({totalItems})
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}