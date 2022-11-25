import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

import EventCard from "../EventCard";
import Grid from "@mui/material/Grid";

function EventList() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        What's On Now
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleChange}>
          <Tab label="All Events" />
          <Tab label="Concerts" />
          <Tab label="Sports" />
          <Tab label="Movies" />
        </Tabs>
      </Box>
      <Grid container spacing={3} sx={{ p: 3 }}>
        {/* {tabIndex === 0 && <EventCard />}
        {tabIndex === 1 && <EventCard />}
        {tabIndex === 2 && <EventCard />}
        {tabIndex === 3 && <EventCard />} */}
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Grid>
    </Box>
  );
}

export default EventList;
