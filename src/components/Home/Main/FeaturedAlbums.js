import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";
import AlbumList from "../../AlbumList";

initTE({ Ripple });

export default function FeaturedAlbums() {
  const [featuredAlbums, setfeaturedAlbums] = useState([
    {
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
  ]);

  return (
    <div className="mx-4 mt-4 py-2">
      <h1 className="mt-10 mb-2 text-center font-sans capitalize text-5xl font-medium">
        Featured Albums
      </h1>
      <hr className="w-1/3 mx-auto" />
      <AlbumList albums={featuredAlbums} />
      <div className="mt-2 flex justify-center ">
        <Link to="/albums">
          <button className="text-center text-white rounded-md p-4 hover:text-gray cursor-pointer bg-black dark:bg-black">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
