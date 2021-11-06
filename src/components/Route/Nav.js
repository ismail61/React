import React from 'react';
import {NavLink} from 'react-router-dom'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Route</a>
                    <div className="d-flex">
                        <NavLink exact activeStyle={{color:'pink'}} className="p-2" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="p-2" to="/login">Login</NavLink>
                        <NavLink activeClassName="active" className="p-2" to="/about">About</NavLink>
                        <NavLink  exact activeStyle={{color:'pink'}} className="p-2" to='/user/ismail/hosen'>User</NavLink>
                        <NavLink  activeStyle={{color:'pink'}} className="p-2" to='/search'><ImageSearchIcon /></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;