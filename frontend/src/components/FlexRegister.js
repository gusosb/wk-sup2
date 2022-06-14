import { useMutation } from '@apollo/client'
import { REGISTER } from '../queries'
import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import wksmall from '../images/wksmall.png'

const FlexRegister = ({ setToken, notify, errorMessage }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const [ register, result ] = useMutation(REGISTER, {
        onError: (error) => {
            if (error.graphQLErrors[0].message === "Validation error") {
                notify("Email is already associated with an account.")
            }
        }
    })


    useEffect(() => {
        if (result.data) {
          const token = result.data.createUser.value
          setToken(token)
          localStorage.setItem('wkflextoken', token)
          navigate('/')
        }
    }, [result.data]) // eslint-disable-line


    const submit = async (event) => {
        event.preventDefault()
        register({ variables: { email, password } })
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
            wkFlex Register Account
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
            <TextField
              margin="normal"
              required
              fullWidth
              error={((password2 !== '') && password !== password2) ? true : false}
              name="password2"
              label="Confirm Password"
              helperText={((password2 !== '') && password !== password2) ? 'Passwords do not match.' : ''}
              type="password"
              id="password2"
              autoComplete="current-password"
              value={password2}
              onChange={({ target }) => setPassword2(target.value)}
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
              Register Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item  sx={{ ml: 5 }}>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
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

export default FlexRegister