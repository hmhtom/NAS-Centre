import React from "react";
import Carousel from "react-material-ui-carousel";
import HeroImg from "../HeroImg";
import Grid from "@mui/material/Grid";

function Hero() {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        item
        xs={12}
        lg={9}
        xl={8}
        sx={{
          height: "80vh",
        }}>
        <Carousel>
          <HeroImg src="in-your-dream.jpg" />
          <HeroImg src="toronto-raptors.png" />
          <HeroImg src="metallica.png" />
          <HeroImg src="toronto-maple-leaf.png" />
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default Hero;
