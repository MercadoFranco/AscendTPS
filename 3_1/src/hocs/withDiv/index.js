import React from 'react';
import './index.css';

const withDiv = ( text, rounded ) => {
    return (
        <div className={`
            ${rounded ? 'rounded' : ''}
            divGeneral
        `}>
            {text}
        </div>
    );
}

export default withDiv;