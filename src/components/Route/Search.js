import React,{useState} from 'react';
import SearchResult from './SearchResult/SearchResult'
import {NavLink} from 'react-router-dom'
const Search = () => {
    const [value,setValue] = useState()
    const inputChange=(event)=>{
        setValue(event.target.value)       
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand">Image Search</NavLink>
                    <form className="d-flex">
                    <input value={value} onChange={inputChange} className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search"/>
                    </form>
                </div>
            </nav>
            <SearchResult ext={value} />
        </div>
    );
};

export default Search;