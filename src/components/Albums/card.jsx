import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Ripple, initTE } from "tw-elements";
import { BsHeart, BsCartFill } from "react-icons/bs";

initTE({ Ripple });

export default function Card({ image, title, price, id }) {
  let location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";

  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-[95%] flex flex-col max-w-sm md:mb-5 transition ease-in-out delay-150 hover:scale-105 duration-300 bg-white dark:bg-black">
      <Link to={`/music/${id}`}>
        <img
          className="w-full h-44 p-3 rounded-5 self-center sm:h-48"
          src={image}
          alt="card"
        />{" "}
      </Link>
      <div className="px-6 lg:py-4 h-full mt-2">
        <div className="font-bold">{title}</div>
        <p className="text-sm text-gray-400 mb-2">by Artist</p>
        <div className="font-bold text-xl mb-2">Rs {price}</div>
        <div className="flex sm:flex-col flex-row justify-between">
          {!isWishlistPage && (
            <button className="flex-1 flex justify-center rounded-full items-center dark:bg-[#20212499] rounded-lg text-white md:text-[1rem] lg:text-[1rem]  text-[.8rem] border-0 outline-0 w-full p-[0.4rem] md:p-[0.5rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
              <div className="px-2">Wishlist</div>
              <div>
                <BsHeart />
              </div>
            </button>
          )}
          <button className="flex-1 flex justify-center rounded-full items-center dark:bg-[#20212499] rounded-lg text-white md:text-[0.9rem] lg:text-[1rem] text-[.8rem] border-0 outline-0 w-full p-[0.4rem] md:p-[0.5rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black ">
            <div className="px-2">Add to Cart</div>
            <BsCartFill />
          </button>
        </div>
      </div>
    </div>
  );
}
