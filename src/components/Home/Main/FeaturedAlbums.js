import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import { Ripple, initTE } from "tw-elements";

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
    <div className="mx-4 my-4 py-2">
      <h1 className="mt-10 mb-2 text-center font-sans capitalize text-5xl font-medium">
        Featured Albums
      </h1>
      <hr className="w-1/3 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10  justify-center mt-5">
        {featuredAlbums.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="mt-0 flex justify-center ">
        <Link to="/albums">
          <div className="text-center text-base hover:text-xl">See More</div>
        </Link>
      </div>
    </div>
  );
}
