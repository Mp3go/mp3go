import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Ripple, initTE } from "tw-elements";
import { BsHeartFill, BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistItems } from "../../redux/userWishlit";
import { addCartItems } from "../../redux/usercart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

initTE({ Ripple });

export default function Card({
  image,
  title,
  price,
  id,
  artist,
  addToWishlist,
}) {
  let location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenData.token);
  const navigate = useNavigate();

  var addToWishlist = async function (id) {
    try {
      let res = await axios.post(
        "http://localhost:3001/user/wishlist",
        {
          albumId: id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log(res.data);
      dispatch(addWishlistItems(res.data));
      navigate("/wishlist");
    } catch (err) {
      console.log("error Found");
    }
  };
  const handleAddToWishlist = () => {
    addToWishlist(id);
  };

  const addtoCart = async function () {
    try {
      let res = await axios.post(
        "http://localhost:3001/user/cart",
        {
          albumId: id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      dispatch(addCartItems(res.data));
      navigate("/cart");
    } catch (err) {
      console.log("error Found");
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-[475px] w-[95%] transition ease-in-out delay-150 hover:scale-105 duration-300 dark:bg-black bg-white flex flex-col">
      <Link to={`/music/${id}`}>
        <img className="w-full h-44 sm:h-48 p-3" src={image} alt="card" />{" "}
      </Link>
      <div className="px-6 lg:py-4 mt-2 flex flex-col grow">
        <div className="font-bold">{title}</div>
        <p className="text-sm text-gray-400 mb-2">
          {artist.map((ele) => {
            return `${ele} `;
          })}
        </p>
        <div className="font-bold text-xl mb-2">Rs {price}</div>
        <div className="flex-1 flex flex-col grow justify-end mb-4">
          {!isWishlistPage && (
            <button
              className="flex flex-row  justify-center items-center text-white rounded-md md:text-[1rem] lg:text-[1rem] text-[.8rem] border-0 outline-0 w-full py-[0.2rem] md:py-[0.4rem] mt-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black dark:bg-[#20212499]"
              onClick={handleAddToWishlist}>
              Wishlist&nbsp; <BsHeartFill />
            </button>
          )}
          <button
            className="flex flex-row  justify-center items-center text-white rounded-md md:text-[0.9rem] lg:text-[1rem] text-[.8rem] border-0 outline-0 w-full py-[0.2rem] md:py-[0.4rem] mt-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black  dark:bg-[#20212499]
          "
            onClick={addtoCart}>
            Add to Cart&nbsp; <BsCartFill />
          </button>
        </div>
      </div>
    </div>
  );
}
