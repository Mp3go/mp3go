import React, { useState } from 'react';
import data from '../data';
import AlbumList from '../AlbumList';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(data);

  return (
    <div className='pt-10 pb-10 bg-[#DEE4E799] dark:bg-[#202124]'>
      <p className="ml-5 text-2xl font-bold leading-none">My Wishlist</p>
      <AlbumList albums={wishlist} />
    </div>
  );
}
