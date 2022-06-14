import './Styles.css'
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Suspense, lazy, useEffect, useState } from 'react'
import { useApolloClient } from '@apollo/client'

const FlexHome = lazy(() => import('./components/FlexHome'))
const FlexLogin = lazy(() => import('./components/FlexLogin'))
const FlexRegister = lazy(() => import('./components/FlexRegister'))
const FlexAdmin = lazy(() => import('./components/FlexAdmin'))


const App = () => {

  document.title = "wkFlex"

  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(null)

  const client = useApolloClient()

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }


  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }


  useEffect(() => {
    if (!token) {
      // get token from localstorage, if available and set it to token
      const localtoken = localStorage.getItem('wkflextoken')
      if(localtoken) {
        setToken(localtoken)
      }
    }

  }, [token])

  
  return (
    <>
    
    
    <Suspense fallback={<></>}>
      <Routes>
      <Route path="login" element={!token ? <FlexLogin notify={notify} errorMessage={errorMessage} setToken={setToken} /> : <Navigate replace to="/" />} />
      <Route path="register" element={!token ? <FlexRegister notify={notify} errorMessage={errorMessage} setToken={setToken} /> : <Navigate replace to="/" />} />

      <Route path="admin" element={<FlexAdmin token={token} logout={logout} />} />
      <Route path="/" element={token ? <FlexHome logout={logout} /> : <Navigate replace to="login" />} />

      </Routes>
      </Suspense>
    </>
  )
}

export default App