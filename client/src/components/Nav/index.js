import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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

import Auth from "../../utils/auth";

function Nav() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const loggedIn = Auth.loggedIn();
  console.log(loggedIn);

  //Open Dashboard Menu
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCartClick = () => {
    setMenuAnchor(null);
    setCartOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Nas-Centre
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          {loggedIn ? (
            <>
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
                <MenuItem component={(ListItemButton, Link)} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem component={(ListItemButton, Link)} to="/tickets">
                  MyTickets
                </MenuItem>
                <MenuItem onClick={handleCartClick}>Shopping Cart</MenuItem>
                <MenuItem onClick={Auth.logout}>
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
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              color="inherit"
              startIcon={<LoginIcon />}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
