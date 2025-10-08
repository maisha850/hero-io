import React, { useEffect, useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { getData } from '../../Utility';

const Installation = () => {
    const data=useLoaderData()
    const [install, setInstall]=useState([])
    const[sort,setSort]=('')
    useEffect(()=>{
        const storedApp=getData()
        const convertIdInNum=storedApp.map(id=>parseInt(id))
        const filteredApp=data.filter(app=>convertIdInNum.includes(app.id))
        setInstall(filteredApp)
    },[data])

    const handleSort=(type)=>{
        setSort(type)
if(type==="low"){

  const sortAsc=[...install].sort((a,b)=>a.downloads-b.downloads)
  setInstall(sortAsc)
}
if(type==="high"){

  const sortdsc=[...install].sort((a,b)=>b.downloads-a.downloads)
  setInstall(sortdsc)
}
    }
    
    return (
        <div>
           <div className='text-center '>
             <h3 className='font-bold text-5xl'>Your Installed Apps</h3>
         <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='flex justify-between'>
          <h3 className='font-semibold text-2xl'>{install.length} Apps found</h3>
          <details className="dropdown">
  <summary className="btn m-1 text-[#627382]">Sort By Size</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className='text-[#627382]'><a>Sort By Size: {sort ? sort : ''}</a></li>
    <li><a onClick={()=>handleSort('low')}>Low-High</a></li>
    <li><a onClick={()=>handleSort('high')} >High-Low</a></li>
  </ul>
</details>
        </div>
        <div>
            {
                install.map(app=>
                <div key={app.id}>
                  <div className='p-4 shadow-lg mt-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <img className='w-20 rounded-xl' src={app.image} alt="" />
                    <div>
                        <h3 className='text-xl font-medium'>{app.title}</h3>
                         <div className="flex gap-4 mt-3">
                                  <h3 className='text-[#00D390] flex items-center gap-1'><MdOutlineFileDownload
                                  size={20}></MdOutlineFileDownload> {app.downloads/1000000}M</h3>
                             <h3 className='text-[#FF8811] flex items-center gap-1'><IoStar></IoStar>{app.ratingAvg}</h3>
                             <h3 className='text-[#627382]'>{app.size}MB</h3>
                            </div>
                    </div>
                  </div>
                  <button className='btn btn-success text-white'>Uninstall</button>
                  </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Installation;