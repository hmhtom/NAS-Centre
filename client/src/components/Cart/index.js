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
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../utils/theaterSlice";
import { useMutation } from "@apollo/client";
import { ADD_TICKET } from "../../utils/mutations";

export default function Cart() {
  const cart = useSelector((state) => state.theater.cart);
  const dispatch = useDispatch();

  const [addTicket] = useMutation(ADD_TICKET);

  const handleCheckout = async () => {
    cart.map(async (ticket) => {
      try {
        await addTicket({
          variables: {
            seatNumber: ticket.seatNumber,
            event: ticket.event._id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
    dispatch({
      type: emptyCart,
    });
  };

  const total = () => {
    let total = 0;
    if (cart.length) {
      cart.map((item) => (total += item.event.price));
      return total;
    }
  };

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
      {cart?.length ? (
        <>
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
                {cart.map((item) => (
                  <CartItem
                    eventName={item.event.eventName}
                    price={item.event.price}
                    tempId={item.tempId}
                    seatNumber={item.seatNumber}
                  />
                ))}
              </TableBody>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  {/* Insert Total Price Here */}
                  {total()}
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <Button
            onClick={handleCheckout}
            variant="contained"
            sx={{ alignSelf: "flex-end", justifySelf: "flex-end" }}>
            Check Out
          </Button>
        </>
      ) : (
        <Typography variant="h6" component="h4" m={3}>
          Your shopping cart is empty.
        </Typography>
      )}
    </Box>
  );
}
