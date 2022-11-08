import React from "react";
import useTitle from "../../../hooks/useTitle";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import OfferForm from "../OfferForm/OfferForm";

const Home = () => {
  useTitle("Home");
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
