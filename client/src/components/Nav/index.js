import React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            {/* Input icon here */}
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Nas-Centre
          </Typography>
          <Button href="/login" color="inherit" startIcon={<LoginIcon />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
