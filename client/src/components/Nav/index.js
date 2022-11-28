import React, { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

import Drawer from "@mui/material/Drawer";

import Cart from "../Cart";

function Nav() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  //Open Dashboard Menu
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCartClick = () => {
    setMenuAnchor(null);
    setCartOpen(true);
  };

  const handleLogoutClick = () => {
    setMenuAnchor(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}>
            {/* Input icon here */}
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Nas-Centre
          </Typography>
          {/* Render when not logged in */}
          <Button href="/login" color="inherit" startIcon={<LoginIcon />}>
            Login
          </Button>
          {/* Render when logged in */}
          <Button
            color="inherit"
            endIcon={<Avatar>N</Avatar>}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => {
              setMenuAnchor(null);
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            <MenuItem component={ListItemButton} href="/profile">
              Profile
            </MenuItem>
            <MenuItem component={ListItemButton} href="/tickets">
              MyTickets
            </MenuItem>
            <MenuItem onClick={handleCartClick}>Shopping Cart</MenuItem>
            <MenuItem onClick={handleLogoutClick}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => {
              setCartOpen(false);
            }}>
            <Cart />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
