import React from 'react';
import './index.css';

const CatImage = ({src = "", children}) => {
    return (  
        <div className='ImageContainer'>
            <div className='AbsoluteChildren BlackFilter'/>
            {
                src && (
                    <img 
                        src={src}
                        className="AbsoluteChildren BackgroundImage"
                        alt={`catImage-${src}`}
                    />
                )
            }
            <div className='AbsoluteChildren Content'>
                {children}
            </div>
        </div>
    );
}
 
export default CatImage;