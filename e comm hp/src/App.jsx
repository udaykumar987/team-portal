import React from "react";
import HomePage from "./components/HomePage";
import ProductGrid from "./components/ProductGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import PromoScroll from "./components/PromoScroll";
import WearScroll from "./components/WearScroll";


const App = () => {
  return (
    <>
    <Header/>

      <HomePage />
      
      <AdBanner/>
      <PromoScroll/>
      <ProductGrid />
      <WearScroll/>
      <Footer/>
    </>
  );
};

export default App;
