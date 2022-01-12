import React from 'react';
import {NavLink, Link} from 'react-router-dom';


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-3">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
            <h1>Rick & Morty <span className='text-primary'>WIKI</span></h1>
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 activeClassLink">
            <NavLink to='/' className="nav-link">
                Characters
            </NavLink>
            <NavLink to='/episodes' className="nav-link">
                Episodes
            </NavLink>
            <NavLink to='/locations' className="nav-link">
                Locations
            </NavLink>
        </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar
