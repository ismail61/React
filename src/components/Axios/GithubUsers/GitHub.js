import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import User from './User.js'
const GitHub = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
             
            setUsers(await response.json())
            //console.log(users)
        } catch (error) {
            
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);



    return (
        <>
            <User users={users}/>
        </>
    )
};

export default GitHub;