import { useMutation, useQuery } from '@apollo/client'
import { LOGIN } from '../queries'
import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import wksmall from '../images/wksmall.png'





const FlexLogin = ({ setToken, notify, errorMessage }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
          if (error.graphQLErrors[0].message === "wrong credentials") {
            notify("Incorrect credentials.")
          }
        },
      })

    

    const navigate = useNavigate()


    useEffect(() => {
        if (result.data) {
          const token = result.data.login.value
          setToken(token)
          localStorage.setItem('wkflextoken', token)
          navigate('/')
        }
      }, [result.data]) // eslint-disable-line


      const submit = async (event) => {
        event.preventDefault()
        login({ variables: { email, password } })
    }


    
  return (
    <>
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src={wksmall} className="mxwidth2 e2" alt="" />
          
          <Typography component="h1" variant="h5">
            wkFlex Sign In
          </Typography>
          
          <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
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
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{ ml: 5 }}>
                <Link to="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Typography variant="h6" sx={{ color: '#E5202E' }}>
          {errorMessage}
          </Typography>

        
        </Box>
      </Container>
    </>
  )
}

export default FlexLogin