import React, { useState } from 'react';
import './Post.css'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const Toast = (message)=>{

    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
    });
}
const Post = () => {
    const [msg, setMsg] = useState('')
    const [post, setPost] = useState({
        userId: 601,
        title: '',
        body: ''
    })
    const inputChangeHandler = (event) => {
        setPost((oldData) => {
            return {
                ...oldData,
                [event.target.name]: event.target.value
            }
        })
    }
    const formSubmit = async (event) => {
        event.preventDefault()
        if (!post.title || !post.body) {
            Toast('All Fields are Required')
        } else {
            axios.post('https://jsonplaceholder.typicode.com/posts', post)
                .then((response)=>{
                    if (response) {                       
                        setPost({
                            title: '',
                            body: ''
                        })
                        toast.success('Post Created Successful', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                        });
        
                    }
                })
                .catch(()=>{
                    Toast('Something Went Wrong')
                })
        }


    }

    return (
        <>
            <div className="login-block">
                <div className="container">
                    <div className="login-sec">
                        <h2 className="text-center">Create A post</h2>
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <TextField name="title" value={post.title} onChange={inputChangeHandler} className="form-control" placeholder="Title"
                                    label="Title" />
                            </div>
                            <div className="form-group">
                                <TextField name="body" value={post.body} onChange={inputChangeHandler} className="form-control mt-4" placeholder="Body Here" label="Body" />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            {/* Same as */}
            <ToastContainer />
            {/* <div>
                {loading ? <h1>Loading...</h1> : <h1>{msg}</h1>}
            </div> */}
        </>
    );
};

export default Post;