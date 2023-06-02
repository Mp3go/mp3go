import { useState } from 'react';
import axiosAPI from '../axios';

export const useLogin = () => {
//   const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const headers = {
    "Content-Type": "application/json",
  }

  async function handleLogin(email, password) {
    console.log("In handle login")
    const user = {
      email: email,
      password: password
    };
    let res;
    try {
      console.log("about to post")
      res = await axiosAPI.post('/login', user, { headers });
      console.log("post data response", res)
    //   setData(res);
      console.log("In use login", res.data);
      localStorage.setItem('token', res.data.token);
    //   setErrorMessage(data.message); //see again
    } catch (error) {
      setErrorMessage(error);
    }

    return res;
  }

  return { handleLogin };
};
