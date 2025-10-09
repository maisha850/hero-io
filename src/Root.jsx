import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Components/Footer';
import { PulseLoader } from 'react-spinners';

const Root = () => {
    const navigation=useNavigation()
    const isNavigating=Boolean(navigation.location)
    return (
        <div>
            <Navbar></Navbar>
           <main className='w-11/12 mx-auto py-20'>
           {isNavigating ? <div className='flex justify-center items-center'><PulseLoader color="#9F62F2" size={25}></PulseLoader></div> :   <Outlet></Outlet> }
           
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Root;