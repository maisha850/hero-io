import React from 'react';
import hero from '../../assets/hero.png'
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard';

const Home = () => {
    const alldata=useLoaderData()
    const data=alldata.slice(0,8)
    console.log(data)
    return (
        <div>
           
             <h3 className='font-bold text-7xl text-center'>We Build <br />
 <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
           
           <p className='text-[#627382] text-center mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           <div className='flex justify-center gap-4 my-10'>
            <Link to="https://play.google.com/store/" className='btn bg-white text-xl font-semibold py-3'><span><img className='w-10' src={`https://static.vecteezy.com/system/resources/previews/022/613/026/original/google-play-store-icon-logo-symbol-free-png.png`} alt="" /></span>Google Play</Link>
             <Link to="https://www.apple.com/app-store/" className='btn bg-white text-xl font-semibold py-3'><span><img className='w-6' src={`https://e7.pngegg.com/pngimages/566/36/png-clipart-app-store-iphone-apple-app-store-icon-blue-text.png`} alt="" /></span>App store</Link>
           </div>
         <figure className='flex justify-center'>
              <img src={hero} alt="" />
         </figure>
         <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center py-20 -ml-20 w-[1528px]'>
            <h3 className='font-bold text-5xl text-white'>Trusted by Millions, Built for You</h3>
          <div className='flex justify-center gap-30 mt-20'>
              <div>
                 <p className='text-white font-light'>Total Downloads</p>
                <h3 className='font-extrabold text-6xl text-white py-3'>29.6M</h3>
                <p className='text-white font-light'>21% more than last month</p>
            </div>
            <div>
                 <p className='text-white font-light'>Active Apps</p>
                <h3 className='font-extrabold text-6xl text-white py-3'>132+</h3>
                <p className='text-white font-light'>31 more will Launch</p>
            </div>
            <div>
                 <p className='text-white font-light'>Total Reviews</p>
                <h3 className='font-extrabold text-6xl text-white py-3'>906K</h3>
                <p className='text-white font-light'>46% more than last month</p>
            </div>
          </div>
            
         </div>

        <div className='text-center mt-20'>
             <h3 className='font-bold text-5xl'>Trending Apps</h3>
         <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
                data.map(card=><AppCard key={card.id} card={card} ></AppCard>)
            }
        </div>
     <div className='flex justify-center'>
          <Link to='/apps' className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
     </div>
        </div>
    );
};

export default Home;