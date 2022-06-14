import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const RemoteSupport = () => {

    document.title = "Wolters Kluwer - Fjärrsupport"

    const psw = sessionStorage.getItem('psw')
    const pass = 'wk'

    const [checked, setChecked] = useState(false)


    useEffect(() => {
        if (psw !== pass) {
        sessionStorage.setItem('psw', prompt("Lösenord?"))
        window.location.reload()
        }


    
    }, [psw])


    const MainApp = () => (
        <Grid container sx={{ p: 10, pt: 0, minHeight: '100vh'  }}>

            <Grid item xs>

            
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
    <Typography sx={{ pt: 5, fontWeight: 'light' }} variant="h2">
    Fjärrsupport
      </Typography>
      </Grid>



     
      
      <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
        <Box sx={{ maxWidth: 700 }}>

        <Typography>
        För att supporten ska kunna hjälpa dig på bästa vis kan vi ibland behöva ta del av din skärm via ett fjärrsupportverktyg som heter TeamViewer. Det är Wolters Kluwers supportpersonal som avgör om fjärrstyrning ska användas eller inte. För att dela skärmen behöver du ladda ner programmet TeamViewer. TeamViewer installeras bara tillfälligt på din dator, när du stänger av programmet kan vi inte längre se din skärm. 
        <br />
        <br />

De flesta supportärenden vi hanterar är av ”hur gör jag” karaktär och innehåller inga personuppgifter utöver dina kontaktuppgifter.
<br />
<br />

Med anledning av GDPR är det viktigt att du anonymiserar information på din dator i det fall supportärendet gäller en fysisk person. Tänk på att vi ser allt som visas på din skärm! Stäng ned öppna program/fönster som inte behövs för ditt supportärende innan uppkoppling görs.
<br />
<br />

Vi på Wolters Kluwer tar sekretess på största allvar och har alltid gjort det. Supportpersonalen hanterar självklart ditt ärende med diskretion.
<br />
<br />

För att upprätta förbindelsen med supporten behöver du ange det ID som visas när du laddat ner TeamViewer.
</Typography>
        </Box>
        </Grid>


      <br />
            
  
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 700 }}>
        <FormControlLabel control={<Checkbox sx={{
          color: '#E5202E',
          '&.Mui-checked': {
            color: '#85BC20',
          }}} checked={checked} onChange={({target}) => setChecked(target.checked)} />} label="För att kunna starta upp sessionen med Wolters Kluwer Scandinavia AB fjärrsupport måste du först visa att du tagit del av denna information. Du aktiverar länken fjärrsupport genom att bocka i rutan här bredvid. Ytterligare information finns i vår integritetspolicy." />
        </Box>
        </Grid>

        <br />
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" onClick={() => window.open('https://programleverans.wolterskluwer.se/Programleverans/Fjarrsupport/Fjarrsupport.exe')} disabled={checked ? false : true}>Starta Fjärrsupport</Button>
      </Grid>

        </Grid>
        
        </Grid>
        
    )


  return (
    <>
    {psw === pass && <MainApp />}
    </>
  )
}

export default RemoteSupport