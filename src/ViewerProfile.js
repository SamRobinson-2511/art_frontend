import {  useState } from 'react'
import { useParams } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer'
import Title from './Title'

import VisitForm from './VisitForm'


function ViewerProfile({viewer}){
    return(
        <>
            <h1>Welcome back, {viewer.first_name} {viewer.last_name}</h1>
                <div className="button">
                    {/* <Route to={`/viewers/${viewer.id}/profile/edit`}>
                        <button>Edit Profile</button>
                    </Route> */}
            </div>
        </>
    )
}


export default ViewerProfile;