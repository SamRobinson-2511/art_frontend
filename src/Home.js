import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
        <h1>Home</h1>
        <nav>
            <ul><li><Link to='/'>Home</Link></li></ul>
            <ul><li><Link to='/viewer'>Viewer</Link></li></ul>
            <ul><li><Link to='/visits'>Visits</Link></li></ul>
            <ul><li><Link to='/arts'>Arts</Link></li></ul>
            <ul><li><Link to='/galleries'>Galleries</Link></li>
      </ul>

    </nav>
    </>
    )

}

export default Home 