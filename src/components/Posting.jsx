import React from 'react'

const Posting = (props) => {
    return (
        <div>
            <img src={props.data.imageURL}/>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <p>{props.data.price}</p>
        </div>
    )
}
export default Posting