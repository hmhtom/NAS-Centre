import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function CartItem() {
  return (
    <TableRow
      key="1"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {/* Insert Event Name Here */}
        Whatever Concert
      </TableCell>
      <TableCell component="th" align="right">
        {/* Insert Seat Here */}
        5A
      </TableCell>
      <TableCell align="right">
        {/* Insert Price */}
        189.00
      </TableCell>
    </TableRow>
  );
}
