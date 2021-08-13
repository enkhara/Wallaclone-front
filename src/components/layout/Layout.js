import React from 'react';
import { Header } from '../layout';
import { AdvertsPage } from '../Adverts';

const Layout = () => {
    return (
        <div style={{width:'95%', maxWidth:'1600px', margin:'auto'}}>
            <Header/>
            <AdvertsPage/>
        </div>
    );
}

export default Layout;
