import React from 'react';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Menu from '../../components/Menu';
import Sections from '../../components/Sections';
import "./index.css"

const MainPage = () => {
    return ( 
        <div className='pageContainer'>
            <Heading />
            <Menu/>
            <Sections/>
            <Content/>
            <Footer/>
        </div>
     );
}
 
export default MainPage;