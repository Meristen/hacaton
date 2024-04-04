import React from "react";

import Navbar from "../shared/navbar/Navbar";

import MainRoutes from "./routes/MainRoutes";
import Footer from "../shared/footer/Footer";
import Slider from "../shared/slider/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
