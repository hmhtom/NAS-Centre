import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Event() {
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
          Placer Holder for Event Name
        </Typography>
        <Typography variant="h6" m={3} gutterBottom>
          Placer Holder for SubTitle(Performer Name/Sport Team)
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          Description: Here is the description of the event.
        </Typography>
        <Typography variant="body1" m={3} gutterBottom>
          ShowTime: 9999/Nov/24 9:00PM
        </Typography>
        <Box m={3}>
          {/* Render Sold out if there is no more available seats */}
          <Button fullWidth variant="contained">
            Buy Ticket
          </Button>
          <Button fullWidth variant="contained" disabled>
            Sold Out
          </Button>
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
