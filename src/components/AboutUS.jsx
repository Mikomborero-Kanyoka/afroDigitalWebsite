import React from 'react';
import '../output.css';

const AboutUs = () => {
  const whatsappNumber = '263783914479';
  const whatsappMessage = encodeURIComponent('Hello AfroDigital, I would love to know more about your products!');
  const emailAddress = 'kanyokamikomborero1@gmail.com';
  const emailSubject = encodeURIComponent('AfroDigital Inquiry');
  const emailBody = encodeURIComponent('Hi AfroDigital,\n\nI am interested in learning more about your offerings. Please send me more details.\n\nThanks!');
  const address = '4980 Unit C, Seke, Chitungwiza, Zimbabwe';
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center py-16 px-6 md:px-12" id='about'>
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700">
          
          {/* Header - Takes about 1/4 of screen */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-purple-500">
              About Us
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              AfroDigital is a bold, creative brand based in Chitungwiza, Zimbabwe. We specialize in vibrant digital prints and wearable art that speaks to culture, identity, and innovation.
            </p>
          </div>

          {/* Contact Cards - Takes about 3/4 of screen */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* WhatsApp Card */}
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold text-lg"
                >
                  +263 78 391 4479
                </a>
                <p className="text-gray-400 mt-2">Chat with us instantly</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                <a
                  href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold text-lg break-all"
                >
                  {emailAddress}
                </a>
                <p className="text-gray-400 mt-2">Send us an email</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold text-lg"
                >
                  4980 Unit C, Seke<br />
                  Chitungwiza, Zimbabwe
                </a>
                <p className="text-gray-400 mt-2">Get directions</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-lg hidden lg:block"
            >
              Let's Create Something Amazing Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;