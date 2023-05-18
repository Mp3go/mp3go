import React from 'react'
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });

export default function Card({image, title, description,price}) {
  return (
    <div className='pb-3'>

    <div className="rounded shadow-lg h-80 md:h-96 max-w-sm hover:scale-105 bg-white">
      <img className="w-full h-44 sm:h-48" src={image} alt="card" />
      <div className="px-6 lg:py-4 h-32 mt-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold mb-2">Rs{price}</div>
        <div className="flex justify-between">
        <button className="bg-none text-white md:text-[1rem] lg:text-[1.2rem]  text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">Wishlist</button>
        <button className="bg-none text-white md:text-[1rem] lg:text-[1.2rem] text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">Add to Cart</button>
      </div>
      </div>
    </div>

    
    </div>
  )
}

