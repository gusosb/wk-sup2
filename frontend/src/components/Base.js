import '../Styles.css'
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { Outlet } from 'react-router-dom'
import Logo1 from '../images/wk-brand.svg'
import Logo2 from '../images/wksmall.png'
import useWindowSize from '../hooks/hooks'






const Base = () => {

    const psw = sessionStorage.getItem('psw')
    const pass = 'wk'

    const size = useWindowSize()


    useEffect(() => {
        // if (psw !== pass) {
        // sessionStorage.setItem('psw', prompt("Lösenord?"))
        // window.location.reload()
        // }


    
    }, [psw])



    const MainApp = () => (

    
        
        <>        

      
        </>
    )
    
  return (
    <>
        <Grid container direction="row" columns={13}>
            <Grid item xs={2}>
                
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 3, position: 'sticky', display: 'flex', top: '40px' }}>
                    {size.width > 1290 ?
                    <img className='mxwidth2 ee' src={Logo1} alt='' />
                    : <img className='mxwidth2 ee ii2' src={Logo2} alt='' />
                    }
                </Grid>
                
            </Grid>
            <Divider orientation="vertical" flexItem variant="middle" />
            
            

            
            <Grid item xs>
             <Outlet  />
            </Grid>
            



        </Grid>
    </>
  )
}

export default Base