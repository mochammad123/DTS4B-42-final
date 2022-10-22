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
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  const paperStyle = {padding:20, height:"70vh",width: "400px", margin : "20px auto"}
  const AvatarStyle = {backgroundColor : "#1976d2"}
    return (
      <div style={{ padding: 30 }}>
        <Paper elevation ={10} style={paperStyle}>
            <Grid align ="center" style={{margin : "20px auto"}}>
            <Avatar style={AvatarStyle}><LoginIcon/></Avatar>
            <h2>Sign in</h2>
            </Grid>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField label="Username" fullWidth placeholder="Enter Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" fullWidth placeholder="Enter Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={'Keep me logged in'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Button style={{margin:"8px 0"}} fullWidth variant="contained">Login</Button>
            <Typography > Do you have an account?
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
      </div>
    );
  };
  
  export default LoginPage;