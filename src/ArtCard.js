
function ArtCard({title, artist_display, main_reference_number, date_start, date_end, date_display, place_of_origin, dimensions, inscriptions, credit_line, publication_history, is_on_view, gallery_title, image_id}){

    return(
        <div className='card'>
            <div>
                <h2 className='title'>{title}</h2>
                <p className='artist'>{artist_display}</p>
                <p className='reference'>{main_reference_number}</p>
                <p className='datestart'>{date_start}</p>
                <p className='datefin'>{date_end}</p>
                <div className='datedisplay'>{date_display}</div>
                <div className='place'>{place_of_origin}</div>
                <div className='dims'>{dimensions}</div>
                <div className='inscriptions'>{inscriptions}</div>
                <div className='credit-line'>{credit_line}</div>
                <div className='pub-history'>{publication_history}</div>
                <div className='on-view'>{is_on_view}</div>
                <div className='gallery'>{gallery_title}</div>
                <div className='image'>{image_id}</div>
            </div>
        </div>
    )
}

export default ArtCard;