import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"; 

import ViewerProfile from './ViewerProfile'
import Login from './Login'
import Register from './Register'
import About from './About'
import GalleryList from './GalleryList'
import VisitList from './VisitList'
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const [viewer, setViewer] = useState({email:'', password:''})
  const [loggedIn, setLoggedIn] = useState(true)
  const navigate = useNavigate()

  const toggleForm = (formName) => {setCurrentForm(formName)}

  useEffect(() => {
    if (localStorage.token) {
      fetch( '/login', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(r =>r.json())
      .then(viewer => localStorage.uid = viewer.uid)
    }}, [])

  
    const handleLogOut = () => {
      localStorage.removeItem('token')
      setLoggedIn(false)
      setViewer({email: '', password:''})
      console.log(localStorage.uid)
    }

  return (
    <>
        {
          currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
        <button onClick={handleLogOut}>Log Out</button>
        <Routes>
          <Route path='/viewer' element={<ViewerProfile viewer={viewer}/>}/>
        </Routes>
  </>
  );
}

export default App;