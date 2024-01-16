import React from "react";
import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands";
import Industry from "../../components/Industry";
import Learn from "../../components/Learn";
import Hero from "../../components/Hero";
import Together from "../../components/Together";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero/>
      <Industry/>
      <Learn/>
      <Brands/>
      <Together/>
    </>
  );
};

export default Home;
