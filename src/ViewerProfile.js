import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Title from './Title'
import About from './About'
import GalleryList from './GalleryList'
import VisitList from './VisitList'
import ReviewList from './ReviewList'








import VisitForm from './VisitForm'

import NewVisit from './NewVisit'
import DeleteVisit from './DeleteVisit'

import NotFound from './NotFound'
import VisitLayout from './VisitLayout'
import GalleryLayout from './GalleryLayout'
import ReviewsList from './ReviewsList'

import Art from './Art'

function ViewerProfile({viewer}){
    const [page, setPage] = useState('/')
    
    return (
        <div className='viewer-profile'>
            <Title/>
            <NavBar onChangePage={setPage}/>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/all_galleries' element={<GalleryList/>}/>
                <Route path='/all_visits' element={<VisitList/>}/>
                <Route path='/all_reviews' element={<ReviewList/>}/>
                <Route path='*' element={<h1> Not Found </h1>}/>
            </Routes>
            <h1>Hello, {viewer.first_name} {viewer.last_name}</h1>    
        </div>
    )
}
            
export default ViewerProfile;