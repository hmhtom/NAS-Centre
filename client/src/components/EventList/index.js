import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import EventCard from "../EventCard";
import Grid from "@mui/material/Grid";

// New imports
import { useSelector, useDispatch } from "react-redux";
import { updateEvent } from "../../utils/theaterSlice";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_EVENTS } from "../../utils/queries";
//
function EventList() {
  const [tabIndex, setTabIndex] = useState(0);
  //
  //const currentCategory = useSelector((state) => state.store.currentCategory);
  const events = useSelector((state) => state.theater.events);
  const dispatch = useDispatch();
  const { loading, data } = useQuery(QUERY_ALL_EVENTS);
  console.log(useQuery(QUERY_ALL_EVENTS));
  useEffect(() => {
    console.log("use effect touched");
    if (data) {
      console.log(data);

      dispatch({
        type: updateEvent,
        events: data.allEvents,
      });
      console.log(data);
    }
  }, [data, loading, dispatch]);

  function filterEvents() {
    //if (!currentCategory){
    return events;
    // }
    // return events.filter((event) => event.category._id === currentCategory);
  }
  //
  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Typography variant="h4" m={3} gutterBottom>
        What's On Now
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleChange}>
          <Tab label="All Events" />
          <Tab label="Concerts" />
          <Tab label="Sports" />
          <Tab label="Comedy Show" />
        </Tabs>
      </Box>
      <Grid container spacing={3} sx={{ p: 3 }}>
        {filterEvents().map((event) => (
          <EventCard
            // Props go here
            key={event._id}
            _id={event._id}
            image={event.image}
            eventName={event.eventName}
            description={event.description}
            availableSeats={event.availableSeats}
            date={event.date}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default EventList;
