import React, { createContext, useContext, useState, useMemo } from 'react';
import { Product } from '../types';
import { products as initialProducts } from '../data/products';

interface ProductContextType {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  categories: [],
  selectedCategory: '',
  setSelectedCategory: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  filteredProducts: [],
});

export const useProducts = () => useContext(ProductContext);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return Array.from(new Set(initialProducts.map(p => p.category))).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <ProductContext.Provider 
      value={{
        products: initialProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}