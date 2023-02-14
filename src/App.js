import React from 'react';
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from "react-router-dom";

import Viewer from './Viewer'
import Login from './Login'
import Register from './Register'
import Visit from './Visit'
import About from './About'
import Gallery from './Gallery'
import FloorPlan from './FloorPlan'
import Search from './Search'
import Footer from './Footer'
import Home from './Home'
import VisitList from './VisitList'
import GalleryList from './GalleryList'
import NewVisit from './NewVisit'
import DeleteVisit from './DeleteVisit'
import NewGallery from './NewGallery'
import NotFound from './NotFound'
import VisitLayout from './VisitLayout'
import GalleryLayout from './GalleryLayout'



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

    const getReviews = () => {
      fetch('/get-reviews')
      .then(r => r.json())
      .then(console.log)
    }
    


  

  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <ul>
        <li><Link to='/viewer'>Viewer</Link></li>
      </ul>
      <ul>
        <li><Link to='/visits'>Visits</Link></li>
      </ul>
      <ul>
        <li><Link to='/arts'>Arts</Link></li>
      </ul>
      <ul>
        <li><Link to='/galleries'>Galleries</Link></li>
      </ul>

    </nav>
    <div className='App'>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    
    <button onClick={handleFetch}>fetch</button>
    {/* <button onClick={getReviews}>getReviews</button> */}
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path='/viewer' element={<Viewer/>}/>      
      <Route path='/about' element={<About/>}/>

      <Route path='/visits' element={<VisitLayout />}>
        <Route index element={<VisitList/>}/>
        <Route path=':id' element={<Visit/>}/>
        <Route path='new' element={<NewVisit/>}/>
      </Route>

      <Route path='/galleries' element={<GalleryLayout/>}>
        <Route index element={<GalleryList/>}/>
        <Route path=':id' element={<Gallery/>}/>
        <Route path='new' element={<NewGallery/>}/>
      </Route>

      <Route path='/floorplan' element={<FloorPlan/>}/>
      <Route path='/collection' element={<ArtContainer artData={artData}/>}/> 

      <Route path='*' element={<NotFound/>}/>


    </Routes> 
    <Footer/>
    </div>
    </>
  );
}

export default App;