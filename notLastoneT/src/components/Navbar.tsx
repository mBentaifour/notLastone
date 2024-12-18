import React from 'react';
import { ShoppingCart, Menu, Search, Wrench } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Wrench className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Bricolage Express</span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center px-8">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;