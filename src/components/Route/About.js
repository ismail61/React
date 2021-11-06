import React from 'react';
import Nav from './Nav'
const About = (props) => {
    return (
        <div>
            <Nav />
            <h1>{props.name} Page</h1>
        </div>
    );
};

export default About;