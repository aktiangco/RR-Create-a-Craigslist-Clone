import React from 'react';
import props from './postings';

function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <Posting />
        </div>
        
        
    )
}

const Posting = (props) => {
    return (
        <div>
            {Posting.map(posting => {
                <div>
                    <div>
                        <img src={posting.imageUrl}></img>
                    </div>
                    <div>
                        {posting.title}
                        {posting.description}
                        {posting.price}
                    </div>
                </div>
            })}
        </div>
    )
}
  
export default Gallery