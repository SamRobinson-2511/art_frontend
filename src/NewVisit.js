import { useState, useRef } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function NewVisit(){
    const ratingRef = useRef()
    const commentRef = useRef()
    const dateRef = useRef()
    
    

    const handleNewVisit = (e) => {
        e.preventDefault();
        fetch(`/add_visit`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({comment: commentRef.current.value, rating: ratingRef.current.value, date: dateRef.current.value})
        })
        .then(r => r.json())
        .then(console.log)     
    }


    return(
        <>
            <h1>Create New Visit</h1>
            <form className='reg-form' onSubmit={handleNewVisit} >
                
                {/* <label htmlFor='date'>Date</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)}/> */}

                <label htmlFor='comment'>Comment</label>
                <input ref={commentRef} type='comment' id='comment' />

                <label htmlFor='rating'>Rating</label>
                <input ref={ratingRef} type='rating' id='rating' />


                <button type='submit'>Add Visit</button>
            </form>

        </>
    
    )
}

export default NewVisit