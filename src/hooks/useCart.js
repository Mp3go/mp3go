import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItems } from "../redux/usercart";
import { toast } from "react-toastify";

export const useCart = () => {
  const token = useSelector((state) => state.tokenData.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function addtoCart(id, action) {
    try {
      if (action === "add") {
        let res = await axios.post(
          "http://localhost:3001/user/cart",
          {
            albumId: id,
          },
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        toast.success("Item Added to Cart");
        dispatch(addCartItems(res.data));
        navigate("/cart");
      } else if (action === "rem") {
        const res = await axios.delete(
          "http://localhost:3001/user/cart-delete-item",
          {
            headers: {
              "x-access-token": token,
            },
            data: {
              albumId: id,
            },
          }
        );
        toast.success("Item Removed From the Cart");
        console.log(res.data);
        dispatch(addCartItems(res.data));
        navigate("/cart");
      } else if (action === "iqty") {
        let res = await axios.post(
          "http://localhost:3001/user/cart/qty",
          {
            albumId: id,
            method: "increment",
          },
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        toast.success("Quantity Increased");
        console.log(res.data);
        dispatch(addCartItems(res.data));
        navigate("/cart");
      } else if (action === "dqty") {
        let res = await axios.post(
          "http://localhost:3001/user/cart/qty",
          {
            albumId: id,
            method: "decrement",
          },
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        toast.success("Quantity Decreased");
        console.log(res.data);
        dispatch(addCartItems(res.data));
        navigate("/cart");
      }
    } catch (err) {
      if (err.response.status === 401) {
        toast.warning(err.response.data.message);
      } else if (err.response.status === 409) {
        toast.error(err.response.data.message);
      }
      console.log("error Found in useCart");
    }
  }

  return { addtoCart };
};
