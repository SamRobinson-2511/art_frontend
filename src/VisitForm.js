import React, { useState, useDef } from 'react';
import { useNavigate } from 'react-router-dom';




function VisitForm({addVisit}){
    const commentDef = useDef()
    const ratingDef = useDef()
    const navigate = useNavigate()

    function handleVisitForm(e){
        e.preventDefault();
        const visitForm = {
            comment: commentDef.current.value, 
            rating: ratingDef.current.value
        }
        fetch('/visit', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(visitForm)
        })
        .then(r => r.json())
        .then(data => {

            navigate(`/visit`)
        })
    }

    return(
        <div className='visit-form'>
            <form onSubmit={handleVisitForm}>
                
                <label>Comment</label>
                <input def={commentDef} type='text' name='comment' />
                
                <label>Rating</label>
                
            </form>
        </div>

    )
}

export default VisitForm