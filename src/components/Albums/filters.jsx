import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ReactSlider from 'react-slider';


const animatedComponents = makeAnimated();

let categoryOptions=[{
    value:"Jazz",label:"Jazz"
},{
    value:"Pop",label:"Pop"
},{
    value:"Punjabi",label:"Punjabi"
},{
    value:"Rock",label:"Rock"
}]

let artistOptions=[{
    value:"Beyonce",label:"Beyonce"
},{
    value:"Adel",label:"Adel"
},{
    value:"Rihanna",label:"Rihanna"
},{
    value:"Drake",label:"Drake"
},]


export default function Filter() {
  return (
    <>
    <div>
    <h4 className="font-bold my-3">Select Category</h4>
    <Select
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
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={artistOptions}
      className="text-black z-40"
    />
    </div>
    <div>
    <h4 className="font-bold my-3">Select Price Range</h4>
    <div>Rs<span></span>-Rs<span></span></div>
    <ReactSlider
    className="bg-black mt-3 w-5/6 z-30"
    thumbClassName="bg-black text-white rounded-full p-1"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={1}
/>
    </div>
    </>
  );
}
