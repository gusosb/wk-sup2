import '../Styles.css'
import React, { useState } from 'react'
import _ from 'lodash'
import { styled } from '@mui/material/styles'
import useScrollSpy from '../hooks/useScrollSpy'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import Fab from '@mui/material/Fab'
import Stepper from '@mui/material/Stepper'
import StepContent from '@mui/material/StepContent'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import StepLabel from '@mui/material/StepLabel'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import FolderIcon from '@mui/icons-material/Folder'
import CloseIcon from '@mui/icons-material/Close'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from "react-router-dom"

import importcob from '../images/importcob.png'
import importcob2 from '../images/importcob2.png'
import importtax from '../images/importtax.png'
import importtax3 from '../images/importtax3.png'
import setupexe from '../images/setup.png'
import activatelicense from '../images/activatelicense.png'
import ftgform from '../images/ftgform.png'


const items = [
    { hash: "step-1", label: "Övergång till Capego" },
    { hash: "step-2", label: "Importera klienter från Skatt", substeps: [{ hash: "sub-1", label: "Importera fil" }, { hash: "sub-2", label: "Välj företagsform" }, { hash: "sub-3", label: "Vad följer med?" }, ]},
]
const substeps = items.flatMap(e => e.substeps ? e.substeps : [])

const importlist = [
  { label: "Personuppgifter (benämns Funktionärer i Capego)"},
  { label: "Anläggningsregister"},
  { label: "Bokslutsbilagor"},
  { label: "Kontokoppling till raderna i årsredovisningen. Har du flyttat och/eller delat konton i årsredovisningen följer det med vid importen. Du ser det direkt i bokslutsvyn där du arbetar när du upprättar bokslutet."},
  { label: "Texter du har skrivit i förvaltningsberättelsen och övriga delar i årsredovisningen."},
]
const importlist2 = [
  { label: "Kontrollfrågorna och anteckningarna följer inte med. Kontrollfrågepaketet är nytt i Capego Bokslut. Någon överföring från det som finns i Bokslut vad gäller noteringar till kontrollfrågor samt anteckningar på huvudspecifikationen är därför inte möjlig."},
  { label: "Om du har arbetat både med Bokslut och Koncern och importerar en moderbolagsfil, där det finns koncernredovisning upprättad i koncernprogrammet, importeras alla koncerndelar i årsredovisningen. När du startar Koncern i Capego Bokslut får du lägga upp koncernen på nytt tillsvidare."},
]


const AscendBkContent = () => {

  document.title = "Wolters Kluwer - Övergång från Skatt till Capego"


     

    const active = useScrollSpy({ items })
    const activeIndex = active ? _.findIndex(items, ["hash", active]) : 0

    
    const activeSub = useScrollSpy({ items: substeps })
    const navigate = useNavigate()



    


    const scroll = (hash) => {
      const divElement = document.getElementById(hash)
      divElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const HtmlTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
    }));


    
  return (
    <>
      <Grid container sx={{ p: 10, pt: 0, height: '100%' }}>
      <Grid item xs sx={{ mr: 10 }}>
      
                  
      <div id="step-1">

      <Typography sx={{ pt: 5, fontWeight: 'light' }} variant="h2">
      Övergång till Capego
      </Typography>
      <Typography variant="h4" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      från Skatt
      </Typography>

      <br />
      Roligt att du ska börja använda Capego!
      Här kommer en övergripande guide över hur du smidigast går över från Skatt till Capego.
      <br />
      Det första du behöver göra är att ladda ner och installera 
      <IconButton size="small" onClick={() => window.open('https://prod-api.wolterskluwercloud.se/prod/CapegoClient/64bit-client/setup.exe')} variant="text">
          <Typography sx={{ color: '#007AC3', mb: '1px' }}>
          Capego.
            </Typography>
        </IconButton>{" "}
      <HtmlTooltip
        title={
          <React.Fragment>
            {/* <Typography color="inherit">Tooltip with HTML</Typography> */}
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
            {"För detaljerade installationsinstruktioner se vår "}<a target="_blank" rel="noreferrer" href='https://guide.wolterskluwer.se/kom-igang-capego/'>kom-igång-guide</a>{"."}
          </React.Fragment>
        }
      >
        <HelpOutlineIcon sx={{ height: '18px', color: '#939393' }} />
      </HtmlTooltip>

      <br />
      <br />
      Öppna eller kör filen setup.exe och följ sedan installationen.
      
      <Grid container sx={{ pt: 3 }}>
        
        <img src={setupexe} className='mxwidth2 ee' alt='' />
      </Grid>


      Navigera till fliken Administration och öppna Licens-fliken, där behöver du aktivera licensen.

      <Grid container sx={{ pt: 3 }}>
        
        <img src={activatelicense} className='mxwidth2 ee' alt='' />
      </Grid>

      <br />
     
    
      </div>

        <div id="step-2">
      <Typography variant="h4" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Importera klienter från Skatt
      </Typography>
      


      <br />
      <div id="sub-1">
      
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Importera fil
      </Typography>
      
      <br />
      
      
      Klicka på det gröna plus tecknet i Capego för att starta importen.
      
      <br />
        Det går endast att importera filer från beskattningsår 2021 och senare, filer med ändelsen .t21 och t.22.
        
        

        
        <Grid container sx={{ pt: 2 }}>
        <img src={importtax} className='mxwidth2 ee' alt='' />
       </Grid>

       <br />
       Välj deklarationsfilen som du vill importera.

       <Grid container sx={{ pt: 2 }}>
        <img src={importtax3} className='mxwidth2 ee' alt='' />
       </Grid>



       När du öppnar filen startar importen, finns det ingen klient i Capego sedan tidigare så skapas klienten.


      <br />
      <br />
      <br />
      <div id="sub-2">
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Välj företagsform
      </Typography>
      <br />
      Om du importerar något annat än en privatperson (huvudblankett 1) så måste du välja vilken företagsform som deklarationen avser.

    <Grid container sx={{ pt: 2 }}>
    <img src={ftgform} className='mxwidth2 ee' alt='' />
    </Grid>


      </div>

      <br />
      

      

      <div id="sub-3" style={{ minHeight: '100vh' }}>
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Vad följer med?
      </Typography>

      

      </div>


      <br />
      <br />



      </div>

      <br />
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Fördjupad information och manualer
      </Typography>

      
      <br />

      <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.open("https://support.wolterskluwer.se/support-landning-sida/support-capego/")}>
      Manualer och support för Capego
      </IconButton>
      <br />
      <br />
       
      <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-licenshanterare/")}>
      Licenssystemet i Capego och hur du tilldelar licenser
      </IconButton>
      <br />
      <br />
      
      <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-bjud-ny-handlaggare/")}>
      Lägga till användare och gäster
      </IconButton>


      <br />
      <br />

      <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.open("https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-importera-klientfil-fran-skatt/")}>
      Detaljerad manual för import från Skatt
      </IconButton>
      </div>

                
      </Grid>
          <Grid item xs="auto">
              <Stepper activeStep={activeIndex} orientation="vertical" className="stick-ontop"
              sx={{ pt: 3,
              '& .MuiStepIcon-root.Mui-active': { color: "primary" },
              '& .MuiStepIcon-root.Mui-completed': { color: "primary" } }}>
              {items.map((step, i) => (
                    <Step key={step.label}>
                    <IconButton size='small' onClick={() => scroll(step.hash)} disableRipple>
                    <StepLabel>
                    {step.label}
                    </StepLabel>
                    </IconButton>
                    {step.substeps &&
                    <StepContent TransitionProps={{in: true}}>
                    {step.substeps.map((e, i, arr) => (
                      <>
                      <IconButton sx={{ color: e.hash === activeSub && '#007AC3' }}  size='small' onClick={() => scroll(e.hash)} disableRipple>
                        {e.label}
                        </IconButton>
                      {!((i + 1) === arr.length) && <br />}
                      </>
                    ))}
                    </StepContent>
                    }
                    </Step>
                  )
            )}
            </Stepper>

            <Fab
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(5),
              right: (theme) => theme.spacing(5)
            }}
            color="secondary"
            onClick={() => navigate("../overgang-faq")}
          >
            <QuestionMarkIcon color="primary"  />
          </Fab>


          </Grid>
      </Grid>
    </>
  )
}

export default AscendBkContent