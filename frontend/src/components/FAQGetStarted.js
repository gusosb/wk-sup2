import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import React from 'react'

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


const FAQGetStarted = () => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    }
  return (
  <>
  <Box sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}>
  <Typography>
    Vanliga frågor
    </Typography>
  </Box>


  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Kan jag installera Capego på flera datorer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ja, du kan installera Capego på flera datorer, du kommer åt samma data när du loggar in med
            din epostadress.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Fungerar Capego på Mac OS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Capego fungerar inte på Mac OS, för att kunna köra Capego måste du först installera
            Windows på din Mac, det finns olika tredjepartslösningar för det.
            Läs mer om systemkraven för Capego
            <IconButton variant="small" sx={{ minHeight: 0, minWidth: 0, padding: 0, ml: '3px', mb: '2.5px' }} size="small" onClick={() => window.open('https://support.wolterskluwer.se/support/systemkrav-programvaror/#capego')}>
          <Typography sx={{ textTransform: 'lowercase', color: '#007AC3' }}>
          här.
            </Typography>
          </IconButton>

     
            
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Kan jag bjuda in min revisor som gäst?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Du kan bjuda in din revisor som en gäst-användare i Capego, utan extra kostnad. Mer detaljerade instruktioner finns
            <IconButton variant="small" sx={{ minHeight: 0, minWidth: 0, padding: 0, ml: '3px', mb: '2.5px' }} size="small" onClick={() => window.open('https://support.wolterskluwer.se/support-enkelsida-manual/capego/capego-gastinlogg/')}>
          <Typography sx={{ textTransform: 'lowercase', color: '#007AC3' }}>
          här.
            </Typography>
          </IconButton>

     
            
          </Typography>
        </AccordionDetails>
      </Accordion>
  </>
  )
}

export default React.memo(FAQGetStarted)