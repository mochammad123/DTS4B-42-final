import React from "react";
import {Box,Container,Grid} from "@mui/material";
import {
    Checkbox,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    Avatar,
    Typography
  } from"@mui/material";
  import LoginIcon from '@mui/icons-material/Login';
  import {Link} from "react-router-dom";


const LoginPage = () => {
 
  const paperStyle = {padding:20, height:"70vh",width: "400px", margin : "20px auto"}
  const AvatarStyle = {backgroundColor : "#1976d2"}
  const styleGrid = {margin : "20px"}
    return (
      <div style={{ padding: 30 }}>
        <Paper elevation ={10} style={paperStyle}>
            <Grid align ="center" style={{margin : "20px auto"}}>
            <h2>Form Register</h2>
            </Grid>
            <Grid style={styleGrid}  item xs={12}>
                <Grid style={styleGrid}>
                    <Typography variant="p">First Name
                        <TextField variant="standard" fullWidth ></TextField>
                    </Typography>
                </Grid>
                <Grid style={styleGrid}>
                    <Typography variant="p">Last Name
                        <TextField variant="standard" fullWidth></TextField>
                    </Typography>
                </Grid>
                <Grid style={styleGrid}>
                    <Typography variant="p">Birthday
                        <TextField variant="standard" fullWidth type={'date'}></TextField>
                    </Typography>
                </Grid>
                <Grid style={styleGrid}>
                    <Typography variant="label">Email
                        <TextField variant="standard"  fullWidth ></TextField>
                    </Typography>
                </Grid>
                <Grid style={styleGrid}>
                    <Typography variant="p">Password
                        <TextField variant="standard"  fullWidth  type={'password'}></TextField>
                    </Typography>
                </Grid>
            </Grid>
            <Grid style={styleGrid}>
              <Button style={{margin:"8px 0"}} fullWidth variant="contained">Register</Button>
            </Grid>
        </Paper>
      </div>
    );
  };
  
  export default LoginPage;