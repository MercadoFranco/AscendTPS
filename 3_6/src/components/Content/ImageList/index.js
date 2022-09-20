import React from 'react';
import './index.css';

const ImageList = ({ imageList = [], onChangeImage }) => {
    return (
        <div className='ImageContainer'>
            {
                imageList.map((imageUrl, index) => (
                    <img
                        alt={`meme-${index}`}
                        src={imageUrl}
                        className="Image"
                        onClick={()=>onChangeImage(imageUrl)}
                        key={imageUrl}
                    />
                ))
            }
        </div>
    );
}

export default ImageList;