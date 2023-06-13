import { useEffect, useState } from "react";
import axiosAPI from "../axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const useAxios = (url, method, config = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.tokenData.token);
  const location = useLocation();
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token,
  };
  // console.log('in useAxios');

  useEffect(() => {
    console.log("in useEffect", url);

    const getAPIData = async () => {
      try {
        let res;
        // console.log('testing method', method);

        if (method === "GET") {
          // console.log('in get method 1');
          res = await axiosAPI.get(url, { headers });
          // console.log('in get method 2', res);
        } else {
          res = await axiosAPI.post(url, config, { headers });
        }
        // console.log('in useaxiosAPI', res.data, url);
        setData(res.data);
      } catch (error) {
        // console.log("This is error.response", error.response);
        // console.log("This is error.response.data",error.response.data);
        // console.log("This is error.response.status",error.response.status);
        if (error.response.status === 404) {
          navigate("/searchError");
          return;
        } else if (
          error.response.status === 401 &&
          (location.pathname == "/cart" ||
            location.pathname == "/wishlist" ||
            location.pathname == "/profile")
        ) {
          toast.error("Please Login First");
          navigate("/login");
        }
        setError(error);
      }
    };

    // unsubscribe and unmount
    getAPIData();
  }, [url, method]);

  // config in dependency will give infinte loop bcoz it is not a primitive data type
  // solution: see in project => useCallback and another
  return { data, error };
};
