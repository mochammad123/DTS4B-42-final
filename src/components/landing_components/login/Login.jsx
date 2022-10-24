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
  import {Link, Navigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import {auth} from '../../../config/firebase'



const LoginPage = () => {
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:"70vh",width: "400px", margin : "20px auto"}
    const AvatarStyle = {backgroundColor : "#1976d2"}
    const [checked, setChecked] = React.useState(true);
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email =  data.get('email');
      const password = data.get('password');
      try {
       const {user} =await signInWithEmailAndPassword (auth,email,password);
       Swal.fire({
        icon: 'success',
        title: 'Yeah',
        text: 'Login Success',
      }).then(function (){
        navigate("/")
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error Login",
      })
    }
  };
 
    return (
      <div style={{ padding: 30 }}>
        <Paper component="form" noValidate onSubmit={handleSubmit} elevation ={10} style={paperStyle}>
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
              <TextField  id="email" name="email" label="Email" fullWidth placeholder="Enter Email"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id="password" name="password" label="Password" fullWidth placeholder="Enter Password" type={'password'}></TextField>
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
              <Button type="submit" style={{margin:"8px 0"}} fullWidth variant="contained">Login</Button>
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