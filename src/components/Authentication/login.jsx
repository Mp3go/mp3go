import React from "react";

export default function Login() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <p className="text-5xl mb-[40px] text-center font-bold font-sans text-[#002D74] dark:text-white">
        Reconnect with Your Musical Paradise - Log In Now!
      </p>
      <section classNameName="bg-gray-50 min-h-screen flex items-center justify-center dark:bg-black dark:text-white">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center dark:bg-black dark:text-white">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </div>
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
