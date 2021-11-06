import React from 'react';

const SearchResult = (props) => {
    const img =    `https://source.unsplash.com/400x400?${props.ext}`
    return (
        <div>
            <p></p>
            <div className="text-center">
                {props.ext? <img src={img}/>:<h1>Please Search First</h1>}
            </div>
        </div>
    );
};

export default SearchResult;