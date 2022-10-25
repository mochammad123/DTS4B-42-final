import React from "react";
import { Container, Grid } from "@mui/material";
import {
  Checkbox,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Yeah",
        text: "Login Success",
      }).then(function () {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error Login",
      });
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const paperStyle = {
    height: "100%",
    width: "100%",
    margin: "20px auto",
    paddingTop: "20px",
    paddingBottom: "20px",
  };
  const AvatarStyle = { backgroundColor: "#1976d2" };
  return (
    <div>
      <Container maxWidth="xs" sx={{ minHeight: "100%" }}>
        <Paper
          component="form"
          noValidate
          onSubmit={handleSubmit}
          elevation={10}
          style={paperStyle}
        >
          <Grid align="center" style={{ margin: "20px auto" }}>
            <Avatar style={AvatarStyle}>
              <LoginIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                placeholder="Enter Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                label="Password"
                fullWidth
                placeholder="Enter Password"
                type={"password"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                style={{ margin: "8px 0" }}
                fullWidth
                variant="contained"
              >
                Login
              </Button>
              <Typography>
                {" "}
                Do you have an account?
                <Link
                  to="/register"
                  component="button"
                  variant="body2"
                  // onClick={() => {
                  //     console.info("I'm a button.");
                  // }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
