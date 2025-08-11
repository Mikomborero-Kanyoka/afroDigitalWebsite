import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Catalog', href: '#products' },
    { label: 'Contact', href: '#about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-lg shadow-2xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="group cursor-pointer flex-shrink-0">
          {/* Mobile/Tablet Logo (AD) */}
          <div className="md:hidden">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-black text-sm">AD</span>
            </div>
          </div>
          
          {/* Desktop Logo (AfroDigital) */}
          <div className="hidden md:flex items-center">
            <div className="relative mr-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-black text-lg">A</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="relative">
                <span className="text-white transition-all duration-300 group-hover:text-blue-400">froDigital</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full group-hover:bg-purple-500 transition-all duration-500"></div>
              </span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group relative text-white font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text"
            >
              {label}
              <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              <span className="absolute inset-0 rounded-lg bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="group relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 transform ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10">
          <nav className="px-6 py-4 space-y-4">
            {navItems.map(({ label, href }, index) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-purple-500/20 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Border bottom when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;