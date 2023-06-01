import React from 'react';
import { Ripple, initTE } from 'tw-elements';

initTE({ Ripple });

export default function Card({ image, title, price }) {
  return (
    <div className='py-10'>
      {/* <div className="rounded overflow-hidden shadow-lg max-w-sm hover:scale-110 w-60">
      <img className="w-full h-44 sm:h-48" src={image} alt="card" />
      <div className="px-6 py-4 h-32">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="hover:overflow-scroll scrollbar-hide overscroll-none text-gray-700 text-base h-24">{description}</p>
      </div>
      <div>
        
      </div>
    </div> */}
      <div className='wrapper antialiased text-gray-900 hover:translate-y-1'>
        <div>

          <img
            src={image}
            alt='random imgee'
            className='w-full object-center rounded-2xl shadow-md h-60'
          />

          <div className='relative px-4 -mt-10'>
            <div className='bg-white p-6 rounded-2xl shadow-lg dark:bg-black dark:text-white'>
              <h4 className='mt-1 text-xl font-medium uppercase leading-tight truncate'>
                {title}
              </h4>
              <div className='mt-1'>Rs {price}</div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
