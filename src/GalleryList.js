import { useState, useEffect } from "react"
import GalleryCard from './GalleryCard'

function GalleryList(){
    const [galleries, setGalleries] = useState([])

    useEffect(()=> {
        fetch('/galleries')
        .then(r=>r.json())
        .then(galleries => setGalleries(galleries))
    }, [])

    console.log(galleries)

    const gallery = galleries.map((g)=>{
        return (
            <GalleryCard
            id={g.id}
            name={g.name}
            created_at={g.created_at}
        />)
    })
    return(
        <div className='cards'>{gallery}</div>
  
    )
}

export default GalleryList