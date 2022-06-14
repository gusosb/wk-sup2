import { useMutation, useQuery } from '@apollo/client'
import { GET_USER, UPDATE_FLEX } from '../../queries'
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import wksmall from '../../images/wksmall.png'

const FlexHome = ({ logout }) => {

    const [addflex, setAddflex] = useState('')

    const result = useQuery(GET_USER)

    const flex = result.data?.getUser.User.flex ? result?.data.getUser.User.flex : 0



    const [ updateFlex ] = useMutation(UPDATE_FLEX, {
        onError: (error) => {
          console.log(error.graphQLErrors[0].message)
        },
        update: (cache, response) => {
          cache.updateQuery({ query: GET_USER }, ({ getUser }) => {
            return {
              getUser: {
                User: { ...getUser.User, flex: response.data.updateFlex.flex },
                Users: ( getUser.Users ? getUser.Users?.map(e => e.email === getUser.User.email ? { ...e, flex: response.data.updateFlex.flex } : e ) : null )
              }
            }
          }
          )}
      })

      useEffect(() => {
        console.log(result.data)
      
      }, [result.data])
      




    const adjustFlex = async (e) => {
        e.preventDefault()
        const newFlex = parseInt(flex) + parseInt(addflex)
        updateFlex({ variables: { flex: newFlex } })
        setAddflex('')
    }
    


    let activeStyle = {
      textDecoration: "underline",
      color: '#007AC3',
      margin: '5px'
    }

    let notactiveStyle = {
      color: 'black',
      margin: '5px'
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
            wkFlex
          </Typography>

          <br />
          Logged in as {result.data?.getUser.User.email}
          <br />
          <br />
          {result.data?.getUser.User.isAdmin &&
          <>

          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>

          <NavLink
            to="/internal/wkflex/"
            style={({ isActive }) =>
              isActive ? activeStyle : notactiveStyle
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/internal/wkflex/admin/"
            style={({ isActive }) =>
              isActive ? activeStyle : notactiveStyle
            }
          >
            Admin
          </NavLink>

          </Box>

          <br />
          <br />
          </>
          }


          <Typography variant="h6">Flex</Typography> <Typography variant="h5" sx={{ color: Math.sign(flex) === -1 ? '#E5202E' : '#85BC20' }}>{flex} minutes</Typography>

          <br />
          <br />

          <TextField value={addflex} onChange={({target}) => setAddflex(target.value)} sx={{ maxWidth: 150 }} id="outlined-basic" label="Adjust Flex" variant="outlined" />
          <br />
          <br />
          
          <Button onClick={adjustFlex} variant="contained">
          Submit
          </Button>
          <br />
          <br />
          <br />


          <Button onClick={logout} variant="outlined" size="small">
          Logout
        </Button>
          
        </Box>
      </Container>

    </>
  )
}

export default FlexHome