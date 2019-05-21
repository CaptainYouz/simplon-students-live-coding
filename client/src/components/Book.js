import React from 'react';

const Book = (props) => {
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <img src={props.imageUrl}/>
        </div>
    )
}
export default Book
