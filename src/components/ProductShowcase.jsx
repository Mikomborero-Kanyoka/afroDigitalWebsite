import React, { useState, useEffect } from 'react';

const products = [
  {
    name: 'Personalised Pen',
    image: "assets/otherImgs/pen.png",
    tagline: 'Write your brand into every moment.',
    description: 'Elegant engraved pens perfect for gifts, branding, or corporate identity. Customizable with names or logos.',
    promotion: 'Premium engraving included • Lifetime ink guarantee • Corporate bulk discounts available',
    highlight: 'Most Popular',
    color: 'bg-blue-600'
  },
  {
    name: 'Vinyl Cutting',
    image: '/assets/vynil-cutting.jpg',
    tagline: 'Precision that sticks.',
    description: 'Vinyl cutting for decals, apparel, and signage. Crisp lines, bold statements.',
    promotion: 'Weather-resistant materials • Same-day turnaround • Free design consultation',
    highlight: 'Pro Choice',
    color: 'bg-gray-700'
  },
  {
    name: 'Signage Writing',
    image: '/assets/otherImgs/signage.jpg',
    tagline: 'Your message, made monumental.',
    description: 'Handcrafted or digital signage writing for shops, events, and displays. Designed to be seen.',
    promotion: 'UV-resistant inks • Custom fonts available • Installation service included',
    highlight: 'Premium Quality',
    color: 'bg-blue-600'
  },
  {
    name: 'Books',
    image: '/assets/otherImgs/books.jpg',
    tagline: 'Stories that shape minds.',
    description: 'Custom printed books for schools, organizations, or personal projects. High-quality binding and design.',
    promotion: 'Hardcover & softcover options • ISBN registration • Global distribution network',
    highlight: 'Best Seller',
    color: 'bg-slate-600'
  },
  {
    name: 'School Charts',
    image: '/assets/otherImgs/charts.jpg',
    tagline: 'Learning made visual.',
    description: 'Educational charts for classrooms and homeschooling. Laminated, colorful, and curriculum-aligned.',
    promotion: 'Tear-proof lamination • Curriculum certified • Bulk school pricing',
    highlight: 'Educator\'s Pick',
    color: 'bg-gray-700'
  },
  {
    name: 'School Syllabuses',
    image: '/assets/otherImgs/syllabus.png',
    tagline: 'Structure that empowers.',
    description: 'Professionally printed syllabuses tailored to school curricula. Organized, durable, and easy to distribute.',
    promotion: 'Ministry approved templates • Quick delivery • Digital & print combo',
    highlight: 'Official',
    color: 'bg-blue-600'
  },
  {
    name: 'Text Books',
    image: '/assets/otherImgs/text.jpg',
    tagline: 'Knowledge in every page.',
    description: 'High-quality textbooks for primary and secondary education. Custom covers and bulk printing available.',
    promotion: 'Exam board approved • Durable binding • Teacher resources included',
    highlight: 'Academic Grade',
    color: 'bg-slate-600'
  }
];

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 8000); // 8 second delay

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleGetQuote = () => {
    setShowContactForm(true);
  };

  const handleSubmitContact = () => {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    
    const name = nameInput?.value || '';
    const email = emailInput?.value || '';
    const message = messageInput?.value || '';
    
    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }
    
    const product = products[currentSlide];
    
    // Create email content
    const emailSubject = `Quote Request - ${product.name}`;
    const emailBody = `Hello,\n\nI would like to request a quote for ${product.name}.\n\nContact Details:\nName: ${name}\nEmail: ${email}\n\nMessage: ${message || 'No additional message'}\n\nPlease provide pricing and availability information.\n\nThank you!`;
    
    // Open email client
    const emailUrl = `mailto:kanyokamikomborero1@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(emailUrl, '_blank');
    
    // Close form
    setShowContactForm(false);
    
    // Show success message
    alert('Email client opened! Please send the pre-filled email to complete your inquiry.');
  };

  const currentProduct = products[currentSlide];

  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col">
      {/* Header Space */}
      <div className="h-20 bg-transparent"></div>
      
      {/* Background Color */}
      <div className={`absolute inset-0 ${currentProduct.color} opacity-10 transition-all duration-1000`} />
      
      {/* Main Content with conditional blur - centered */}
      <div className={`relative z-10 flex-1 flex items-center justify-center transition-all duration-300 ${showContactForm ? 'blur-sm' : ''}`}>
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
            
            {/* Product Content - centered */}
            <div className="space-y-6 text-center lg:text-left flex flex-col justify-center">
              {/* Highlight Badge - centered */}
              <div className="flex justify-center lg:justify-start">
                <div className={`${currentProduct.color} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                  <span className="text-white text-sm">★</span>
                  <span className="text-white font-medium text-sm">{currentProduct.highlight}</span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-monsterrat text-white leading-tight">
                {currentProduct.name}
              </h1>

              {/* Tagline */}
              <p className="text-lg lg:text-xl xl:text-2xl font-bold font-palanquin text-blue-400">
                {currentProduct.tagline}
              </p>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {currentProduct.description}
              </p>
              
              {/* Promotional Features */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span className="text-yellow-400 font-medium">Exclusive Benefits</span>
                </div>
                <p className="text-gray-200 font-normal leading-relaxed text-center lg:text-left">
                  {currentProduct.promotion}
                </p>
              </div>

              {/* Call to Action Button - centered */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <button 
                  onClick={handleGetQuote}
                  className={`px-8 py-4 ${currentProduct.color} text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                >
                  <span className="text-lg">🏆</span>
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Product Image - centered */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md lg:max-w-lg h-80 lg:h-96 bg-gray-700 rounded-2xl shadow-xl border-2 border-white/10 flex items-center justify-center overflow-hidden mx-auto">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gray-600 rounded-2xl items-center justify-center text-white font-bold hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📦</div>
                    <div>{currentProduct.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - centered at bottom */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 transition-all duration-300 ${showContactForm ? 'blur-sm' : ''}`}>
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-800 rounded-full border border-gray-600 hover:bg-gray-700 transition-all duration-300"
        >
          <span className="text-white text-xl font-bold">‹</span>
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-3">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `${product.color} scale-125 shadow-lg` 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-gray-800 rounded-full border border-gray-600 hover:bg-gray-700 transition-all duration-300"
        >
          <span className="text-white text-xl font-bold">›</span>
        </button>
      </div>

      {/* Slide Counter - positioned top left */}
      <div className={`absolute top-24 left-6 transition-all duration-300 ${showContactForm ? 'blur-sm' : ''}`}>
        <div className="bg-gray-800 rounded-full px-4 py-2 border border-gray-600">
          <span className="text-white font-normal">
            {String(currentSlide + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Contact Form Modal - perfectly centered */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform scale-100 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-light text-gray-800">Get Quote for {currentProduct.name}</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl font-light"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="block text-gray-700 font-normal mb-2">Your Name</div>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <div className="block text-gray-700 font-normal mb-2">Email Address</div>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <div className="block text-gray-700 font-normal mb-2">Message (Optional)</div>
                <textarea 
                  name="message" 
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={handleSubmitContact}
                  className={`flex-1 py-3 ${currentProduct.color} text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Send Inquiry
                </button>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-normal rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;