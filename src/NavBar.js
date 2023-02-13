import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar(){
    return (
        
            <nav>
                <div className='nav-bar'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/viewer'>search</NavLink> 
                    <NavLink to='/about'>dashboard</NavLink>
                    <NavLink to='/visit'>visit</NavLink>
                    <NavLink to='/gallery'>visit</NavLink>
                    <NavLink to='/collection'>visit</NavLink>
                </div>
            </nav>
        
    )
}
    
export default NavBar   