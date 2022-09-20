import React from 'react';
import UserCard from '../../components/UserCard';
import './index.css';

const UserPage = () => {
    return ( 
        <div className='UserPage'>
            <UserCard
                name="Franco Mercado"
                age={22}
                dni={"12.456.789"}
            />
        </div>
     );
}
 
export default UserPage;