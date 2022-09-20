import React from 'react';
import './index.css';

const Input = ({value, name, placeHolder, onChange}) => {
    return ( 
        <input 
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeHolder}
            className="Input"
        />
     );
}
 
export default Input;