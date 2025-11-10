import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddressForm from "./components/AddressForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import PromoScroll from "./components/PromoScroll";
import ProductGrid from "./components/ProductGrid";
import WearScroll from "./components/WearScroll";

const App = () => {
  return (
    <BrowserRouter>
     
      <Header />

     
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <AdBanner />
            <PromoScroll />
            <ProductGrid />
            <WearScroll />
          </>
        } />
        <Route path="/address" element={<AddressForm />} />
      </Routes>

    
      <Footer />
    </BrowserRouter>
  );
};

export default App;
