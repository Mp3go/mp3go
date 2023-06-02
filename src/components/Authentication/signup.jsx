import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <p className="text-5xl mb-[40px] font-bold font-sans text-[#002D74] dark:text-white ">
        Dive into a World of Musical Marvels - Sign Up Today!
      </p>
      <section classNameName="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-black flex rounded-2xl shadow-lg max-w-3xl p-6 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] dark:text-white mb-5">
              Sign Up
            </h2>
            <form action="" className="flex flex-col gap-4 dark:text-black">
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="p-2 rounded-xl border w-full"
                type="number"
                name="phnumber"
                placeholder="Phone Number"
              />
              <label
                htmlFor="gender"
                className="dark:text-white font-semibold text-lg text-[#002D74]">
                Select Your Gender
              </label>
              <select
                id="gender"
                // value={selectedOption}
                // onChange={handleSelectChange}
                className="p-2 rounded-xl border">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Trans">Trans</option>
              </select>

              <button className="bg-[#002D74] dark:bg-[#20212499] rounded-xl text-white py-2 hover:scale-105 duration-300">
                SignUp
              </button>
            </form>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://thumbs.dreamstime.com/b/teenager-boy-listening-to-music-headhones-guy-using-smartphone-audio-player-vector-illustration-teenager-boy-listening-to-157076855.jpg"
              alt="User"
            />
          </div>
        </div>
      </section>
    </div>
  );
}