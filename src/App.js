import React from 'react';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import Viewer from './Viewer'
import Login from './Login'
import Register from './Register'
import Visit from './Visit'
import About from './About'
import Gallery from './Gallery'
import FloorPlan from './FloorPlan'
import Search from './Search'
import Footer from './Footer'


import NavBar from './NavBar';

import ArtContainer from './ArtContainer'

import './App.css';



function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const [artData, setArtData] = useState([])
  const toggleForm = (formName) => {setCurrentForm(formName)}
  
  useEffect(() => {
    if ( localStorage.uid )
      console.log("Viewer found: ", localStorage.uid )  
    else
      console.log('No user info found')
  }, [] )

  const handleLogin =(e) => {
    e.preventDefault();
    let value = e.target.value;

  }

  fetch( '/login', {
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json', 
      Accept: 'application/json'
     }, 
     body: JSON.stringify({
      email: 'sam@sam.com',
      password_digest: '1234Test_'
     })
    })
     .then( r => r.json())
     .then( viewer => localStorage.uid = viewer.uid )

     const handleFetch = () => {
      fetch('/fetch')
      .then(r => r.json())
      .then(art => console.log(art))
      }
    


  

  return (
    <div className='App'>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    
    <button onClick={handleFetch}>fetch</button>
    <button onClick={getReviews}>fetch</button>
    <NavBar/>
    <Search/>
    <Routes>

      <Route path='/viewer' element={<Viewer/>}/>      
      <Route path='/about' element={<About/>}/>
      <Route path='/visit' element={<Visit/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/floorplan' element={<FloorPlan/>}/>
      <Route path='/collection' element={<ArtContainer artData={artData}/>}/> 
      
    </Routes> 
    <Footer/>
    </div>
  );
}

export default App;