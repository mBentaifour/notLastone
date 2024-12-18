import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWishlist, removeFromWishlist, addToCart } from '../services/api';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Wishlist() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchWishlist();
  }, [user, navigate]);

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      setWishlist(response.data);
      setError(null);
    } catch (error) {
      setError('Error loading wishlist. Please try again later.');
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(productId);
      setWishlist((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      alert('Error removing item from wishlist');
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId, 1);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding item to cart');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Heart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No items in wishlist</h3>
          <p className="mt-1 text-sm text-gray-500">
            Start adding some items to your wishlist!
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75">
              <img
                src={product.image_url || '/placeholder.png'}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <span
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="cursor-pointer hover:text-orange-600"
                >
                  {product.name}
                </span>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category?.name}</p>
              <p className="mt-2 text-sm font-medium text-gray-900">${product.price}</p>
              
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={!product.in_stock}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md flex items-center justify-center space-x-2 ${
                    product.in_stock
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{product.in_stock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="p-2 text-red-600 hover:text-red-700 rounded-md border border-red-600 hover:bg-red-50"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
