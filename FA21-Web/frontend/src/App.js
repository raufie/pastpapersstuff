import logo from './logo.svg';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme, Box } from '@material-ui/core'
//logged out components
import axios from 'axios'

import LoggedOutNavbar from './components/LoggedOutUser/LoggedOutNavbar/LoggedOutNavbar'
import Register from './components/LoggedOutUser/Register/Register'
import SignIn from './components/LoggedOutUser/SignIn/SignIn'

//importing logged in components
import LoggedInNavbar from './components/LoggedInUser/LoggedInUserNavbar/LoggedInUserNavbar'
import Tasks from './components/LoggedInUser/Tasks/Tasks'
import AddTask from './components/LoggedInUser/AddTask/AddTask'
import Statistics from './components/LoggedInUser/Statistics/Statistics'
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7425'
    },
    secondary: {
      main: '#BEFA4D'
    }
  }
})
/*
react basic tasks
signed out 
  SignIn ✅
  Register ✅
  Navbar✅
  Footer
signed in
  Navbar✅
  Tasks / ✅
  AddTask /addtask✅
  Statistics /stats✅
  LogOut

*/
function App() {

  const [signedIn, setSignedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:4000/api/users/verify", {
      headers:
        { "x-auth-token": localStorage.getItem("token") }
    }).then(res => {
      setSignedIn(true);
      setIsLoading(false);
    }).catch(e => {
      setSignedIn(false);
      console.log(e)
      setIsLoading(false);
    })
  }, [])
  if (isLoading) {
    return <Box my={10}><h1>Loading</h1></Box>
  }
  if (signedIn) {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <LoggedInNavbar />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/addtask" element={<AddTask />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<Tasks />} />
          </Routes>
        </Router>
      </ThemeProvider >

    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <LoggedOutNavbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Register />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
