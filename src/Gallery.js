import { useParams } from 'react-router-dom'

function Gallery(){
    const { id } = useParams()
    return(
        <h2>Gallery {id} </h2>
    )

}


export default Gallery;