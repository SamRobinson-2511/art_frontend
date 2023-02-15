import { useState } from 'react'

function GalleryCard({id, name, created_at, handleDeleteCard}){
    const [favorite, setFavorite] = useState(true)

    function handleFavorite(){
        setFavorite((prev)=> !prev)
    }

    function deleteCard(){
        fetch(`galleries/${id}`, {method: 'DELETE'})
        handleDeleteCard(id)
    }


    return(
        <div className='gallery-card'>
            <div>
                <div className='gallery'><strong>{name}</strong></div>
                <p className='name'>{id}</p>
                <p className='created-at'>{created_at}</p>
            </div>

        </div>
    )
}


export default GalleryCard 