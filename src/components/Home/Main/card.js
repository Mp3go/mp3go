import React from 'react'
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });

export default function Card({image, title, description}) {
  return (
    <div className='py-10'>

    <div className="rounded overflow-hidden shadow-lg max-w-sm hover:scale-110 w-60">
      <img className="w-full h-44 sm:h-48" src={image} alt="card" />
      <div className="px-6 py-4 h-32">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="hover:overflow-scroll scrollbar-hide overscroll-none text-gray-700 text-base h-24">{description}</p>
      </div>
      <div>
        
      </div>
    </div>

    
    </div>
  )
}

