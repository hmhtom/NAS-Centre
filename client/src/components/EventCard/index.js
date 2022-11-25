import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function EventCard(props) {
  //Map out the Event Cards from props coming in
  // Needs a area for the description to be put into, unless I am blind
  return (
    <Grid item xs={9} sm={6} lg={4} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="placeholder" height="140" image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${props.eventName}`}
          </Typography>
          <Typography gutterBottom component="div">
            {`${props.date}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/event" size="small">
            Learn More
          </Button>
          {/* Render Sold out if there is no more seats */}
          {props.quantity == 0 && 
          <div>
          <Button size="small" disabled>Buy Ticket</Button>
          <Button size="small">
          Sold Out
            </Button>
          </div>
          }
          {props.quantity > 0 &&
          <div>
            <Button size="small">Buy Ticket</Button>
            <Button size="small" disabled>
              Sold Out
            </Button>
            </div>
          }

        </CardActions>
      </Card>
    </Grid>
  );
}

export default EventCard;
