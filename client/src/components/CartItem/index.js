import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeTicket } from "../../utils/theaterSlice";

export default function CartItem({ eventName, price, tempId, seatNumber }) {
  const dispatch = useDispatch();

  return (
    <TableRow
      key="1"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {/* Insert Event Name Here */}
        {eventName}
      </TableCell>
      <TableCell component="th" align="right">
        {/* Insert Seat Here */}
        {seatNumber}
      </TableCell>
      <TableCell align="right">
        {/* Insert Price */}
        {price}
      </TableCell>
      <TableCell align="right">
        {/* Insert Price */}
        <Button
          onClick={() => {
            dispatch({
              type: removeTicket,
              tempId: tempId,
            });
          }}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
