import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
         <div>
           <div className='bg-[#001931] pt-20 pb-5 md:pl-0 pl-4'>
            <div className='flex md:flex-row md:gap-0 gap-8 flex-col justify-center'>
        <div className='mr-26'>
            <Link to="/" className='flex items-center'>
    <img className='w-10 h-10' src={logo} alt="" />
        <h3 className='font-bold  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3>
    </Link>
            <p className='text-[#A1A1AA] w-[350px] mt-3'>Hero.io is an AI-powered Web3 platform that helps users navigate the crypto world with confidence. It combines intelligent search, real-time market tools to make crypto research and trading safer and easier.</p>

        </div>
        <div className='mr-26'>
            <h3 className='text-xl font-medium text-white mb-2'>Company</h3>
            <ul className='text-[#A1A1AA] list-none space-y-2'>
                <li>About us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
            <li>Press kit</li>

            </ul>
        </div>
      
        <div className='mr-26'>
            <h3 className='text-xl font-medium text-white mb-2'>Inforamation</h3>
            <ul className='text-[#A1A1AA] list-none space-y-2'>
                <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join us</li>
            <li>Cookie Policy</li>
            </ul>
        </div>

        <div>
            <h3 className='text-xl font-medium text-white mb-2'>Social links</h3>
            <ul className='flex items-center gap-5 mt-4  '>
                <FaXTwitter size={25} className='bg-white text-black rounded-full p-[2px]' />
           <FaLinkedinIn size={25} className='bg-white text-black rounded-full p-[2px]' /> 
         <FaFacebookF size={25} className='bg-white text-black rounded-full p-[2px]' /> 
         
      
            </ul>
        </div>
      

            
        </div>
          <h3 className='text-[#A1A1AA] text-center mt-20 '>© 2025 hero-io. All rights reserved.</h3>
        </div> 
        </div>
    );
};

export default Footer;