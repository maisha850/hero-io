import React from 'react';
import error from '../assets/App-Error.png'
import { Link } from 'react-router';

const Apperror = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col'>
                <img className='w-[400px]' src={error} alt="" />

                <h3 className='text-5xl font-semibold mt-4'>OPPS!! APP NOT FOUND</h3> 
                <p className='text-[#627382] mt-2'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/" className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4'>Go Back</Link>
            </div>
        </div>
    );
};

export default Apperror;