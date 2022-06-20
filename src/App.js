import React from "react";
import AmBassaDors from "./components/AmBassaDors/AmBassaDors";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Arrivals from "./components/NEW_ARRIVALS/Arrivals";
import Salebanner from "./components/SaleBaner/Salebanner";

import Slider1 from "./components/Slider/Slider1";
import Slider2 from "./components/Slider/Slider2";
import TopSellersComponents from "./components/TopSellers/TopSellers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Arrivals />
      <Slider1 />
      <TopSellersComponents />
      <Slider2 />
      <Salebanner />
      <AmBassaDors />
      <Footer />
    </div>
  );
};

export default App;
