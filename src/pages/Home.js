import React from "react";
import FetchDataFromAPI from "../components/FetchDataFromAPI";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <FetchDataFromAPI />
    </div>
  );
};

export default Home;
