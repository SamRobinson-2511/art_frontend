import { Link, Outlet } from 'react-router-dom'

function GalleryLayout(){
    return(
        <>
        
        <Outlet/>
        <Link to='/gallery/1'>Gallery 1</Link>
        <br />
        <Link to='/gallery/2'>Gallery 2</Link>
        <br />
        <Link to='/gallery/new'>New Gallery</Link>
        <br />
        <Link to='/gallery/delete'>Delete Gallery</Link>
        </>
    )
}

export default GalleryLayout