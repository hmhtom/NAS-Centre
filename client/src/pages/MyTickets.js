import React from "react";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { QUERY_USER } from "../utils/queries";

export default function MyTickets() {
  const [user, setUser] = useState(null);

  const { loading, data, refetch } = useQuery(QUERY_USER);

  useEffect(() => {
    refetch();
    if (data) {
      console.log(data.user);
      setUser(data.user);
    }
  }, [data, loading]);

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
              {user?.tickets?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.event.date}</TableCell>
                  <TableCell>{row.event.eventName}</TableCell>
                  <TableCell>{row.purchaseDate}</TableCell>
                  <TableCell>{row.seatNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </Grid>
  );
}
