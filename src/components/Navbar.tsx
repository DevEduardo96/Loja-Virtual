import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button 
                className="sm:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-gray-800">StyleStore</h1>
            </div>
            
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Loja</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Categorias</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2">
                <Search className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                className="p-2 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartItemsCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Shop</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">About</a>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}