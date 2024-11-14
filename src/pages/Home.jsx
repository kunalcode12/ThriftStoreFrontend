import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Reviews from "../components/Reviews";
import EliteFashionSlider from "../components/Slider";
import ThriftersInstagram from "../components/Insta";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Reviews />
      <EliteFashionSlider />
      <OurPolicy />

      <NewsletterBox />
      <ThriftersInstagram />
    </div>
  );
};

export default Home;
