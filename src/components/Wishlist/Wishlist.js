import React, { useState } from "react";
import AlbumList from "../AlbumList";
import { useAxios } from "../../hooks/useAxios";

export default function Wishlist() {
  const { data, error } = useAxios("/user/wishlist", "GET");
  // Function to add a card to the wishlist
  // const addToWishlist = (id) => {
  //   const cardToAdd = data.find((card) => card.id === id);
  //   if (cardToAdd) {
  //     setWishlist([...wishlist, cardToAdd]);
  //   }
  // };

  return (
    <div className="pt-10 pb-10 bg-[#DEE4E799] dark:bg-[#202124] min-h-[100vh] px-10">
      <p className="ml-5 text-2xl font-bold leading-none">My Wishlist</p>
      {error ? "Please Add Items to your Cart" : null}
      {/* <AlbumList albums={wishlist} addToWishlist={addToWishlist} /> */}
      {data ? (
        <AlbumList
          albums={data.map((data) => {
            return data.product;
          })}
        />
      ) : null}
    </div>
  );
}
