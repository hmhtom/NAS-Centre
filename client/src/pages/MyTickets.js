import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

export default function MyTickets() {
  // Mocking Data, use tickets under user for real data
  function createData(id, eventDate, eventName, shipTo, seat) {
    return { id, eventDate, eventName, purchaseDate: shipTo, seat };
  }
  const rows = [
    createData(
      0,
      "16 Mar, 2019",
      "Toronto Raptors vs. Cleveland Cavaliers",
      "16 Mar, 2019",
      "5A"
    ),
    createData(
      1,
      "16 Mar, 2019",
      "Toronto Maple Leafs vs. San Jose Sharks",
      "16 Mar, 2019",
      "3B"
    ),
    createData(2, "16 Mar, 2019", "Arcade Fire", "16 Mar, 2019", "15C"),
    createData(
      3,
      "16 Mar, 2019",
      "Toronto Raptors vs. Orlando Magic",
      "16 Mar, 2019",
      "6U"
    ),
    createData(
      4,
      "15 Mar, 2019",
      "Mariah Carey: Merry Christmas To All!",
      "16 Mar, 2019",
      "5S"
    ),
  ];

  return (
    <Grid mt={3} container sx={{ justifyContent: "space-around" }}>
      <Paper
        sx={{
          p: 2,
        }}>
        <Grid item xs={12}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            My Tickets
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event Date</TableCell>
                <TableCell>Event Name</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Seat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.eventDate}</TableCell>
                  <TableCell>{row.eventName}</TableCell>
                  <TableCell>{row.purchaseDate}</TableCell>
                  <TableCell>{row.seat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </Grid>
  );
}
