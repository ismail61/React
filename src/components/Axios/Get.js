import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Get = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(async () => {
        const fetchUser = await axios.get(url)
        setUsers(await fetchUser.data)
    },[])

    if(users.length === 0){
        return <h1 style={{textAlign: "center"}}>Loading...</h1>
    }else{
    return (
        <div>
            <div className="row">
                {users.map((user) => {
                    return (
                        <div className="col-md-4">
                            <div className="card text-left p-2 my-2">
                                <div className="card-header text-center bg-primary">
                                    {user.name}
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title">{user.username}</h4>
                                    <p className="card-text">
                                        <address>
                                            {user.address.street} <br/>
                                            {user.address.suite}<br/>
                                            {user.address.city}<br/>
                                            {user.address.zipcode}
                                        </address>
                                    </p>
                                </div>
                                <div style={{color: 'green'}} className="card-footer text-center">
                                    {user.phone}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
            }
};

export default Get;