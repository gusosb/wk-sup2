import '../Styles.css'
import React from 'react'
import _ from 'lodash'
import { styled } from '@mui/material/styles'
import useScrollSpy from '../hooks/useScrollSpy'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import Fab from '@mui/material/Fab'
import importcob from '../images/importcob.png'
import importcob2 from '../images/importcob2.png'
import importtax from '../images/importtax.png'
import importtax3 from '../images/importtax3.png'
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
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from "react-router-dom"



const items = [
    { hash: "step-1", label: "Övergång till Capego" },
    { hash: "step-2", label: "Importera klienter från Bokslut", substeps: [{ hash: "sub-1", label: "Importera fil" }, { hash: "sub-2", label: "Skapa funktionärer" }, { hash: "sub-3", label: "Detta följer med" }, { hash: "sub-4", label: "Detta följer inte med" }]},
    { hash: "step-3", label: "Importera från Skatt"},
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
  { label: "Personuppgifter (benämns Funktionärer i Capego)"},
  { label: "Anläggningsregister"},
  { label: "Bokslutsbilagor"},
  { label: "Kontokoppling till raderna i årsredovisningen. Har du flyttat och/eller delat konton i årsredovisningen följer det med vid importen. Du ser det direkt i bokslutsvyn där du arbetar när du upprättar bokslutet."},
  { label: "Texter du har skrivit i förvaltningsberättelsen och övriga delar i årsredovisningen."},
]



const AscendBkContent = () => {

  document.title = "Wolters Kluwer - Övergång från Bokslut till Capego"

     

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
      
                  
      <div id="step-1" style={{ "minHeight": '100vh' }}>

      <Typography sx={{ pt: 5, fontWeight: 'light' }} variant="h2">
      Övergång till Capego
      </Typography>
      <Typography variant="h4" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      från Bokslut och Skatt Företag
      </Typography>

      <br />
      Roligt att du ska börja använda Capego!
      Här kommer en övergripande guide för hur du smidigast går över från Bokslut Företag till Capego Bokslut.
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



      </div>

        <div id="step-2">
      <div id="sub-1" style={{ "minHeight": '110vh' }}>
      <Typography variant="h4" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Importera klienter från Bokslut
      </Typography>
      <br />
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Importera fil
      </Typography>
      
      Hitta dina Bokslutsfiler i datorn, om du är osäker på var de finns så kan du öppna ett bokslut och välja Arkiv, Spara som för att komma till mappen där bokslutet är sparat.
      <br />
      

      För att importera bokslutet till Capego väljer du det gröna plus tecknet och sedan valet Importera från Bokslut.
      <br />
      <br />
      
      <Grid container >
        <img src={importcob} className='mxwidth2 ee' alt='' />
      </Grid>
      <br />

      Välj bokslutsfilen för att starta importen.
      <HtmlTooltip
        title={
          <React.Fragment>
            {"Vill du importera historiska år måste du importera en fil i taget, börja med det äldsta året och importera i kronologisk ordning. Välj 'Ja' när programmet frågar om du vill skriva över klienten, de år som du redan importerat ligger kvar."}
          </React.Fragment>
        }
      >
        <HelpOutlineIcon sx={{ height: '18px', color: '#939393' }} />
      </HtmlTooltip>
      <br />
      <br />
      <div id="sub-2">
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Skapa funktionärer
      </Typography>
      Har du lagt in personuppgifter i Bokslut så får du upp alterantivet att skapa funktionärer i Capego genom att klicka på plus tecknet.
      

      <br />
      <br />
      <Grid container >
        <img src={importcob2} className='mxwidth2 ee' alt='' />
      </Grid>
      </div>

      <br />
      

      

      <div id="sub-3">

      
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Vad följer med vid importen?
      </Typography>


      <List dense>
        {importlist.map((e, i) => (
          <ListItem key={i}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary={e.label}
          />
        </ListItem>
        ))}
      </List>

      </div>


      <div id="sub-4">

      
      <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Vad följer inte med vid importen?
      </Typography>


      <List dense>
        {importlist2.map((e, i) => (
          <ListItem key={i}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary={e.label}
          />
        </ListItem>
        ))}
      </List>

      </div>




      </div>

     <br />
     <br />
      </div>


      <div id="step-3" style={{ "minHeight": '110vh' }}>
      <Typography variant="h4" sx={{ fontStyle: 'oblique', fontWeight: 'regular' }}>
      Importera från Skatt
      </Typography>
      
      
      <br />
        Klicka återigen på det gröna plus tecknet i Capego, där hittar du ett val för att Importera från Skatt.
        <br />
        Det går endast att importera filer från beskattningsår 2021 och senare, filer med ändelsen .t21 och t.22.
        

        
        <Grid container >
        <img src={importtax} className='mxwidth2 ee' alt='' />
       </Grid>

       <br />
       Välj deklarationsfilen som du vill importera.

       <Grid container >
        <img src={importtax3} className='mxwidth2 ee' alt='' />
       </Grid>




  




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
                    <StepLabel
                    >
                    {step.label}
                    </StepLabel>
                    </IconButton>
                    {step.substeps &&
                    <StepContent>
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