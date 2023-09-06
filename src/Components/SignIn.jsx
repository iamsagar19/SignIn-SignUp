import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8082/"

const useStyles = makeStyles(theme => ({
    root: {
      height: "50vh",
      position: 'absolute',
      top: '30%',
      left: '50%',
      /* left: 0; */
      /* right: 0; */
      transform: 'translate(-75%, -25%)',
    },
    paper: {
    //   margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: '24px'
    },
    
  }));

const SignIn = () => {

    const navigate = useNavigate();

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const changeTab = () => {
        console.log("sagar")
        navigate('/Singup')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit",formData)

        axios.post('/auth/signin', formData)
          .then((response) => {
            if(response.data.message === "Authentication successful") {
                alert("User Credentials are correct")
                setFormData({
                    email: '',
                    password: '',
                })
            }
          })
          .catch((error) => {
            alert("User Credentials are wrong")
            setFormData({
                email: '',
                password: '',
            })
          });
    }

    
  return (
    <Grid container component="main" className={classes.root} sx={{padding: '24px'}}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={formData.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={formData.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{margin: '20px 0px'}}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                  <Button onClick={changeTab}>
                  {"Don't have an account? Sign Up"}
                  </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default SignIn
