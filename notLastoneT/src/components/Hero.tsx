import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your One-Stop DIY Shop</h1>
            <p className="text-xl mb-8">Find everything you need for your home improvement projects</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;