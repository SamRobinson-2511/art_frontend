
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    
    return(
        <nav>
            <div className='nav-bar'>
                <NavLink to="/visits">See Visits</NavLink>
                <NavLink to="/galleries">See Galleries</NavLink>
                <NavLink to="/reviews">See Reviews</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default NavBar