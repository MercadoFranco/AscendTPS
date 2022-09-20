import React from 'react';
import './index.css';

const LoadingCircle = () => {
    return ( 
        <div className='LoadingContainer'>
            <div className='ArrowContainer'>
                <div className='ArrowBody'/>
                <div className='ArrowHead'/>
            </div>
        </div>
     );
}
 
export default LoadingCircle;