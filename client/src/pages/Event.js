import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch, useSelector } from "react-redux";
import { updateSeats, addTicket } from "../utils/theaterSlice";

import { QUERY_SEATS } from "../utils/queries";

export default function Event() {
  const { id } = useParams();

  const events = useSelector((state) => state.theater.events);
  const seats = useSelector((state) => state.theater.seats);

  const dispatch = useDispatch();

  const [currentEvent, setCurrentEvent] = useState({});
  const [currentSeat, setCurrentSeat] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const { loading, data } = useQuery(QUERY_SEATS);

  useEffect(() => {
    setCurrentEvent(events.find((event) => event._id === id));
    if (data) {
      dispatch({
        type: updateSeats,
        seats: data.seats,
      });
    }
  }, [events, seats, data, loading, dispatch, id]);

  const handleChange = (event) => {
    setCurrentSeat(event.target.value);
  };

  const tempId = () => {
    return Math.floor(Math.random() * 10000);
  };

  return (
    <Grid container sx={{ justifyContent: "space-around" }}>
      <Grid
        item
        xs={12}
        sm={11}
        md={9}
        lg={8}
        my={2}
        component="img"
        src={`../${currentEvent.image}`}
        sx={{
          height: "80vh",
        }}
      />
      <Grid item xs={12} sm={11} md={9} lg={8} m={3} component={Paper}>
        <Typography variant="h4" mx={3} gutterBottom>
          {currentEvent.eventName}
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          {currentEvent.description}
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          {currentEvent.date}
        </Typography>
        <Box m={3}>
          {/* Render Sold out if there is no more available seats */}
          {currentEvent.availableSeats > 0 ? (
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setFormVisible(true);
              }}>
              Buy Ticket
            </Button>
          ) : (
            <Button fullWidth variant="contained" disabled>
              Sold Out
            </Button>
          )}
        </Box>
      </Grid>
      {formVisible ? (
        <Grid item xs={12} sm={11} md={9} lg={8} m={3} component={Paper}>
          <Box m={3}>
            <FormControl fullWidth>
              <InputLabel id="seat">Seat</InputLabel>
              <Select
                labelId="seat"
                id="seat"
                label="Age"
                value={currentSeat}
                onChange={handleChange}>
                {seats.map((seat) => (
                  <MenuItem value={seat.seatNumber}>{seat.seatNumber}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box m={3}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                if (currentSeat) {
                  dispatch({
                    type: addTicket,
                    ticket: {
                      tempId: tempId(),
                      event: currentEvent,
                      seatNumber: currentSeat,
                    },
                  });
                  setCurrentSeat("");
                }
              }}>
              Add to Cart
            </Button>
          </Box>
        </Grid>
      ) : (
        <></>
      )}

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
