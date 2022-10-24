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
  import Swal from 'sweetalert2'
  import LoginIcon from '@mui/icons-material/Login';
  import {Link, Navigate} from "react-router-dom";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import {auth} from '../../../config/firebase'
  import { useNavigate } from 'react-router-dom';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



  
const Register = () => {
    const paperStyle = {padding:20, height:"80vh",width: "400px", margin : "20px auto"}
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            const email =  data.get('email')
            const password = data.get('password')
            const firstname = data.get('firstname')
            const lastname = data.get('password')

            if(email == "" || password == "" ){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Check your field',
                  })       
            }
            else{
                try {
                    const {user} = await createUserWithEmailAndPassword(auth,email,password,firstname,lastname)
                    console.log(user)
                    Swal.fire({
                        icon: 'success',
                        title: 'Yeah',
                        text: 'Success Messages, Please Login',
                      })
                      navigate("/login")
                } catch (error) {
                    alert(error)
                }
            }
    };
    return (
        <Container component="main" maxWidth="xs">
        <Paper elevation ={10} style={paperStyle}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Form Registrasi
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                  <Button  type="submit" style={{margin:"8px 0"}} fullWidth variant="contained">Register</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>

        </Container>
    );
}

  export default Register;