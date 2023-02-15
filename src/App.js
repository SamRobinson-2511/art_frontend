import React from 'react';
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from "react-router-dom";

import Viewer from './Viewer'
import Login from './Login'
import Register from './Register'
import Visit from './Visit'
import About from './About'
import Gallery from './Gallery'
import GalleryCard from './GalleryCard'
import Search from './Search'
import Footer from './Footer'
import Home from './Home'
import VisitList from './VisitList'

import NewVisit from './NewVisit'
import DeleteVisit from './DeleteVisit'
import NewGallery from './NewGallery'
import NotFound from './NotFound'
import VisitLayout from './VisitLayout'
import GalleryLayout from './GalleryLayout'
import GalleryList from './GalleryList'
import Art from './Art'
import ArtLayout from './ArtLayout';
import ArtList from './ArtList'
import VisitCard from './VisitCard'

import ArtContainer from './ArtContainer'
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const [artData, setArtData] = useState([])
  const [viewer, setViewer] = useState({email:'', password:''})
  const [loggedIn, setLoggedIn] = useState(true)

  const toggleForm = (formName) => {setCurrentForm(formName)}


  useEffect(() => {
    if (localStorage.token) {
      fetch( '/profile', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(r =>r.json())
      .then(viewer => setViewer(viewer))
    }}, [])

    console.log(localStorage.uid)

    const handleLogOut = () => {
      localStorage.removeItem('token')
      setLoggedIn(false)
      setViewer({email: '', password:''})
      console.log(localStorage.uid)
    }

    console.log(localStorage.uid)
  

 
    
  return (
      <>

    
    <div className='App'>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    
    <button onClick={handleLogOut}>Log Out</button>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path='/viewer' element={<Viewer/>}/>      
      <Route path='/about' element={<About/>}/>

      <Route path='/visits' element={<VisitLayout />}>
        <Route index element={<VisitList/>}/>
        <Route path=':id' element={<Visit/>}/>
        <Route path='new' element={<NewVisit/>}/>
      </Route>

      <Route path='/arts' element={<ArtLayout />}>
        <Route index element={<ArtList/>}/>
        <Route path=':id' element={<Art/>}/>
      </Route>



      <Route path='/galleries' element={<GalleryLayout/>}>
        <Route index element={<GalleryList/>}/>
        <Route path=':id' element={<Gallery/>}/>
        <Route path='new' element={<NewGallery/>}/>
      </Route>

      <Route path='/collection' element={<ArtContainer artData={artData}/>}/> 

      <Route path='*' element={<NotFound/>}/>


    </Routes> 
    <Footer/>
    </div>
    </>
  );
}

export default App;

// useEffect(() => {
  //   if ( localStorage.uid )
  //     console.log("Viewer found: ", localStorage.uid )  
  //   else
  //     console.log('No user info found')
  // }, [] )
  
  // fetch( '/login', {
    //   method: 'POST', 
    //   headers: { 
      //     'Content-Type': 'application/json', 
      //     Accept: 'application/json'
      //    }, 
      //    body: JSON.stringify({
        //     email: 'sam@sam.com',
        //     password_digest: '1234Test_'
        //    })
        //   })
        //    .then( r => r.json())
        //    .then( viewer => localStorage.uid = viewer.uid )