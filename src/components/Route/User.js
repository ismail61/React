import React from 'react';
import Nav from './Nav'
import {useParams,useLocation,useHistory} from 'react-router-dom'
//without useParams hooks
/* const User = ({match}) => {
    return (
        <div>
            <Nav />
            User {match.params.name} Page
        </div>
    );
}; */
//with useParams hooks
const User = () => {
    const {fName,lName} = useParams()
/*     const location = useLocation()
    console.log(location.pathname) */
    const {pathname} = useLocation()
    console.log(pathname)
    return (
        <div>
            <Nav />
            User {fName} {lName} page
        </div>
    );
};

export default User;