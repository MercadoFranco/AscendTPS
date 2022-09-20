import React from 'react';
import './index.css';

const StandardContainer = ({children, className = ""}) => {
    return ( 
        <div className={`StandardContainer ${className}`}>
            {children}
        </div> 
    );
}
 
export default StandardContainer;