import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import axios from "axios";
import { Filter } from "@mui/icons-material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchInput = (searchValue) => {
  const [FilterData, setFilterData] = useState([]);

  async function DataChange(searchValue) {
    // console.log(searchValue);
    if (searchValue.target.value === "") {
      return setFilterData([]);
    }
    const data = await axios.get("https://mp3go-558d.onrender.com/albums/all");
    // console.log(data);
    const value = data.data.filter((a) => {
      // console.log(a);
      if (a.name.includes(searchValue.target.value)) {
        return true;
      }
      return false;
    });
    if (value.length > 3) {
      setFilterData(value.slice(0, 3));
    } else {
      setFilterData(value);
    }
  }

  function focusout() {
    setFilterData([]);
  }
  console.log("Filter", FilterData);
  return (
    <div className="flex flex-col z-60" tabIndex={0} onBlur={focusout}>
      <div className="relative cursor-text flex">
        <span className="absolute inset-y-0 flex items-center left-2 pl-2">
          <FontAwesomeIcon className="text-slate-400 h-5" icon={faSearch} />
        </span>
        <input
          onChange={(e) => {
            DataChange(e);
          }}
          className="py-3 px-10 
        text-slate-500 
        focus:outline-none 
        outline-none 
        rounded-md 
        bg-slate-50
        dark:bg-slate-700 
        dark:text-slate-300"
          type="text"
          placeholder="Search for songs"
        />
        <div
          className="flex-1 rounded-md mt-1 w-full flex flex-col justify-center absolute top-full bg-slate-50
        dark:bg-slate-700">
          {FilterData
            ? FilterData.map((data) => {
                return (
                  <Link to={`/music/${data._id}`}>
                    <div className="h-14 mt-0 m-1 z-60 flex items-center bg-white rounded-md">
                      <img
                        className="w-[3.5rem] h-[3.5rem] rounded-md p-1"
                        src={data.img}
                        alt="demo"
                      />
                      <div>{data.name.split(" ").splice(0, 2).join(" ")}</div>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
        <style jsx>{`
        @media (max-width: 640px) {
          input {
            width: 62%;
          }
        }
          @media (max-width: 388px) {
            input {
              width: 40%;
            }
          }
          @media (max-width: 640px) {
            .absolute {
              left: 1rem;
            }
            
            .pl-2 {
              padding-left: 0.5rem;
            }
            }
          
        }
      `}</style>
      </div>
    </div>
  );
};

export default SearchInput;
