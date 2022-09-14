import React from 'react';
import PageContent from './PageContent';
import SideBar from './SideBar';
import './index.css';

const Content = () => {
    return ( 
    <div className='content'>
        <PageContent/>
        <SideBar/>
    </div> 
    );
}
 
export default Content;