import React from "react";
import Carousel from "react-material-ui-carousel";
import HeroImg from "../HeroImg";

function Hero() {
  return (
    <Carousel>
      {/* Map Out HeroImg */}
      <HeroImg />
      <HeroImg />
      <HeroImg />
      <HeroImg />
      <HeroImg />
    </Carousel>
  );
}

export default Hero;
