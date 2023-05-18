import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen,music }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className="flex flex-col justify-center w-[20rem] h-[100%] rounded-[10px] object-none"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
     <div className="md:w-full sm:w-75% w-25% h-full flex flex-col justify-end" style={{ 
      backgroundImage: `url(${imagen})`,
      backgroundSize: "100% 100%", 
    }}>
     {/* <img src={imagen} className="w-full h-[100px] rounded-[20px]" alt="" /> */}
      <div className="p-2 font-bold">{music}</div>
      <div className="flex justify-center align-center">
        <button className="bg-none text-white text-[1.2rem] border-0 outline-0 w-full py-[1rem] m-0 transition ease-in-out delay-150 hover:scale-y-110 duration-300 bg-black">Listen More</button>
      </div>
     </div>
    </animated.div>
  );
}

export default Card;