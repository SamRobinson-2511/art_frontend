import { useOutletContext,useParams } from 'react-router-dom'

function Visit(){
    const { id } = useParams()
    const obj = useOutletContext()

    return(
        <h2>Visit {id}</h2>
    )
}


export default Visit