import React, { useState } from 'react';
import data from '../data';
import AlbumList from '../AlbumList';

export default function Wishlist() {
  // const {data, error} = useAxios('/user/wishlist', "GET");
  const [wishlist, setWishlist] = useState(data);

  // Function to add a card to the wishlist
  // const addToWishlist = (id) => {
  //   const cardToAdd = data.find((card) => card.id === id);
  //   if (cardToAdd) {
  //     setWishlist([...wishlist, cardToAdd]);
  //   }
  // };

  return (
    <div className='pt-10 pb-10 bg-[#DEE4E799] dark:bg-[#202124] min-h-[100vh] px-10'>
      <p className="ml-5 text-2xl font-bold leading-none">My Wishlist</p>
      {/* <AlbumList albums={wishlist} addToWishlist={addToWishlist} /> */}
      <AlbumList albums={wishlist}  />
    </div>
  );
}
