import React from "react";
import Carousel from "./Carousel/carouselcomplete"
import FeaturedAlbums from "./Main/FeaturedAlbums";
import NewReleases from "./Main/NewReleases";

export default function home(){
    return(
        <>
        <Carousel/>
        <NewReleases/>
        <FeaturedAlbums/>
        </>
    )
}