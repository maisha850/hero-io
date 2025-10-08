import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard';
import { PulseLoader } from 'react-spinners';



const Apps = () => {
    const data=useLoaderData()
    const[search, setSearch]=useState('');
    const [loading, setLoading]=useState(false)

    const term=search.trim().toLowerCase();
    const filteredSearch=term ? data.filter(app=>app.title.toLowerCase().includes(term)) : data
    useEffect(()=>{
        if(!search){
            setLoading(false)
            return
        }
        setLoading(true)
        const timer=setTimeout(()=>{
            setLoading(false)
        },400)
        return ()=>clearTimeout(timer)
    },[search])

    return (
        <div>
            <div className='text-center '>
             <h3 className='font-bold text-5xl'>Our All Applications</h3>
         <p className='text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className='md:flex justify-between mt-10'>
            <h3 className='text-2xl font-semibold mb-3 md:mb-0'>({filteredSearch.length})Apps are found </h3>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} className='input' type="search" name='' placeholder='Search Apps' />
        </div>
      <div className='flex justify-center items-center mt-6'>
          { loading ? <PulseLoader color="#9F62F2" size={25}></PulseLoader> : <div>
            
             {
            filteredSearch.length===0 ? <div className='text-3xl text-gray-500 font-bold text-center my-20'> No App Found</div> :
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
          filteredSearch.map(card=><AppCard key={card.id} card={card}></AppCard>)
            }
        </div>
           }
            </div>}
      </div>
      
          
        </div>
    );
};

export default Apps;