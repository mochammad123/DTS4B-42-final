import React, { useEffect, useState } from "react";
import "./navbar.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import UserLog from "./UserLog";
import { useGetSearchNewsQuery } from "../../../services/newsApi";
import UserLogMobile from "./UserLogMobile";

const drawerWidth = 240;

function Navbar(props) {
  const { win } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    console.log(data);
  };

  const { data } = useGetSearchNewsQuery({
    keyword: term,
    single: true,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ margin: "20px 0px" }}>
        News Portal
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <NavLink to="/">
                <Typography
                  variant="subtitle1"
                  onClick={handleDrawerToggle}
                  sx={{ color: "black" }}
                >
                  Home
                </Typography>
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <UserLogMobile />
      </List>
    </Box>
  );

  const container =
    win !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          background: "#FDFDFD",
          height: "80px",
          color: "white",
        }}
      >
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: "black",
              mr: 2,
              display: { md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            <Grid container direction="row" spacing={0}>
              <Grid item>
                <NavLink to="/">
                  {" "}
                  <h1
                    style={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "16px",
                      background: "#121221",
                      padding: "8px",
                      borderRadius: "4px",
                      color: "#F8F8F8",
                    }}
                  >
                    News
                  </h1>
                </NavLink>{" "}
              </Grid>
              <Grid item>
                <NavLink to="/">
                  <h1
                    style={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "16px",
                      padding: "8px",
                      color: "#121221",
                    }}
                  >
                    Portal
                  </h1>
                </NavLink>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container direction="row" spacing={0}>
              <Grid item>
                <Box
                  sx={{
                    display: { xs: "block", sm: "block", md: "block" },
                  }}
                >
                  <form onSubmit={submitHandler}>
                    <Paper
                      elevation={3}
                      sx={{ background: "black", height: "37px" }}
                    >
                      <IconButton
                        type="button"
                        sx={{ color: "white" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1, color: "white" }}
                        size="small"
                        placeholder="Search ..."
                        inputProps={{ "aria-label": "Search ..." }}
                        onChange={(e) => setTerm(e.target.value)}
                      />
                    </Paper>
                  </form>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  <UserLog />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win: PropTypes.func,
};

export default Navbar;
