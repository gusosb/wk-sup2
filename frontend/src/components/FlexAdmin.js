import { useQuery } from '@apollo/client'
import { GET_USER } from '../queries'
import { useEffect } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CheckIcon from '@mui/icons-material/Check'
import wksmall from '../images/wksmall.png'

const FlexAdmin = ({ logout, token }) => {

    const result = useQuery(GET_USER)


    const navigate = useNavigate()

    


    
    useEffect(() => {
        if (result.data?.getUser.User !== undefined && !result.data?.getUser.User.isAdmin) {
            navigate('../')
        }

        if (!token) {
          navigate('../')
        }



    }, [result.data, token, navigate])


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
            wkFlex Admin
          </Typography>

          <br />
          Logged in as {result.data?.getUser.User.email}
          <br />
          <br />

          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>

          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : notactiveStyle
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/"
            style={({ isActive }) =>
              isActive ? activeStyle : notactiveStyle
            }
          >
            Admin
          </NavLink>

          </Box>
          

          <br />

          <TableContainer sx={{ minWidth: 500 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Flex</TableCell>
            <TableCell align="right">Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.data?.getUser.Users?.map((row) => {
          return (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell sx={{ color: Math.sign(parseInt(row.flex)) === -1 ? '#E5202E' : '#85BC20' }} align="right">
                {row.flex ? row.flex : 0}
                </TableCell>
              <TableCell align="right">{row.isAdmin ? <CheckIcon color='primary' /> : '-'}</TableCell>
            </TableRow>
          )}
          )}
        </TableBody>
      </Table>
      </TableContainer>


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

export default FlexAdmin