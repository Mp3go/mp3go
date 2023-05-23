import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

export default function Card({ image, title, price, id }) {
  let location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";

  return (
    <div className="rounded overflow-hidden shadow-lg h-80 md:h-96 max-w-sm transition ease-in-out delay-150 hover:scale-105 duration-300">
      <Link to={`/music/${id}`}>
        <img className="w-full h-44 sm:h-48" src={image} alt="card" />{" "}
      </Link>
      <div className="px-6 lg:py-4 h-32 mt-2">
        <div className="font-bold">{title}</div>
        <p className="text-sm text-gray-400 mb-2">by Artist</p>
        <div className="font-bold text-xl mb-2">Rs {price}</div>
        <div className="flex justify-between">
          {!isWishlistPage && (
            <button className="bg-none text-white md:text-[1rem] lg:text-[1rem]  text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
              Wishlist
            </button>
          )}
          <button className="bg-none text-white md:text-[0.9rem] lg:text-[1rem] text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
