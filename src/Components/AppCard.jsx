import React from 'react';
import { IoStar } from "react-icons/io5";
import { MdOutlineFileDownload } from 'react-icons/md';

const AppCard = ({card}) => {
    const{title, image,ratingAvg, downloads}=card
    return (
        <div>
            <div className="card bg-base-100  shadow-md">
  <figure className='h-[316px]'>
    <img
     className='w-[316px] rounded-2xl p-4' src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions justify-between">
          <button className='btn btn-sm btn-soft btn-success'><MdOutlineFileDownload size={15}></MdOutlineFileDownload> {downloads/1000000}M</button>
     <button className='btn btn-sm btn-soft btn-warning'><IoStar></IoStar>{ratingAvg}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppCard;