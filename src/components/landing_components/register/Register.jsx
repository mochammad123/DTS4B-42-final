import React from "react";
import { Container, Grid } from "@mui/material";
import { TextField, Paper, Button, Typography } from "@mui/material";

const Register = () => {
  const paperStyle = {
    paddingTop: "20px",
    paddingBottom: "20px",
    height: "100%",
    width: "100%",
    margin: "20px auto",
  };
  const styleGrid = { margin: "20px" };
  return (
    <div>
      <Container maxWidth="xs" sx={{ minHeight: "100%" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" style={{ margin: "20px auto" }}>
            <h2>Form Register</h2>
          </Grid>
          <Grid style={styleGrid} item xs={12}>
            <Grid style={styleGrid}>
              <Typography variant="p">
                First Name
                <TextField variant="standard" fullWidth></TextField>
              </Typography>
            </Grid>
            <Grid style={styleGrid}>
              <Typography variant="p">
                Last Name
                <TextField variant="standard" fullWidth></TextField>
              </Typography>
            </Grid>
            <Grid style={styleGrid}>
              <Typography variant="p">
                Birthday
                <TextField
                  variant="standard"
                  fullWidth
                  type={"date"}
                ></TextField>
              </Typography>
            </Grid>
            <Grid style={styleGrid}>
              <Typography variant="label">
                Email
                <TextField variant="standard" fullWidth></TextField>
              </Typography>
            </Grid>
            <Grid style={styleGrid}>
              <Typography variant="p">
                Password
                <TextField
                  variant="standard"
                  fullWidth
                  type={"password"}
                ></TextField>
              </Typography>
            </Grid>
          </Grid>
          <Grid style={styleGrid}>
            <Button style={{ margin: "8px 0" }} fullWidth variant="contained">
              Register
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
