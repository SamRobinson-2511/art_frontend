import { Link, Outlet } from 'react-router-dom'

function VisitLayout(){
    return(
        <>
        <Outlet context={{}}/>
        <br />
        <Link to='/visit/1'>Visit 1</Link>
        <br />
        <Link to='/visit/2'>Visit 2</Link>
        <br />
        <Link to='/visit/new'>New Visit</Link>
        <br />
        <Link to='/visit/delete'>Delete Visit</Link>
        </>
    )
}


export default VisitLayout