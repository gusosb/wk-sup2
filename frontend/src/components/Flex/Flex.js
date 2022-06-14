import { Suspense, lazy, useState, useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import {
  BrowserRouter as Router,  Routes, Route, Link, Navigate
} from "react-router-dom"


const FlexHome = lazy(() => import('./FlexHome'))
const FlexLogin = lazy(() => import('./FlexLogin'))
const FlexRegister = lazy(() => import('./FlexRegister'))
const FlexAdmin = lazy(() => import('./FlexAdmin'))

const Flex = () => {

    document.title = "wkFlex"

    const psw = sessionStorage.getItem('psw')
    const pass = 'wk'

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

      if (psw !== pass) {
        sessionStorage.setItem('psw', prompt("Please enter the password."))
        window.location.reload()
        }
    }, [token, psw])

    const MainApp = () => {
      return (
        <>
      <Suspense fallback={<></>}>
      <Routes>
      <Route path="login" element={!token ? <FlexLogin notify={notify} errorMessage={errorMessage} setToken={setToken} /> : <Navigate replace to="/internal/wkflex/" />} />
      <Route path="register" element={!token ? <FlexRegister notify={notify} errorMessage={errorMessage} setToken={setToken} /> : <Navigate replace to="/internal/wkflex/" />} />

      <Route path="admin" element={<FlexAdmin token={token} logout={logout} />} />
      <Route path="/" element={token ? <FlexHome logout={logout} /> : <Navigate replace to="login" />} />

      </Routes>
      </Suspense>
        </>
      )
    }



  return (
    <>

    {psw === pass && <MainApp />}




    </>
  )
}

export default Flex