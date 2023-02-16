import { useState, useEffect } from "react"
import GalleryCard from './GalleryCard'
import NewGalleryForm from './NewGalleryForm'


function GalleryList(){
    const [galleries, setGalleries] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=> {
        fetch('/all_galleries')
        .then(r=>r.json())
        .then(galleries => setGalleries(galleries))
    }, [])

    console.log(galleries)

    function addGallery(newObj){
        setGalleries([...galleries, newObj])
    }


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