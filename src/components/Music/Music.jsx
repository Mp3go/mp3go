import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import { Navigate } from "react-router-dom";
import Card from "../Card";
import { BsHeart, BsCartFill } from "react-icons/bs";

export default function Music() {
  const params = useParams();
  const result = data.filter((a) => a.id === parseInt(params.id));
  if (result.length === 0) {
    return <Navigate to="/searchError" />;
  }
  const suggestions = data.filter((a) => a.genre === result[0].genre);
  const final = result[0];
  return (
    <>
      <div className="pt-5 h-full  w-full">
        <div className="flex flex-col md:flex-row h-full min-h-[80vh] m-0">
          <div className="w-1/2 flex justify-center items-center">
            <img
              className="w-[100%] h-[100%] mx-5"
              src={final.imagepath}
              alt="Music"></img>
          </div>
          <div className="w-1/2 p-4 flex flex-col">
            <div className="text-5xl text-center font-black leading-6 m-5">
              {final.albumName}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Genre: </span> {final.genre}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Artist: </span>
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Price: </span>
              Rs {final.price}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Year of Release: </span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex flex-col md:flex-row md:mt-5 justify-between justify-self-end">
                <button className="flex-1 flex justify-center rounded-full items-center rounded-lg text-white md:text-[1rem] lg:text-[1rem]  text-[.8rem] border-0 outline-0 w-full p-[.8rem] md:p-[1rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
                  <div className="px-2">Wishlist</div>
                  <div>
                    <BsHeart />
                  </div>
                </button>
                <button className="flex-1 flex justify-center rounded-full items-center rounded-lg text-white md:text-[0.9rem] lg:text-[1rem] text-[.8rem] border-0 outline-0 w-full p-[0.8rem] md:p-[1rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
                  <div className="px-2">Add to Cart</div>
                  <BsCartFill />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mt-10 mb-2 text-center font-serif capitalize text-5xl font-medium">
            New Releases
          </h1>
          <hr className="w-1/5 mx-auto" />
          <div className="p-5 w-[100%] h-full ">
            {suggestions.map((data) => {
              return (
                <Card
                  image={data.imagepath}
                  title={data.genre}
                  price={data.price}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
