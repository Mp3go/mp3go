import React,{useState} from "react";
import data from "../Home/Carousel/data";
import Card from "./card"


export default function Allalbums(){
    const result = data.map((card) => (
        <Card key={card.id} image={card.imagepath} title={card.albumName} price={card.price}/>
        ))
    return (
        <div className="grid grid-cols-6 gap-4 mt-5">
            <div className="col-span-2 md:col-span-1 border-2 border-black">
                <h3 className="font-bold p-2">Apply Filters</h3>
            </div>
            <div className="md:col-span-5 col-span-4 border-black border-2 min-h-[80vh]">
                <h1 className="text-center font-bold text-3xl p-2">Complete Album Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                    {result}
                </div>
            </div>
        </div>
    )
}