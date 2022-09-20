import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

import './index.css';

const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='PageContent'>
                <Outlet />
            </div>
        </>
    );
}

export default BaseLayout;