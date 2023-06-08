import React, { useState } from "react";
import axiosAPI from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phnNumber, setPhnNumber] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault();

    const user = {
      username: name,
      email: email,
      password: password,
      gender: gender,
      phone: phnNumber
    };

    try {
      const res = await axiosAPI.post("/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res ? await res.data : null;
      console.log(data);
      toast.success(data);
      navigate("/login");
    } catch (err) {
      if(err.response.status == 409){
        console.log("before toast",err.response.data)
        toast.error(err.response.data);
        console.log("after toast")
      }
      console.log(err)
    }
  }

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <p className="text-5xl mb-[40px] font-bold font-sans text-[#002D74] dark:text-white ">
        Dive into a World of Musical Marvels - Sign Up Today!
      </p>
      <section classNameName="min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-black flex rounded-2xl shadow-lg max-w-3xl p-6 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] dark:text-white mb-5">
              Sign Up
            </h2>
            <form
              action=""
              className="flex flex-col gap-4 dark:text-black"
              onSubmit={(e) => handleRegister(e)}>
              <input
                required
                className="p-2 rounded-xl border w-full"
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                required
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                required
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                required
                className="p-2 rounded-xl border w-full"
                type="number"
                name="phnumber"
                placeholder="Phone Number"
                onChange={(e) => setPhnNumber(e.target.value)}
                value={phnNumber}
              />
              <label
                htmlFor="gender"
                className="dark:text-white font-semibold text-lg text-[#002D74]">
                Select Your Gender
              </label>
              <select
                required
                id="gender"
                // value={selectedOption}
                // onChange={handleSelectChange}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-2 rounded-xl border">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Trans">Other</option>
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
