import { Link, Outlet } from 'react-router-dom'

function ArtLayout(){
    return(
        <>
        <Outlet context={{}}/>
        <br />
        <Link to='/arts/1'>Art 1</Link>
        <br />
        <Link to='/arts/2'>Art 2</Link>
        
        
        </>
    )
}


export default ArtLayout