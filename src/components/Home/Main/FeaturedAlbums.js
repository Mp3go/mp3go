import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";
import data from "../../data";
import AlbumList from "../../AlbumList";
import Card from "./card"; 

initTE({ Ripple });

export default function FeaturedAlbums() {
  const array = data;
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomElements = shuffleArray(array).slice(0, 5);

  const {data, error} = useAxios('/albums/featured-albums', "GET");

  return (
    <div className="mx-4 mt-4 py-2 px-5">
      <h1 className="mt-10 mb-2 text-center font-sans capitalize text-5xl font-medium">
        Featured Albums
      </h1>
      <hr className="w-[25%] mx-auto" />
      {/* <AlbumList albums={featuredAlbums} /> */}
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 justify-center mt-5'>
        {data.map((album) => (
          <Card
            id = {album.id}
            image = {album.imagepath}
            price = {album.price}
            title={album.albumName}
          />
        ))}
        </div>
      <div className="mt-[5rem] flex justify-center ">
        <Link to="/albums">
          <button className="text-center text-white rounded-md px-[2rem] py-4 hover:text-gray cursor-pointer bg-black">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
