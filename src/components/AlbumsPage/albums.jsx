import React, { useState, useEffect } from "react";
import data from "../Home/Carousel/data";
import Card from "./card";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ReactSlider from "react-slider";

const animatedComponents = makeAnimated();

let categoryOptions = [
  {
    value: "Jazz",
    label: "Jazz",
  },
  {
    value: "PoP",
    label: "PoP",
  },
  {
    value: "Punjabi",
    label: "Punjabi",
  },
  {
    value: "Rock",
    label: "Rock",
  },
];

let artistOptions = [
  {
    value: "Beyonce",
    label: "Beyonce",
  },
  {
    value: "Adel",
    label: "Adel",
  },
  {
    value: "Rihanna",
    label: "Rihanna",
  },
  {
    value: "Drake",
    label: "Drake",
  },
];

export default function Allalbums() {
  const [category, setCategory] = useState([]);
  const [artist, setArtist] = useState([]);
  const [dataa, setData] = useState(data);
  const [range, setRange] = useState({ min: 0, max: 100 });
  useEffect(() => {
    if (category.length) {
      let result = data.filter((ele) => {
        if (
          category.includes(ele.albumName) &&
          range.min <= ele.price &&
          ele.price <= range.max
        ) {
          return true;
        }
        return false;
      });
      setData(result);
    } else {
      setData(data);
    }
  }, [category, artist, range]);

  function handleCategoryChange(event) {
    let category = [];
    event.forEach((item) => {
      category.push(item.value);
    });
    setCategory(category);
  }

  function handleArtistChange(event) {
    let artist = [];
    event.forEach((item) => {
      artist.push(item.value);
    });
    setArtist(artist);
  }

  function handlemin(data) {
    setRange({ min: data[0], max: data[1] });
  }
  return (
    <div className="grid grid-cols-5 gap-2 mt-5">
      <div className="col-span-2 md:col-span-1 border-2 p-2">
        <h3 className="font-bold text-center">Apply Filters</h3>
        <div className="p-1">
          <div>
            <h4 className="font-bold my-3">Select Category</h4>
            <Select
              onChange={handleCategoryChange}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={categoryOptions}
              className="text-black z-50"
            />
          </div>
          <div>
            <h4 className="font-bold my-3">Select Artist</h4>
            <Select
              onChange={handleArtistChange}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={artistOptions}
              className="text-black z-40"
            />
          </div>
          <div>
            <h4 className="font-bold my-3">Select Price Range</h4>
            <div>
              Rs<span></span>-Rs<span></span>
            </div>
            <ReactSlider
              className="bg-black mt-3 w-5/6 z-30"
              thumbClassName="bg-black text-white rounded-full p-1"
              trackClassName="example-track"
              defaultValue={[0, 100]}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
              pearling
              minDistance={1}
              onAfterChange={handlemin}
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-4 col-span-3 min-h-[80vh] justify-center">
        <h1 className="text-center font-bold text-3xl p-2">
          Complete Album Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-2 pt-0 ">
          {dataa.map((card) => (
            <Card
              image={card.imagepath}
              title={card.albumName}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
