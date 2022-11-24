import React from "react";
import Hero from "../components/Hero";
import Stack from "@mui/material/Stack";
import EventList from "../components/EventList";

const Home = () => {
  return (
    <Stack spacing={5}>
      <Hero />
      <EventList />
    </Stack>
  );
};

export default Home;
