import React from 'react';

import './index.css';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home = () => {
    return ( 
        <div className='HomeContainer'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
     );
}
 
export default Home;