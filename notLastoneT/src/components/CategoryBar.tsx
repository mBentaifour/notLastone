import React from 'react';
import { categories } from '../data/categories';

const CategoryBar = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.slug}
                className="flex flex-col items-center p-2 hover:bg-white rounded-lg transition-colors"
              >
                <Icon className="h-6 w-6 text-orange-600 mb-1" />
                <span className="text-sm text-gray-700">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;