import '../Styles.css'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import useWindowSize from "../hooks/hooks"

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { StepButton } from '@mui/material'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import FAQGetStarted from './FAQGetStarted'
import FAQAssignLicense from './FAQAssignLicense'
import FAQCreateClient from './FAQCreateClient'
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'

import React from 'react'

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'

import Logo1 from '../images/wk-brand.svg'
import Install2 from '../images/Capture2.PNG'
import Install1 from '../images/Capture1.PNG'
import Install3 from '../images/Capture3.PNG'
import Cstart from '../images/Skärmbild 2022-01-26 132202.jpg'
import wkPR from '../images/wolterskluwer2.jpg'
import LicImg from '../images/Skärmbild 2022-04-01 120506.jpg'
import BOKICO from '../images/bok.ico'
import SKAICO from '../images/Captureska.PNG'

const GetStarted = () => {


  const size = useWindowSize()


  const [activeStep, setActiveStep] = useState(0)
  const [activeStep1, setActiveStep1] = useState(0)

  const [iconvisible, setIconvisible] = useState(false)


  
  useEffect(() => {

      if ((activeStep1) === 2 && (activeStep === 0)) {
        setIconvisible(true)
      } else {
        setIconvisible(false)
      }
  }, [activeStep1, activeStep])
    
  
    const handleNext = () => {
      const newActiveStep = activeStep + 1
      setActiveStep(newActiveStep)
    }
  
    const handleBack = () => {
      setActiveStep(activeStep - 1)
    }
  
    const handleStep = (step) => () => {
      setActiveStep(step)
    }
  
  
  
    const steps = ['Installera Capego', 'Tilldela licensen', 'Skapa klient']
  
    const StepCapegoInstall = () => {
  
      //const [activeStep1, setActiveStep1] = useState(0)
  
      const handleStep1 = (step) => () => {
        setActiveStep1(step)
      }
  
      const Step1steps = ['Ladda ner setup.exe', 'Följ installationen', 'Logga in i Capego']
  
      const StepSetupexe = () => {
        return (
        <>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ color: '#007AC3' }} variant="h3" gutterBottom>
          Välkommen som användare i Capego!
  
  
          </Typography>
        </Grid>

        <Grid container>
          
          <Grid item xs>

          </Grid>

         <Grid item xs='auto'>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5" gutterBottom>
          Börja med att ladda ner setup.exe genom att
        <IconButton onClick={() => window.open('https://prod-api.wolterskluwercloud.se/prod/CapegoClient/64bit-client/setup.exe')} variant="text">
          <Typography variant="h5" sx={{ textTransform: 'lowercase', color: '#007AC3', mb: '1px' }}>
          klicka här.
            </Typography>
        </IconButton>
        <br /> Öppna eller kör filen setup.exe.
          </Typography>
        </Grid>
  
        <Grid container sx={{ display: 'flex', justifyContent: 'center', maxHeight: 500  }}>
        <img src={wkPR} alt='' className='mxwidth2 ee' />
        </Grid>
        </Grid>

        <Grid item xs>
        <Box sx={{ mr: 3, ml: size.width < 1601 ? 5 : 25 }}>
            <FAQGetStarted />
        </Box>
            
        </Grid>

 


        </Grid>
        </>
        )
      }
      const StepFollowInstall = () => {
        return (
        <>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ color: '#007AC3' }} variant="h3" gutterBottom>
          Följ installationsanvisningarna
          </Typography>
        </Grid>
  
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Acceptera installationen och klicka på Install. 
          </Typography>
        </Grid>

          
          <Grid container sx={{ mb: 2 }}>

          <Grid item xs>
          
          </Grid>

                <Grid item xs='auto'>

                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h7" gutterBottom>
           Det kan även stå 'Repair'.
          </Typography>
          </Grid>

                <Grid container sx={{ display: 'flex', justifyContent: 'center', maxWidth: 1000 }}>
                  <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs='auto'>
                <img src={Install1} alt='' />
                </Grid>

                <Grid item xs='auto'>
                <img src={Install2} alt='' />
                </Grid>
                </Grid>

                <Grid item xs='auto'>

                  
                  <img src={Install3} alt='' className='mxwdd'/>
                  
               
                </Grid>
                </Grid>
                </Grid>

        <Grid item xs>
        <Box sx={{ mr: 3, ml: size.width < 1601 ? 5 : 15 }}>
            <FAQGetStarted />
        </Box>
        </Grid>

        </Grid>
  
        </>
          
        )
      }
      const StepCapegoLogIn = () => {

 
        return (
        <>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ color: '#007AC3' }} variant="h3" gutterBottom>
          Logga in i Capego
          </Typography>
        </Grid>
  
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Capego öppnas när installationen är klar, logga in med din epostadress och ditt lösenord.
          </Typography>
        </Grid>

        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h7" gutterBottom>
            Lösenordet skapar du genom aktiveringslänken som du fått skickad till din epostadress.
          </Typography>
        </Grid>

        <Grid container>

          <Grid item xs>
        

          </Grid>

        
          <Grid item xs='auto'>
              <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 800 }}>
              <img src={Cstart} alt='' className='mxwidth2 ee' />
              </Grid>
          </Grid>

          <Grid item xs>
            <Box sx={{ mr: 3, ml: size.width < 1601 ? 5 : 25 }}>
            <FAQGetStarted />
            </Box>

          </Grid>
        </Grid>
  
  
        </>
        )
      }
      return (
        <>
  
        {activeStep1 === 0 && <StepSetupexe />}
        {activeStep1 === 1 && <StepFollowInstall />}
        {activeStep1 === 2 && <StepCapegoLogIn />}
  
        <Box sx={{ width: '100%' }}>
          <Grid container>

        <Grid item xs={2}>

        </Grid>
          
          <Grid item xs sx={{ p: 2, border: 1, borderColor: '#007AC3', borderRadius: 5 }}>
          <Stepper nonLinear activeStep={activeStep1} alternativeLabel>
          {Step1steps.map((label, index) => (
            <Step key={label}>
                <StepButton color="inherit" onClick={handleStep1(index)}>
                {label}
              </StepButton>
              
            </Step>
          ))}
        </Stepper>

          </Grid>

          <Grid item xs={2}>

          </Grid>


        </Grid>
      </Box>
  
        </>
      )
    }
  
    const StepAssignLicense = () => {
      return (
        <>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}>

          
        <Typography sx={{ color: '#007AC3' }} variant="h3" gutterBottom>
          Aktivera licensen
          </Typography>
        </Grid> 

        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" gutterBottom>
          För att kunna arbeta i programmet behöver du aktivera en licens under Administrations-fliken.
          </Typography>
        </Grid> 

        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" gutterBottom>
        Mer information om licenssystemet hittar du i manualen
        
        <IconButton onClick={() => window.open('https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-licenshanterare/')} variant="text">
          <Typography variant="h5" sx={{ textTransform: 'lowercase', color: '#007AC3', mb: '3px' }}>
          här.
            </Typography>
        </IconButton>
          </Typography>
        </Grid> 

        

       



        

        <Grid container>

        <Grid item xs>
         
        </Grid>

        <Grid item xs='auto' sx={{ mt: 2 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', maxWidth: 900 }}>
        <img src={LicImg} alt='' className='mxwidth2 ee' />
        </Grid>
            
            
           
        </Grid>


        <Grid item xs>

        <Box sx={{ mr: 3, ml: size.width < 1601 ? 5 : 25 }}>
            <FAQAssignLicense />
        </Box>
          
        </Grid>


        </Grid>
        </>
      )
    }
  
  
  
    const StepClientCreationSelect = () => {
      return (
        <>
          <Grid container sx={{ display: 'flex', justifyContent: 'center', pb: 10 }}>

          <Typography sx={{ color: '#007AC3' }} variant="h3" gutterBottom>
          Manualer och support
          </Typography>
        </Grid>


        <Grid container>

          <Grid item xs>

          </Grid>

          <Grid item xs='auto'>

          <Grid container sx={{ display: 'flex', justifyContent: 'center', pb: 10, flexDirection: 'column' }}>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}>
              <Typography variant="h5" gutterBottom>
              Du hittar manualer och hjälp på vår {' '}
              <IconButton variant="small" sx={{ minHeight: 0, minWidth: 0, padding: 0, pb: '2.45px' }} size="small" onClick={() => window.open('https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-arbetsgang/')}>
              <Typography variant="h5" sx={{ textTransform: 'lowercase', color: '#007AC3' }}>
              supportsida.
                </Typography>
              </IconButton>
              </Typography>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', pb: 10 }}>
            <Typography variant="h5">
              {' '}Behöver du hjälp kan du maila in till {' '}

              <IconButton variant="small" sx={{ minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.location.href = "mailto:support@wolterskluwer.se?subject=Supportärende Capego&body="}>
              <Typography variant="h5" sx={{ textTransform: 'lowercase', color: '#007AC3' }}>
              supporten
                </Typography>
                </IconButton>

              .{' '}Nedan finns länkar till manualer för att skapa en ny klient.
              </Typography>
            </Grid>




            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-skapa-ny-klient-manuellt/")}>
              <Paper variant="outlined" sx={{ borderColor: '#007AC3' }}>
                <Box sx={{ m: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ pr: 1, display: 'flex', alignItems: 'center' }}>
                      <CreateOutlinedIcon />
                    </Box>
                    Skapa ny klient manuellt
                </Box>
              </Paper>
            </IconButton>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-importera-klient-fran-bokslut/")}>
              <Paper variant="outlined" sx={{ borderColor: '#007AC3' }}>
                <Box sx={{ m: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ pr: 1, display: 'flex', alignItems: 'center' }}>
                      <img src={BOKICO} alt='' className='mwi' />
                    </Box>
                    Importera klient från Bokslut
                </Box>
              </Paper>
            </IconButton>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-importera-klientfil-fran-skatt/")}>
              <Paper variant="outlined" sx={{ borderColor: '#007AC3' }}>
                <Box sx={{ m: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ pr: 1, display: 'flex', alignItems: 'center' }}>
                      <img src={SKAICO} alt='' className='mwi' />
                    </Box>
                    Importera klient från Skatt
                </Box>
              </Paper>
            </IconButton>
            </Box>

            




            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-importera-klient-fran-kapell/")}>
              <Paper variant="outlined" sx={{ borderColor: '#007AC3' }}>
                <Box sx={{ m: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ pr: 1, display: 'flex', alignItems: 'center' }}>
                      <img src={KLIICON} alt='' className='mwi' />
                    </Box>
                    Importera klient från Kapell
                </Box>
              </Paper>
            </IconButton>
            </Box> */}


            </Grid>

          </Grid>

          <Grid item xs sx={{ display: 'flex', flexDirection: 'row-reverse' }}>

          <Box sx={{ mr: 3, ml: size.width < 1601 ? 5 : 15, maxWidth: 550 }}>

            <FAQCreateClient />
            
          </Box>

          </Grid>


        </Grid>
  
         
  
  
  
  
        </>
      )
    }
  
    const MainApp = () => {
      return (
        <div className='page'>
        <CssBaseline />
  
        <header className='headerpadding'>
          <img src={Logo1} alt='' />
        </header>
  
  
        <Grid container>
  
        {activeStep === 0 && <StepCapegoInstall />}
        {activeStep === 1 && <StepAssignLicense />}
        {activeStep === 2 && <StepClientCreationSelect />}
  
  
  
  
  
  
  
  
        </Grid>
  
  
  
  
  
      <Box
          className="footer"
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
        >
       
        
          <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
  
  
  
          <Box sx={{ width: '100%' }}>


              <Grid container>

             
              <Grid item xs>
              Steg {activeStep + 1}
              </Grid>
          
              <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
               
              <Fade in={iconvisible}
              timeout={500}
              ><ArrowDownwardOutlinedIcon sx={{ color: 'red' }} className='abs' /></Fade>
            

              </Grid>
              <Grid item xs>

              </Grid>
              </Grid>
           
              
              
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Bakåt
                </Button>


                <Box sx={{ flex: 1 }}>
                <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
                
              </StepButton>
            </Step>
          ))}
        </Stepper>

                </Box>



                
                <Button onClick={handleNext} disabled={activeStep > 1 ? true : false} sx={{ mr: 1 }}>
                  Nästa
                </Button>
       
              </Box>
      </Box>
  
  
    
  
         
          
  
          </Grid>
          
  
        </Box>
  
  
        
      </div>
  
      )
    }


  return (
    <>
    <MainApp />
    </>
  )
}

export default GetStarted