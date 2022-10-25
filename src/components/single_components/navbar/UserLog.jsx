import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import useUserStore, { selectOnLogout } from "../../../app/user";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onLogout = useUserStore(selectOnLogout);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return user ? (
    <>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{
          background: "black",
          marginLeft: "20px",
          "&:hover": { background: "#444444" },
        }}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  ) : (
    <NavLink to="/login">
      <Button
        variant="contained"
        sx={{
          background: "black",
          marginLeft: "20px",
          "&:hover": { background: "#444444" },
        }}
      >
        Masuk
      </Button>
    </NavLink>
  );
};

export default UserLog;
