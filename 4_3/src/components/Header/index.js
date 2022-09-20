import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Input';
import './index.css';

const Header = () => {
    const [idToSearch, setIdToSearch] = useState("");
    const navigate = useNavigate();

    const onChange = ({ target }) => {
        setIdToSearch(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/detail/${idToSearch}`);
    }

    return (
        <div className='Header'>
            <h1 className='PageTitle'>Header</h1>
            <nav className='Nav'>
                <form onSubmit={handleSubmit}>
                    <Input
                        value={idToSearch}
                        name="idToSearch"
                        placeHolder="ID"
                        onChange={onChange}
                    />
                </form>
                <Link to="/user" className='NavLink'>
                    Datos
                </Link>
                <Link to="/aboutMe" className='NavLink'>
                    Sobre Mi
                </Link>
            </nav>
        </div>
    );
}

export default Header;