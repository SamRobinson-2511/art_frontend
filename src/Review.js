import {useState} from 'react'


function Review(){
    const [content, setContent] = useState('')
    const [rating, setRating] = useState()
    const [viewer, setViewer] = useState()


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label></label>
            <input text='review' onChange=''>Review</input>
            <select name='rating'></select>
            <button type="submit">Add Review</button>
            </form>
        </div>
    )
}

export default Review;