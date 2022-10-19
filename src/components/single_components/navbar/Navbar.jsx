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
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const drawerWidth = 240;

function Navbar(props) {
  const { win } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.75),
    },
    marginLeft: 0,
    height: "95%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        News Portal
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{}}>
            <ListItemText>
              <NavLink to="/">
                <Typography variant="subtitle1" onClick={handleDrawerToggle}>
                  Home
                </Typography>
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
                    background: "#ff5800",
                    "&:hover": {
                      background: "red",
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
        <Toolbar sx={{ margin: "10px 20px 0px 20px" }}>
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
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <Grid container direction="row" spacing={0}>
              <Grid item>
                <NavLink to="/">
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
                  </NavLink>
                </NavLink>{" "}
              </Grid>
              <Grid item>
                <NavLink to="/">
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
                </NavLink>{" "}
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    background: "black",
                    "&:hover": { background: "#444444" },
                  }}
                >
                  Masuk
                </Button>
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
