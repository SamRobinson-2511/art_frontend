import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';



import Footer from './Footer'
import Title from './Title'

import VisitForm from './VisitForm'


function Viewer(){
    const [viewer, setViewer] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)


    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/viewers/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(viewer => {
                    setViewer(viewer)
                    setLoading(false)
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>Errors</h1>
    console.log(viewer)

    return(
        <div>
            <h1>Hello, {viewer.first_name}</h1>
            <h3>Artworks</h3>
            <ul>

            </ul>
        </div>
    )
    
}

export default Viewer;