import React from 'react';
// components
import Posting from './Posting';

// importing data
const craigPost = require('../postings')

const Gallery = () => {
    return (
        <div className="gallery">           
            {
                // creating a map
                craigPost.postings.map((data, i) => {
                    return (
                        <Posting data={data} key={i} />
                        )
            })}
        </div>       
    )
}

export default Gallery