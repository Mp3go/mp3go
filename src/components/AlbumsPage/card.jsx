import React from 'react'
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });

export default function Card({image, title, description}) {
  return (
    <div className='py-10'>

    <div className="rounded overflow-hidden shadow-lg max-w-sm hover:scale-110">
      <img className="w-full h-44 sm:h-48" src={image} alt="card" />
      <div className="px-6 py-4 h-32">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between">
        <button className="bg-none text-white text-[1.2rem] border-0 outline-0 w-full py-[1rem] m-0 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">Wishlist</button>
        <button className="bg-none text-white text-[1.2rem] border-0 outline-0 w-full py-[1rem] m-0 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">Add to Cart</button>
      </div>
      </div>
    </div>

    
    </div>
  )
}

