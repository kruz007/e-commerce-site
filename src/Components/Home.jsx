import React from "react";
import Hero from "../Pages/Hero";
import Jewelry from "../Pages/Jewelry";
import Electronics from "../Pages/Electronics";
import Women from "../Pages/Women"
import LastPage from "../Pages/LastPage";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Jewelry />
      <Electronics />
      <Women />
      <LastPage />
    </div>
  );
};

export default Home;
