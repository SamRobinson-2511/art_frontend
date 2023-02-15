import { Link, Outlet } from 'react-router-dom'

function VisitLayout(){
    return(
        <>
        <Outlet context={{}}/>
        <br />
        <Link to='/visits/1'>Visit 1</Link>
        <br />
        <Link to='/visits/2'>Visit 2</Link>
        <br />
        <Link to='/visits/new'>New Visit</Link>
        <br />
        <Link to='/visits/delete'>Delete Visit</Link>
        <br />
        <Link to='/visits/update'>Update Visit</Link>
        </>
    )
}


export default VisitLayout