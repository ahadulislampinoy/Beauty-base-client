import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import OfferForm from "../OfferForm/OfferForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Gallery />
      <OfferForm />
    </div>
  );
};

export default Home;
