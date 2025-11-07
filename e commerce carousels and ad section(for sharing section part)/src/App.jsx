import React from "react";
import AdBanner from "./components/AdBanner";
import "./index.css";
import PromoScroll from "./components/PromoScroll";
import WearScroll from "./components/WearScroll";

function App() {
  return (
    <div>
      <AdBanner /> 
      <br></br>
            <br></br>
      <PromoScroll />
      <WearScroll /> {/* 👕 new section */}

      {/* <ScrollStrip1 /> */}

    </div>
  );
}

export default App;
