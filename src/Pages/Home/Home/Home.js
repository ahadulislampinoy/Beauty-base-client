import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import OfferForm from "../OfferForm/OfferForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <OfferForm />
    </div>
  );
};

export default Home;
