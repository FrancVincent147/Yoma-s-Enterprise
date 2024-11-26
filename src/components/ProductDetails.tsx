import React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close details"
          >
            <X className="h-6 w-6 text-wine-600" />
          </button>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-xl"
              />
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-wine-800 mb-2">{product.name}</h2>
                  <p className="text-xl text-brand-orange font-bold mb-4">
                    €{product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-wine-700 mb-2">Product Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Weight: {product.weight}</li>
                    <li>Category: {product.category}</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  {cartItem ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(product.id, Math.max(0, cartItem.quantity - 1))}
                          className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-wine-600"
                        >
                          <Minus className="h-5 w-5" />
                        </button>
                        <span className="text-xl font-medium w-12 text-center">{cartItem.quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                          className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-wine-600"
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Total: €{(product.price * cartItem.quantity).toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}