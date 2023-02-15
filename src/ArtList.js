import { useState, useEffect } from 'react'

function ArtList(){
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch('/arts')
        .then(r=>r.json())
        .then(art => setArt(art))
        console.log(art)
      }, [] )

    return(
        <h1>Art List</h1>
    )
}



export default ArtList