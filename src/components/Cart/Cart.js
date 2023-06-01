import React, { useState, useEffect } from 'react';
import CartCard from './CartCard';
import CartSummary from './CartSummary';
import { useAxios } from '../../hooks/useAxios';
import data from '../data';

// When 'add to cart' button is clicked, data is passed from Card.js to database and retreived from db here.
// On adding backend logic, we will write the complete code of adding, deleting and retrieving data
// Todo: See about adding setCartItem() into another arrow function 
// Todo: Add scrollbar? 

export default function Cart() {
  // const {data, error} = useAxios('/user/cart', "GET");
  const [cartItems, setCartItems] = useState(data);
  let cartId;

  const removeCartItem = (cartId) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.cartId !== cartId;
      })
    );
  };

  return (
    <div className='bg-[#DEE4E799] dark:bg-[#202124]'>
    <div className='flex flex-col justify-start pl-5 py-10'>
      <h2 className='text-5xl font-black leading-10 pt-3 sm:ml-2 lg:ml-28'>
        Mp3go Cart
      </h2>
      
{/* Todo: Show div "Cart Empty" when cartItems is empty */}

      <div className='flex md:flex-row flex-col justify-around items-start mt-10'>
        {/* Cards */}
        <div className='lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 '>
          {/* {cartItems.map((item) => (
            <CartCard removeCartItem={removeCartItem} item={item}></CartCard>
          ))} */}
          <CartCard removeCartItem={removeCartItem} />
        </div>

        {/* Summary */}
        <CartSummary cartItems={cartItems}/>

      </div>

      {/* Back link */}
      <div className='flex items-center text-gray-500 hover:text-gray-600 dark:hover:text-white cursor-pointer sm:ml-2 lg:ml-28'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-chevron-left'
          width={16}
          height={16}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <polyline points='15 6 9 12 15 18' />
        </svg>
        <p className='text-sm pl-2 leading-none'>Back</p>
      </div>
      
    </div>
    </div>
  );
}
