import '../Styles.css'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import Fab from '@mui/material/Fab'

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import FolderIcon from '@mui/icons-material/Folder'
import ListItemText from '@mui/material/ListItemText'
import Popover from '@mui/material/Popover'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import CallIcon from '@mui/icons-material/Call'
import { useNavigate } from "react-router-dom"


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }))
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }))
  
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }))


  const importlist = [
    { label: "Personuppgifter (benämns Funktionärer i Capego)"},
    { label: "Anläggningsregister"},
    { label: "Bokslutsbilagor"},
    { label: "Kontokoppling till raderna i årsredovisningen. Har du flyttat och/eller delat konton i årsredovisningen följer det med vid importen. Du ser det direkt i bokslutsvyn där du arbetar när du upprättar bokslutet."},
    { label: "Texter du har skrivit i förvaltningsberättelsen och övriga delar i årsredovisningen."},
  ]

const sections = [
    { name: 'Capego Bokslut', questions: [
      { title: 'Stödjer Capego funktionsindelad resultaträkning?', content: <React.Fragment>
      {"Nej, Capego stödjer inte funktionsindelad resultaträkning, för att kunna importera ett bokslut med funktionsindelad resultaträkning från Bokslut så måste du först skapa om den till kostnadsslagsindelad. Det går att skapa en funktionsindelad resultaträkning manuellt i Capego, "}<a target="_blank" rel="noreferrer" href='https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-bokslut-funktionsindelad-resultatrakning/'>se den detaljerade manualen</a>{"."}
    </React.Fragment>, id: 0 },
      { title: 'Går det att skriva ut bilagorna med linjer och ramar i Capego?', content: 'Nej, det går inte att skriva ut bilagorna med linjer och ramar.', id: 1 },
      { title: 'Kan jag importera flera år från Bokslut?', content: 'Ja, för att importera historiska år måste du importera en fil i taget och börja med det äldsta året och importera i kronologisk ordning. Välj "Ja" när programmet frågar om du vill skriva över klienten, de äldre år som du redan importerat ligger kvar.', id: 2 },
      { title: 'Kan jag importera flera år samtidigt?', content: 'Nej det går inte, det går endast att importera ett bokslut i taget.', id: 3 },
      { title: 'Vad följer med vid import från Bokslut?', content: <List dense>
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
      , id: 4 },
      { title: 'Vad är den digitala årsakten?', content:
      <React.Fragment>
      {"Funktionen "}<a target="_blank" rel="noreferrer" href='https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-bokslut-digital-arsakt/'>Digital Årsakt</a>{" hjälper dig att snabbt och enkelt ställa samman en fullständig och digital bokslutsdokumentation i ett dokument. Dokumentet du skapar är en komplett indexerad PDF-fil, anpassad efter mottagaren. Du anpassar och kompletterar innehållet för olika mottagares behov, t.ex. för revisorn eller din kund."}
    </React.Fragment>, id: 5 },
      { title: 'Var kan jag hitta anläggningsregistret?', content: 
      <React.Fragment>
      {'Anläggningsregistret kan du hitta under fliken Bokslut under de tre menystrecken. Anläggningsregistret fungerar på samma sätt som det gjorde i Bokslut. '}<a target="_blank" rel="noreferrer" href='https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-bokslut-anlaggningsregister-innehallsforteckning/'>Manualer för anläggningsregistret</a>{"."}
    </React.Fragment>
    , id: 6 },
    ]},
    { name: 'Capego Skatt', questions: [
      { title: 'Varför kan jag inte skapa en Inkomstdeklaration på en enskild firma?', content: 'För att skapa upp Inkomstdeklaration för en enskild firma så måste du lägga upp privatpersonen som en egen klient då det är en som är ansvarig för att deklarera sin enskilda firma i sin privatdeklaration. Bokslutet som ligger på den enskilda firman kommer ändå att kopplas till deklarationen då båda har samma personnummer.', id: -1 },
      { title: 'Var kan jag hitta fler beräkningsmoduler?', content: 'Ännu är inte alla moduler med i Capego Skatt men FÅAB-modulen finns med och den hittar du när du skapar upp en Inkomstdeklaration 1.', id: -2 },
    ]}
]


const FAQPage = () => {

  document.title = "Wolters Kluwer - Vanliga frågor"

    const [expanded, setExpanded] = useState()
    const [search, setSearch] = useState()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined


    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false)
    }

    const navigate = useNavigate()


    const Search = () => {
        if (search && search !== ' ') {
            return (
              sections.flatMap(q => q.questions).filter(f => f.title.toLowerCase().includes(search.toLowerCase())).map((e, i) => (
                <Accordion key={i} expanded={expanded === e.id} onChange={handleChange(e.id)}>
                <AccordionSummary aria-controls={e.id + "-content"} id={e.id + "-header"}>
                    <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {e.content}
                    </Typography>
                </AccordionDetails>
                </Accordion>
                )
                )
                )
        } else {
            return (sections.map(e =>
            
              <Box sx={{ pb: '1px' }}>
              
              <Typography sx={{ fontWeight: 'light', display: 'flex', justifyContent: 'center', pb: 1, mt: 3 }} variant="h5">
              {e.name}
              </Typography>
              
              {e.questions.map((b, i) => (
                <Accordion key={i} expanded={expanded === b.id} onChange={handleChange(b.id)}>
                <AccordionSummary aria-controls={b.id + "-content"} id={b.id + "-header"}>
                    <Typography>{b.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {b.content}
                    </Typography>
                </AccordionDetails>
                </Accordion>
              ))}
              </Box>
            )
                )
        }
    }

  return (
    <>
    <Grid container sx={{ p: 10, pt: 0, minHeight: '100vh' }}>
      
        <Grid item xs sx={{ mr: 10 }}>

        <Button sx={{ position: 'absolute', top: 40 }} onClick={() => navigate(-1)}>Tillbaka</Button>
        
        

        <Typography sx={{ pt: 5, fontWeight: 'light', display: 'flex', justifyContent: 'center' }} variant="h3">
        Vanliga frågor
        </Typography>
       
        <Typography variant="h6" sx={{ fontStyle: 'oblique', fontWeight: 'regular', display: 'flex', justifyContent: 'center' }}>
      vid övergång från Bokslut och Skatt till Capego
      </Typography>
      <br />

        <Grid container sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <TextField
        id="input-search"
        label="Sök"
       value={search}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
            <IconButton size="small" onClick={() => setSearch('')}>
            <CloseIcon />
            </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={({target}) => setSearch(target.value)}
        variant="standard"
      />
        </Grid>

        

        <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          

  
        <br />

        <Box>

        <Box sx={{ mb: 2, maxWidth: 600 }}>
        <Search />
        </Box>
       
        
        </Box>


        </Grid>




    
                
        </Grid>
        <Grid item xs="auto">


       <Fab
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(5),
              right: (theme) => theme.spacing(5)
            }}
            color="secondary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <QuestionMarkIcon color="primary"  />
          </Fab>

          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        disableScrollLock
        elevation={2}
      >
        <Typography sx={{ p: 2, maxWidth: 500 }}>

          <Typography variant="h6">Support</Typography>
          Teknik- och programrelaterad support
          <br />


          <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.location.href = "mailto:support@wolterskluwer.se?subject=Supportärende Capego&body="}>
              support@wolterskluwer.se
          </IconButton>

          <br />
          <br />

          <Typography variant="h6">Kundservice</Typography>
          Frågor angående ditt abonnemang, priser, licenser, nybeställningar, ändring av abonnemang, adressändring med mera.
          <br />
          <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.location.href = "mailto:kundservice@wolterskluwer.se"}>
              kundservice@wolterskluwer.se
          </IconButton>
          <CallIcon sx={{ ml: 5, maxHeight: 17 }} /> 031-775 17 00

          <br />
          <br />

          <Typography variant="h6">Sälj</Typography>
          För mer information om våra produkter inom skatt och ekonomi, förmånspaket, utbildningar etc.
          <br />

          <IconButton disableFocusRipple disableRipple variant="small" sx={{ color: '#007AC3', minHeight: 0, minWidth: 0, padding: 0, pb: '2.6px' }} size="small" onClick={() => window.location.href = "mailto:salj@wolterskluwer.se"}>
              salj@wolterskluwer.se
          </IconButton>
        
          <CallIcon sx={{ ml: 15, maxHeight: 17 }} /> 031-775 17 00
       
          

          



        </Typography>
      </Popover>






        </Grid>
    </Grid>
  </>
  )
}

export default FAQPage