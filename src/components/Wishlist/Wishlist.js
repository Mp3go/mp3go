import React, { useState } from 'react';
import data from '../data';
import AlbumList from '../AlbumList';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(data);

  return (
    <div>
      <AlbumList albums={wishlist} />
    </div>
  );
}
