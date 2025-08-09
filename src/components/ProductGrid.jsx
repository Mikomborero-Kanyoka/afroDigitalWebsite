import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Utility to convert product names into URL-friendly slugs
const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

// Product list with name, image, and gradient color
const products = [
  { name: "T-Shirts", image: "/assets/tshirt.jpg", color: "from-blue-500 to-purple-600" },
  { name: "Caps", image: "/assets/cap.jpg", color: "from-green-500 to-teal-600" },
  { name: "Hoodies", image: "/assets/hoodie.jpg", color: "from-red-500 to-pink-600" },
  { name: "Mugs", image: "/assets/mug.jpg", color: "from-yellow-500 to-orange-600" },
  { name: "Car Branding", image: "/assets/car.jpg", color: "from-indigo-500 to-blue-600" },
  { name: "Banners", image: "/assets/banner.jpg", color: "from-gray-700 to-gray-900" },
];

const ProductGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  // Animate items as they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedItems((prev) => new Set([...prev, parseInt(entry.target.dataset.index)]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    const productElements = document.querySelectorAll('[data-index]');
    productElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-4 tracking-tight">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full transform transition-all duration-700 hover:w-32"></div>
          <p className="text-gray-600 text-lg mt-6 font-light">Discover our premium collection</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const slug = slugify(product.name);
            return (
              <Link
                to={`/products/${slug}`}
                key={product.name}
                data-index={index}
                className={`group relative cursor-pointer transform transition-all duration-700 block ${
                  animatedItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 transition-all duration-500 z-10`}
                  ></div>

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"
                      style={{ left: '-100%' }}
                    ></div>
                  </div>

                  <div className="p-6 relative z-20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div
                        className={`transform transition-all duration-300 ${
                          hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                        }`}
                      >
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`h-0.5 bg-gradient-to-r ${product.color} mt-2 rounded-full transition-all duration-500 ${
                        hoveredIndex === index ? 'w-full' : 'w-0'
                      }`}
                    ></div>

                    <div
                      className={`mt-3 overflow-hidden transition-all duration-500 ${
                        hoveredIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-gray-600">
                        Premium quality {product.name.toLowerCase()} for your brand
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} animate-pulse`}></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/5 rounded-3xl transform translate-y-1 -z-10 group-hover:translate-y-3 group-hover:scale-95 transition-all duration-500"></div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              Explore All Products
            </span>
            <svg
              className="w-5 h-5 ml-2 transform transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
