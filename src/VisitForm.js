// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';


// function VisitForm({addVisit}){
//     const [formData, setFormData] = useState({
//         comment:'', 
//         rating:''
//     })

//     function handleVisitForm(e){
//         e.preventDefault();
//         const visitForm = {
//             comment: comment, 
//             rating: rating
//         }
//         fetch('/visit', {
//             method: 'POST', 
//             headers: {'Content-Type': 'application/json'
//         }, 
//         body: JSON.stringify(visitForm)
//         })
//         .then(r => r.json())
//         .then(data => {
//             Navigate(`/visit`)
//         })
//     }

//     return(
//         <div className='visit-form'>
//             <form onSubmit={handleVisitForm}>
//                 <label>Comment</label>
//                 <input type='text' name='comment' value={formData.comment} onChange={handleChange}/>
                
//                 <label>Rating</label>
    

//             </form>
//         </div>

//     )
// }

// export default VisitForm