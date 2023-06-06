import { useState } from "react";
import axiosAPI from "../axios";
import { useSelector, useDispatch } from "react-redux";
import { addToken, removeToken } from "../redux/token";

export const useLogin = () => {
  //   const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const tokenValue = useSelector((state) => state.tokenData.token);
  const dispatch = useDispatch();
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": tokenValue,
  };

  async function handleLogin(email, password) {
    console.log("In handle login");
    const user = {
      email: email,
      password: password,
    };
    let res;
    try {
      console.log("about to post");
      res = await axiosAPI.post("/login", user, { headers });
      console.log("post data response", res);
      //   setData(res);
      console.log("In use login", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch(addToken(res.data.token));
      //   setErrorMessage(data.message); //see again
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }

    return res;
  }

  return { handleLogin };
};
