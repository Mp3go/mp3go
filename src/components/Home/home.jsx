import React from "react";
import Carousel from "./Carousel/carouselcomplete";
import FeaturedAlbums from "./Main/FeaturedAlbums";
import NewReleases from "./Main/NewReleases";

export default function home() {
  return (
    <>
      <div className="bg-[#DEE4E799] pb-4">
        <div className="pt-[3rem]">
          <Carousel />
          <NewReleases />
          <FeaturedAlbums />
        </div>
      </div>
    </>
  );
}
