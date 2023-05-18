import React,{useState} from "react";
import data from "../Home/Carousel/data";
import Card from "./card"
import Filter from "./filters";

export default function Allalbums(){
    const result = data.map((card) => (
        <Card key={card.id} image={card.imagepath} title={card.albumName} price={card.price}/>
        ))
    return (
        <div className="grid grid-cols-5 gap-2 mt-5 bg-slate-200">
            <div className="col-span-2 md:col-span-1 border-2 border-black p-2 bg-white">
                <h3 className="font-bold text-center">Apply Filters</h3>
                <div className="p-1">
                 <Filter/>
                </div>
            </div>
            <div className="md:col-span-4 col-span-3 border-black border-2 min-h-[80vh] bg-white justify-center">
                <h1 className="text-center font-bold text-3xl p-2">Complete Album Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-2 pt-0 bg-slate-200">
                    {result}
                </div>
            </div>
        </div>
    )
}