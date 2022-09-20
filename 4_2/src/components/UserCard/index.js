import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const UserCard = ({name, age, dni}) => {
    return ( 
        <div className='UserCard'>
            <div className='TextContainer'>
                <h3 className='UserText'>{name}</h3>
                <p className='UserDescription'>nombre</p>
            </div>
            <div className='TextContainer'>
                <h3 className='UserText'>{`${age} años`}</h3>
                <p className='UserDescription'>edad</p>
            </div>
            <div className='TextContainer'>
                <h3 className='UserText'>{dni}</h3>
                <p className='UserDescription'>DNI</p>
            </div>
        </div>
     );
}

UserCard.defaultProps = {
    name:"Admin Admin",
    age: 65,
    dni: "87.654.321"
}

UserCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    dni: function(props, propName, componentName) {
        if (!/^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      },
    
}
 
export default UserCard;