import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function EventCard(props) {
  //Map out the Event Cards from props coming in
  return (
    <Grid item xs={9} sm={6} lg={4} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="placeholder" height="140" image="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Title
          </Typography>
          <Typography gutterBottom component="div">
            Event Time
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Buy Ticket</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default EventCard;
