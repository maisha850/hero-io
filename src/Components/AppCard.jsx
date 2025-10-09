import React from 'react';
import { IoStar } from "react-icons/io5";
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({card}) => {
  
    const{title, image,ratingAvg, downloads,id,subtitle}=card
    return (
        <Link to={`/appDetails/${id}`}>
                <div className="card bg-base-100 w-80 shadow-md">
  <figure className='h-[316px] w-[316px]  rounded-xl'>
    <img
     className=' p-4' src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}:<span className='text-[16px]'>{subtitle}</span></h2>
   
    <div className="card-actions justify-between">
          <button className='btn btn-sm btn-soft btn-success'><MdOutlineFileDownload size={15}></MdOutlineFileDownload> {downloads/1000000}M</button>
     <button className='btn btn-sm btn-soft btn-warning'><IoStar></IoStar>{ratingAvg}</button>
    </div>
  </div>
</div>
        </Link>
    );
};

export default AppCard;