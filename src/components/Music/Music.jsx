import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Card from "../Card";
import { BsHeart, BsCartFill } from "react-icons/bs";
import { useAxios } from "../../hooks/useAxios";
import { useState, useEffect } from "react";

export default function Music() {
  const params = useParams();
  // let [data2, setData2] = useState([]);
  const { data, error } = useAxios(`/albums/${params.id}`, "GET");

  // useEffect(() => {
  //   if (data2) {
  //     let sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  //     setData2(sortedData);
  //   }
  // }, [data2]);
  return (
    <>
      <div className="pt-5 h-full  w-full  px-[50px]">
        <div className="flex flex-col md:flex-row h-[70vh] m-0">
          <div className="w-1/3 flex justify-center items-center p-2">
            <img
              className="w-[80%] h-[80%] mx-5"
              src={data ? data.img : null}
              alt="Music"></img>
          </div>
          <div className="w-2/3 h-[90%] p-4 flex flex-col">
            <div className="text-6xl text-center font-black leading-6 m-5">
              {data ? data.name : null}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Genre: </span>{" "}
              {data ? data.language : null}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Artist: </span>
              {data ? [...data.artist] : null}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Price: </span>
              Rs {data ? data.price : null}
            </div>
            <div className="text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Year of Release: </span>
              {data ? data.year : null}
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
            {/* {data2
              ? data2.map((data) => {
                  return (
                    <Card
                      image={data.imagepath}
                      title={data.genre}
                      price={data.price}
                      id={data.id}
                    />
                  );
                })
              : null} */}
          </div>
        </div>
      </div>
    </>
  );
}
