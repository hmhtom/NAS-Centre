import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CartItem from "../CartItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function Cart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <Typography variant="h4" component="h2" m={3}>
        Shopping Cart
      </Typography>
      <Divider />
      {/* Render when cart empty */}
      <Typography variant="h6" component="h4" m={3}>
        Your shopping cart is empty.
      </Typography>
      {/* Render when there is somthing in cart */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {/* Header Row for Table*/}
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell align="right">Seat</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map out the items here */}
            <CartItem />
          </TableBody>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
              {/* Insert Total Price Here */}
              189.00
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        sx={{ alignSelf: "flex-end", justifySelf: "flex-end" }}>
        Check Out
      </Button>
    </Box>
  );
}
