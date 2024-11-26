import React from 'react';
import { Plus, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onDetailsClick: () => void;
}

export default function ProductCard({ product, onDetailsClick }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={onDetailsClick}
          className="absolute top-3 right-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors"
          aria-label="View details"
        >
          <Eye className="h-5 w-5 text-wine-600" />
        </button>
      </div>
      
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-wine-800 mb-1">{product.name}</h3>
          <p className="text-base text-gray-600">{product.weight}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-brand-orange">€{product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="btn-primary flex items-center gap-2 px-5"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-5 w-5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}