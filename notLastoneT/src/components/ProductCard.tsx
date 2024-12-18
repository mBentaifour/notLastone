import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-orange-600">
            {formatPrice(product.price)}
          </span>
          <button className="p-2 hover:bg-orange-100 rounded-full transition-colors">
            <ShoppingCart className="h-6 w-6 text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;