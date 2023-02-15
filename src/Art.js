import { useOutletContext,useParams } from 'react-router-dom'

function Art(){
    const { id } = useParams()
    const obj = useOutletContext()

    return(
        <h2>Art {id} </h2>
    )
}


export default Art