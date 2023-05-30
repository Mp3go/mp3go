import { useEffect, useState } from 'react';
import axios from '../axios';

export const useAxios = (url, method, config={}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        if(method==="GET"){
            const res = await axios.get(url);
        }
        else{
            const res = await axios.post(url, config);
        }
        
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    };

    getAPIData();
  }, [url, method]);

  return { data, error };
};
