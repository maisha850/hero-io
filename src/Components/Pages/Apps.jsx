import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard';

const Apps = () => {
    const data=useLoaderData()
    const[search, setSearch]=useState('')
    const term=search.trim().toLowerCase();
    const filteredSearch=term ? data.filter(app=>app.title.toLowerCase().includes(term)) : data
    console.log(filteredSearch)
    return (
        <div>
            <div className='text-center '>
             <h3 className='font-bold text-5xl'>Our All Applications</h3>
         <p className='text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className='md:flex justify-between mt-10'>
            <h3 className='text-2xl font-semibold mb-3 md:mb-0'>({filteredSearch.length})Apps are found </h3>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='input' type="search" name='' placeholder='Search Apps' />
        </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
          filteredSearch.map(card=><AppCard key={card.id} card={card}></AppCard>)
            }
        </div>
        </div>
    );
};

export default Apps;