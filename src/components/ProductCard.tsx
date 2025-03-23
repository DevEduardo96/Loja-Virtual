import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
          <span className="text-sm font-medium text-gray-500">{product.category}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              product.stock > 0 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={product.stock <= 0}
            onClick={() => product.stock > 0 && addToCart(product)}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
        {product.stock > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            {product.stock} in stock
          </p>
        )}
      </div>
    </div>
  );
}