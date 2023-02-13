import React, {useState, useEffect} from 'react';
import ArtCard from './ArtCard'


function ArtContainer({artData}) {

    const artwork = artData.map(art =>{

    return(
            <ArtCard 
                title={art.title}
                artist_display={art.artist_display}
                main_reference_number={art.main_reference_number}
                date_start={art.date_start}
                date_end={art.date_end}
                date_display={art.date_display}
                place_of_origin={art.place_of_origin}
                dimensions={art.dimensions}
                inscriptions={art.inscriptions}
                credit_line={art.credit_line}
                publication_history={art.publication_history}
                is_on_view={art.is_on_view}
                gallery_title={art.gallery_title}
                image_id={art.image_id}
                />)
    })
    return(
        <div className='art-cards'>
            <li className='cards'>{artwork}</li>
        </div>
        

    )
}


export default ArtContainer;