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
},]

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
    />
    </div>
    <div>
    <h4 className="font-bold my-3">Select Artist</h4>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={artistOptions}
    />
    </div>
    <div>
    <h4 className="font-bold my-3">Select Price Range</h4>
    <div>Rs<span></span>-Rs<span></span></div>
    <ReactSlider
    className="text-black"
    thumbClassName="bg-black-100"
    trackClassName="bg-green"
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
