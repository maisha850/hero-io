import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className='w-11/12 mx-auto py-20'>
             <Outlet></Outlet>
           </main>
        </div>
    );
};

export default Root;