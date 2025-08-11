import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const productData = {
  "t-shirts": {
    title: "T-Shirts",
    description:
      "AfroDigital offers premium cotton T-shirts with vibrant custom prints...",
    images: ["/assets/tshirt.jpg"],
    pricing: {
      printing: "$1",
      customizedTshirt: "$5",
      customizedGarment: "$8",
    },
    details: `We specialize in high-quality direct-to-garment and vinyl printing techniques...`,
  },
  "hoodies": {
    title: "Hoodies",
    description:
      "Warm, stylish hoodies with bold custom prints. Perfect for casual wear...",
    images: ["/assets/hoodie.jpg"],
    pricing: {
      printing: "$1",
      customizedHoodie: "$15",
    },
    details: `Our hoodies are printed using durable heat-transfer and vinyl techniques...`,
  },
  "caps": {
    title: "Caps",
    description:
      "Stylish caps available in various styles. We offer embroidery or print...",
    images: ["/assets/cap.jpg"],
  },
  "mugs": {
    title: "Mugs",
    description:
      "Custom ceramic mugs printed with your logo, photo, or design...",
    images: ["/assets/mug.jpg"],
  },
  "car-branding": {
    title: "Car Branding",
    description:
      "Transform your vehicle into a mobile billboard with AfroDigital’s custom car branding...",
    images: ["/assets/car.jpg"],
  },
  "banners": {
    title: "Banners",
    description:
      "Professional branded apparel for your team. We offer shirts, jackets, and more...",
    images: ["/assets/banner.jpg"],
  },
};

const ProductDetails = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(productData[name]);
  }, [name]);

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 bg-gray-900 min-h-screen">
        <h2 className="text-3xl font-bold mb-4 text-white">Product Not Found</h2>
        <p className="text-lg text-gray-300">Oops! We couldn’t find that product.</p>
      </div>
    );
  }

  return (
 <section className="py-20 px-6 min-h-screen bg-slate-900 relative overflow-hidden">
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Product Title */}
    <div className="text-center mb-16 mt-10">
      <h2 className="text-3xl md:text-4xl font-monsterrat mb-6 text-white leading-tight tracking-tight">
        {product.title}
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
        {product.description}
      </p>
    </div>

    {/* Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {product.images.map((src, index) => (
        <div key={index} className="group relative overflow-hidden rounded-3xl bg-slate-800 p-1">
          <div className="absolute inset-0 bg-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={src}
            alt={`${product.title} ${index + 1}`}
            className="w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700 relative z-10"
          />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Pricing Section */}
      <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-3xl font-bold text-white">Pricing</h3>
        </div>
        
        {product.pricing ? (
          <div className="space-y-4">
            {Object.entries(product.pricing).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="text-lg text-gray-300 capitalize font-medium">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="text-2xl font-bold text-emerald-400">
                  {value}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-slate-800/50 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <p className="text-gray-300 text-lg font-medium">
              Custom pricing available upon request
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Contact us for a personalized quote
            </p>
          </div>
        )}
      </div>

      {/* Details Section */}
      {product.details && (
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-3xl font-bold text-white">What We Do</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            {product.details}
          </p>
        </div>
      )}
    </div>
  </div>
</section>
  );
};

export default ProductDetails;
