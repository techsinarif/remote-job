import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Login.scss';

const Login = (props: any) => {
  const {
    handleClickOpen,
    handleClose,
    openLogin
  } = props;

  const [isLogin, setIsLogin] = React.useState(true);
  // const [isSignUp, setIsSignUp] = React.useState(false);
  const [signUpAs, setSignUpAs] = React.useState('Employer');

  const handleChange = (event: SelectChangeEvent) => {
    setSignUpAs(event.target.value as string);
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    setIsLogin(false);
  }

  const handleSignIn = (e: any) => {
    e.preventDefault();
    setIsLogin(true);
  }

  return(
    <div className='login'>
      <Tooltip title="Login / Signup" arrow>
        <IconButton 
          size="large"
          edge="end"
          aria-label="Login/Signup"
          aria-haspopup="true"
          onClick={handleClickOpen}
          color="inherit"
        >
          <LoginIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={openLogin} onClose={handleClose}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            {
              isLogin ? (
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              ) : (
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
              )
            }
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {
                isLogin ? null : (
                   <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    autoFocus
                  />
                 )
              }
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {
                  isLogin ? null: (
                    <FormControl fullWidth required sx={{marginTop: '25px'}}>
                      <InputLabel>Sign up as</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={signUpAs}
                        label="Sign up as"
                        onChange={handleChange}
                      >
                        <MenuItem value={'Employer'}>Employer</MenuItem>
                        <MenuItem value={'Candidate'}>Candidate</MenuItem>
                        <MenuItem value={'Others'}>Others</MenuItem>
                      </Select>
                    </FormControl>
                  )
                }
                {
                  isLogin ? (
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                  ) : null
                }
                {
                  isLogin ? (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  )
                }
                
                {
                  isLogin ? (
                    <Grid container sx={{marginBottom: 2}}>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link component="button" variant="body2" onClick={(e) => {handleSignUp(e)}}>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container sx={{marginBottom: 2}}>
                      <Grid item>
                        <Link component="button" variant="body2" onClick={(e) => {handleSignIn(e)}}>
                          {"Already have an account? Sign in"}
                        </Link>
                      </Grid>
                    </Grid>
                  )
                }
            </Box>
          </Box>
        </Container>
      </Dialog>
    </div>
  )
};

export default Login;