import React from 'react';
import {NavLink, Link} from 'react-router-dom'

function NavBar({viewer}){
    return (
        <>
            <nav>
            <div className='sub-nav'>
            <Link to="/"><h1 id="nav-logo">NowMuseuMe</h1></Link>
            </div>
                <div className='nav-bar'>
                    <NavLink to='/Floorplan'>Floorplan</NavLink>&nbsp;
                    <NavLink to='/Viewer'>Search</NavLink>&nbsp; 
                    <NavLink to='/About'>dashboard</NavLink>&nbsp;
                    <NavLink to='/Visit'>visit</NavLink>&nbsp;
                    <NavLink to='/gallery'>Gallery</NavLink>&nbsp;
                </div>
            </nav>
        </>
        
    )
}
    
export default NavBar   