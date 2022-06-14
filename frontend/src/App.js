import './Styles.css'
import { Route, Routes, useLocation } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense, lazy, useEffect } from 'react'
import FiraSansWoff2 from './WOFF2/FiraSans-Regular.woff2'
import ReactGA from "react-ga4"



ReactGA.initialize("G-T7J1QQHEN8")

const Home = lazy(() => import('./components/Home'))
const GetStarted = lazy(() => import('./components/GetStarted'))


const Base = lazy(() => import('./components/Base'))
const AscendBkContent = lazy(() => import('./components/AscendBkContent'))
const AscendTaxContent = lazy(() => import('./components/AscendTaxContent'))
const RemoteSupport = lazy(() => import('./components/RemoteSupport'))

const FAQPage = lazy(() => import('./components/FAQPage'))
const Flex = lazy(() => import('./components/Flex/Flex'))



const App = () => {

  const location = useLocation()


  
  useEffect(() => {
    if (!window.location.hostname === "localhost") {
      ReactGA.send({ hitType: "pageview", page: location.pathname })
    }
  }, [location])

  const theme = createTheme({
    palette: {
      primary: {
        main: "#007AC3"
      },  
      secondary: {
        main: "#EDEDED"
      },
      green: {
        main: "#85BC20"
      },
      red: {
        main: "#E5202E"
      },
    },
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${FiraSansWoff2}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  })


  
  return (
    <>
    
    
    <Suspense fallback={<></>}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Routes>
        
        <Route path="capego" element={<Base />}>
        <Route index element={(<Home />)} />
          <Route path="overgang-bokslut" element={<AscendBkContent />} />
          <Route path="overgang-skatt" element={<AscendTaxContent />} />
          <Route path="overgang-faq" element={<FAQPage />} />
          <Route path="fjarrsupport" element={<RemoteSupport />} />
        </Route>

        <Route path="/kom-igang-capego/" element={<GetStarted />} />
        <Route path="/internal/wkflex/*" element={<Flex />} />
        <Route path="/" element={<Home />} />

        
      </Routes>
      </ThemeProvider>
      </Suspense>
    </>
  )
}

export default App