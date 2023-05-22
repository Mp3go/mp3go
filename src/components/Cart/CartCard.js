import React, { useState } from 'react';

export default function CartCard({
  cartId,
  image,
  title,
  genre,
  artist,
  price,
  removeCartItem
}) {

  const [counter, setCounter] = useState(1);

  const [subTotal, setSubTotal] = useState();

  const incCounter = () => {
    if(counter<10)
    {
    setCounter(Number(counter)+1);
    }
  }

  const decCounter = () => {
    if(counter>1){
      setCounter(counter - 1);
    }
    else if(counter === 1){
      removeCartItem(cartId);
    }
  }

  return (
    <div>
      <div className='md:flex items-center mt-2 py-8 border-t border-gray-200'>
        <div className='w-1/4'>
          <img
            src='https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg'
            alt
            className='w-full h-36 object-center object-cover'
          />
        </div>
        <div className='md:pl-3 md:w-3/4'>
          <p className='text-xs leading-3  md:pt-0 pt-4'>id</p>
          <div className='flex items-center justify-between w-full pt-1'>
            <p className='text-base font-black leading-none '>Title</p>
            {/* <select className='py-2 px-1 border border-gray-200 mr-6 focus:outline-none'>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select> */}
            <div className='flex justify-center w-1/5'>
              <svg
                className='fill-current w-3'
                viewBox='0 0 448 512'
                onClick={decCounter}
              >
                <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
              </svg>

              <input
                className='mx-2 border border-gray-400 text-center w-8 focus:outline-none'
                type='text'
                value={counter}
              />

              <svg
                className='fill-current w-3'
                viewBox='0 0 448 512'
                onClick={incCounter}
              >
                <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
              </svg>
            </div>
          </div>
          <p className='text-xs leading-3  pt-2'>Genre:</p>
          <p className='text-xs leading-3  py-4'>Artist:</p>
          <div className='flex items-center justify-between pt-5 pr-6'>
            <div className='flex itemms-center'>
              <p className='text-xs leading-3 underline  cursor-pointer'>
                Add to favorites
              </p>
              <p
                onClick={() => removeCartItem(cartId)}
                className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer'
              >
                Remove
              </p>
            </div>
            <p className='text-base font-black leading-none '>price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
