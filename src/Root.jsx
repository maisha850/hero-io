import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className='w-11/12 mx-auto py-20'>
             <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Root;