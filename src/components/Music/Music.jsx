import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

export default function Music() {
  const params = useParams();
  const result = data.filter((a) => a.id === parseInt(params.id));
  const final = result[0];
  return (
    <>
      <div className="h-screen w-full mt-[30px]">
        <div className="flex h-3/5 border-2 border-black">
          <div className="w-1/2 flex justify-center">
            <img
              className="w-50 h-full  mx-5"
              src={final.imagepath}
              alt="Music"></img>
          </div>
          <div className="w-1/2 p-4">
            <div className="text-5xl text-center">{final.albumName}</div>
            <div className="text-2xl">Genre: {final.genre}</div>
            <div className="text-2xl">Artist:</div>
            <div className="text-2xl">Price:{final.price}</div>
            <div className="text-2xl">Year of Release:</div>
          </div>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <h1>Suggestions</h1>
          <div></div>
        </div>
      </div>
    </>
  );
}
