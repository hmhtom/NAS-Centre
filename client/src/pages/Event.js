import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {useDispatch, useSelector} from 'react-redux';
import {
  updateEvent,
} from "../utils/theaterSlice";

import {QUERY_EVENT} from '../utils/queries';

export default function Event() {

  const {id} = useParams();
  const events = useSelector((state) => state.theater.events);
  const dispatch = useDispatch();
  const [currentEvent, setCurrentEvent] = useState({});
  const {loading, data} = useQuery(QUERY_EVENT, {
    variables: {id: id},
  });
  console.log(id);
  console.log(events);
  useEffect(() => {
    console.log(data);

    if (events.length) {
      setCurrentEvent(events.find((event) => event._id === id));
    }
    else if (data) {
      dispatch({ type: updateEvent, events: data.events,});
    } 
  },[events, data, loading, dispatch, id]);

  return (
    <Grid container sx={{ justifyContent: "space-around" }}>
      <Grid
        item
        xs={12}
        sm={11}
        md={9}
        lg={8}
        my={2}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "covered",
          backgroundPosition: "center",
          height: "80vh",
        }}
      />
      <Grid item xs={12} sm={11} md={9} lg={8} m={3} component={Paper}>
        <Typography variant="h4" mx={3} gutterBottom>
          {currentEvent.eventName}
        </Typography>
        <Typography variant="h6" m={3} gutterBottom>
          Placer Holder for SubTitle(Performer Name/Sport Team)
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          {currentEvent.description}
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          {currentEvent.date}
        </Typography>
        <Box m={3}>
          {/* Render Sold out if there is no more available seats */}
          {currentEvent.availableSeats.length > 0 
          ?
          <div>
          <Button fullWidth variant="contained">
            Buy Ticket
          </Button>
          <Button fullWidth variant="contained" disabled>
            Sold Out
          </Button>
          </div>
          :
          <div>
          <Button fullWidth variant="contained" disabled>
            Buy Ticket
          </Button>
          <Button fullWidth variant="contained">
            Sold Out
          </Button>
          </div>}
        </Box>
      </Grid>
      <Grid item xs={12} sm={11} md={9} lg={8} m={3}>
        <Typography variant="h5" gutterBottom>
          Policies
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="refund-header">
            <Typography>Refund Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="camera-header">
            <Typography>Camera Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="bag-header">
            <Typography>Nas Centre Bag Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
