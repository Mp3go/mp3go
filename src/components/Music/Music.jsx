import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Card from "../Card";

export default function Music() {
  const params = useParams();
  const result = data.filter((a) => a.id === parseInt(params.id));
  const suggestions = data.filter((a) => a.genre === result[0].genre);
  const final = result[0];
  return (
    <>
      <div className="h-screen w-full mt-[30px]">
        <div className="flex h-3/5 m-0">
          <div className="w-1/2 flex justify-center">
            <img
              className="w-50 h-full  mx-5"
              src={final.imagepath}
              alt="Music"></img>
          </div>
          <div className="w-1/2 p-4 flex flex-col">
            <div className="text-5xl text-center">{final.albumName}</div>
            <div className="text-2xl">Genre: {final.genre}</div>
            <div className="text-2xl">Artist:</div>
            <div className="text-2xl">Price:{final.price}</div>
            <div className="text-2xl">Year of Release:</div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex justify-between justify-self-end">
                <button className="bg-none text-white md:text-[1rem] lg:text-[1.2rem]  text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
                  Wishlist
                </button>
                <button className="bg-none text-white md:text-[1rem] lg:text-[1.2rem] text-[.8rem] border-0 outline-0 w-full py-[0.4rem] md:py-[0.8rem] m-1 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <h1 className="mt-10 mb-3 text-center font-sans capitalize text-5xl font-medium">
            Suggestions
          </h1>
          <hr className="w-[90%] h-[1.5px] bg-gray text-gray flex justify-center m-auto" />
          <div className="m-5">
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
