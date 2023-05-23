import React, { useState } from "react";
import { Ripple, initTE } from "tw-elements";
import data from "../../data";
import AlbumList from "../../AlbumList";

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

  const [featuredAlbums, setfeaturedAlbums] = useState(randomElements);

  return (
    <div className="mx-4 my-4 py-2">
      <h1 className="mt-10 mb-2 text-center font-sans capitalize text-5xl font-medium">
        Featured Albums
      </h1>
      <hr className="w-1/3 mx-auto" />
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10  justify-center mt-5">
        {featuredAlbums.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div> */}

      <AlbumList albums={featuredAlbums} />

      <div className="mt-2 flex justify-center text-gray-500 hover:text-black cursor-pointer">
        <a href="/albums" className="text-center">
          see more
        </a>
      </div>
    </div>
  );
}
