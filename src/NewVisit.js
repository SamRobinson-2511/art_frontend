import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function NewVisit(){
    const[rating, setRating] = useState('')
    const[date, setDate] = useState('')
    const[comment, setComment] = useState('')

    const handleNewVisit = (e) => {
        e.preventDefault();
        fetch(`/new`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                    rating:'', 
                    date:'',
                    art_id:'', 
                    viewer_id:''
                })
        })
        .then(r => r.json())
        .then(rating =>setRating(rating))
        
    }


    return(
        <>
            <h1>Create New Visit</h1>
            <form className='reg-form' onSubmit={handleNewVisit} >
                <label htmlFor='date'>Date</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                <button type='submit'>Add Visit</button>
            </form>

        </>
    
    )
}

export default NewVisit