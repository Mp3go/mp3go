import React, { useState } from 'react';

export default function CartSummary({ cartItems }) {
  const [subTotal, setSubTotal] = useState(0);

  cartItems.map((item) => setSubTotal(subTotal + item.qty * item.price));

  return (
      <div className='md:w-1/4 xl:w-1/4 w-full bg-gray-100 h-full'>
        <div className='flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto'>
          <div>
            <p className='text-4xl font-black leading-9'>Summary</p>
            <div className='flex items-center justify-between pt-16'>
              <p className='text-base leading-none '>Subtotal</p>
              <p className='text-base leading-none '>$9,000</p>
            </div>
            <div className='flex items-center justify-between pt-5'>
              <p className='text-base leading-none '>Shipping</p>
              <p className='text-base leading-none '>$30</p>
            </div>
            <div className='flex items-center justify-between pt-5'>
              <p className='text-base leading-none '>Tax</p>
              <p className='text-base leading-none '>$35</p>
            </div>
          </div>

          <div>
            <div className='flex items-center pb-6 justify-between lg:pt-5 pt-2'>
              <p className='text-2xl leading-normal '>Total</p>
              <p className='text-2xl font-bold leading-normal text-right '>
                $10,240
              </p>
            </div>
            <button className='text-base leading-none w-full py-5 bg-black  border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'>
              Checkout
            </button>
          </div>
        </div>
      </div>
  );
}