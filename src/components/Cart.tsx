import React, { useState } from 'react';
import { Trash2, Plus, Minus, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-lg text-gray-600">Your cart is empty</p>
        <p className="text-sm text-gray-500 mt-2">Add items to begin shopping</p>
      </div>
    );
  }

  if (isCheckingOut) {
    return <CheckoutForm onBack={() => setIsCheckingOut(false)} />;
  }

  return (
    <div className="p-6">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-start gap-4 py-6 border-b border-gray-200">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-wine-800">{item.product.name}</h3>
            <p className="text-base text-gray-600 mb-2">{item.product.weight}</p>
            <p className="text-lg font-medium text-brand-orange">
              €{(item.product.price * item.quantity).toFixed(2)}
            </p>
            
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-wine-600"
                aria-label="Decrease quantity"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="w-12 text-center text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-wine-600"
                aria-label="Increase quantity"
              >
                <Plus className="h-5 w-5" />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 ml-2"
                aria-label="Remove item"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-medium text-gray-700">Total:</span>
          <span className="text-2xl font-bold text-wine-800">€{total.toFixed(2)}</span>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            🚚 Free delivery for orders over €50
          </p>
          <button
            className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
            onClick={() => setIsCheckingOut(true)}
          >
            <Truck className="h-6 w-6" />
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}