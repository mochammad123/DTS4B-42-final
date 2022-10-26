import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import useUserStore, { selectOnLogout } from "../../../app/user";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const UserLogMobile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onLogout = useUserStore(selectOnLogout);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return user ? (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>
            <NavLink to="/login">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  background: "black",
                  "&:hover": {
                    background: "#ffffff",
                  },
                }}
              >
                {user.email}
              </Button>
            </NavLink>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>
            <NavLink to="/login">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  background: "black",
                  "&:hover": {
                    background: "#121221",
                  },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </NavLink>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  ) : (
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText>
          <NavLink to="/login">
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "20px",
                textTransform: "capitalize",
                fontWeight: "bold",
                background: "black",
                "&:hover": {
                  background: "#121221",
                },
              }}
              onClick={handleDrawerToggle}
            >
              Masuk
            </Button>
          </NavLink>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default UserLogMobile;
