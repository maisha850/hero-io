import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        
            <div className='flex justify-center items-center flex-col mt-20'>
                            <img className='lg:w-[400px] w-70' src={error} alt="" />
            
                            <h3 className='lg:text-5xl text-3xl font-semibold mt-4'>OPPS!! Page NOT FOUND</h3> 
                            <p className='text-[#627382] mt-2 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                              <Link to="/" className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4'>Go Back</Link>
            </div>
        
    );
};

export default ErrorPage;