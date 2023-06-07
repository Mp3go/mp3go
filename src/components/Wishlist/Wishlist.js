import React, { useState } from "react";
import AlbumList from "../AlbumList";
import { useAxios } from "../../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistItems } from "../../redux/userWishlit";
import { useEffect } from "react";

export default function Wishlist() {
  var { data: value, error } = useAxios("/user/wishlist", "GET");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!error) {
      dispatch(addWishlistItems(value));
    }
  }, [value]);

  const data = useSelector((state) => state.userWishlist.userWishlist);
  return (
    <div className="pt-10 pb-10 bg-[#DEE4E799] dark:bg-[#202124] min-h-[100vh] px-10">
      <p className="ml-5 text-2xl font-bold leading-none">My Wishlist</p>
      {error
        ? error.response.status == 409
          ? "Please Add Items to your Cart"
          : null
        : null}
      {error
        ? error.response.status == 401
          ? "Please Login First"
          : null
        : null}
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
