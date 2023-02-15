import {useState, useEffect} from 'react';
import ArtCard from './ArtCard'


function ArtContainer() {
    const [art, setArt] = useState('')
    
    const handleFetch = () => {
        fetch('/fetch')
        .then(r => r.json())
        .then(art => setArt(art))
        console.log(art)
        }

    return(
        <>
        <button onClick={handleFetch}>fetch</button>
            <h2>ART CONTAINER</h2>

        </>
    )
}



export default ArtContainer;