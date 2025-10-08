import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const AppDetails = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const findCard=data.find(item=>item.id===Number(id))
    
    const {image,title,description,companyName,downloads,ratings,ratingAvg,reviews,size}=findCard
    const rat=[...ratings].sort((a,b)=>b.count-a.count)
    
    return (
        <div>
           <div className='flex items-center gap-12'>
             <img className='w-[350px] shadow-xl' src={image} alt="" />
            <div>
                <h3 className='font-bold text-[32px]'>{title}</h3>
                <p className='text-gray-600'>Developed by: <span className='text-[#632EE3] font-medium'>{companyName}</span> </p>
                <div className="divider w-[900px]"></div>
                <div className='flex gap-20'>
                    <div>
                        <img src={download} alt="" />
                        <p className='mt-2'>Downloads</p>
                        <h3 className='font-extrabold text-[40px]'>{downloads/1000000}M</h3>
                    </div>
                    <div>
                        <img src={rating} alt="" />
                        <p className='mt-2'>Average Ratings</p>
                        <h3 className='font-extrabold text-[40px]'>{ratingAvg}</h3>
                    </div>
                    <div>
                        <img src={review} alt="" />
                        <p className='mt-2'>Downloads</p>
                        <h3 className='font-extrabold text-[40px]'>{reviews/1000}K</h3>
                    </div>
                </div>
                <button className='btn btn-success text-white mt-7'>Install Now ({size} MB)</button>
            </div>
            
           
           </div>

           <div className="divider mt-10"></div>
           <h3 className='font-semibold text-xl mb-4'>Ratings</h3>
          <div className="w-400 h-96   ">
      <ResponsiveContainer width="60%" height="100%">
        <BarChart data={rat} width={500} height={600} layout="vertical"  >
          
          <XAxis type='number' />
          <YAxis dataKey='name' type='category' />
          <Tooltip />
          <Legend />
          <Bar barSize={50} dataKey="count" fill="#FF8811" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>


           <h3 className='font-semibold text-xl mt-10'>Description</h3>
           <p className='text-[#627382] mt-4 '>{description}</p>

        </div>
    );
};

export default AppDetails;