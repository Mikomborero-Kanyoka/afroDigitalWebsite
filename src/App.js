import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import AboutUs from "./components/AboutUS";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="font-sans">
      {/* Global Header */}
      <Header />

      {/* Route Definitions */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid />
              <AboutUs />
            </>
          }
        />

        {/* Dynamic Product Details Page */}
        <Route path="/products/:name" element={<ProductDetails />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
