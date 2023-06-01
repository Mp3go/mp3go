import { useEffect, useState } from "react";
import axiosAPI from "../axios";
import { useNavigate } from "react-router-dom";

export const useAxios = (url, method, config = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log("in useAxios");

  useEffect(() => {
    console.log("in useEffect", url);

    const getAPIData = async () => {
      try {
        let res;
        console.log("testing method", method);
        if (method === "GET") {
          console.log("in get method 1");
          res = await axiosAPI.get(url);
          console.log("in get method 2", res);
        } else {
          res = await axiosAPI.post(url, config);
        }
        console.log("in useaxiosAPI", res.data, url);
        setData(res.data);
      } catch (error) {
        // console.log("This is error.response", error.response);
        // console.log("This is error.response.data",error.response.data);
        // console.log("This is error.response.status",error.response.status);
        if (error.response.status === 404) {
          navigate("/searchError");
          return;
        } else {
          navigate("/searchError");
          return;
        }

        setError(error);
      }
    };

    // unsubscribe and unmount
    getAPIData();
  }, [url, method]);

  return { data, error };
};
