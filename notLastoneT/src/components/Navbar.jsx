import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, LogIn, LogOut, UserPlus, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">DIY Shop</span>
            </Link>
          </div>

          <div className="flex-1 max-w-lg mx-8 hidden md:flex items-center">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-orange-600 flex items-center space-x-1"
            >
              <LogIn className="h-6 w-6" />
              <span className="hidden sm:inline">Login</span>
            </Link>
            <Link
              to="/register"
              className="text-gray-600 hover:text-orange-600 flex items-center space-x-1"
            >
              <UserPlus className="h-6 w-6" />
              <span className="hidden sm:inline">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
