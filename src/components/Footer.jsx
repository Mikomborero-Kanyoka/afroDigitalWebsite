import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            &copy; {currentYear} <span className="text-purple-500 font-semibold">AfroDigital</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with passion in Chitungwiza, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;