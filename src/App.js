import React from "react";
import AmBassaDorsComponents from "./components/AmBassaDors/AmBassaDorsComponents";
import Header from "./components/header/headerComponents";
import TopSellersComponents from "./components/TopSellers/TopSellersComponents";

const App = () => {
  return (
    <div>
      <AmBassaDorsComponents />
      <Header />
      <TopSellersComponents />
    </div>
  );
};

export default App;
