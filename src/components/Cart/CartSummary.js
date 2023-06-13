import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { toast } from "react-toastify";

export default function CartSummary({ data }) {
  const Navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(data.total);
  const token = useSelector((state) => state.tokenData.token);

  const initPayment = async (datas) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY,
      amount: datas.amount,
      currency: datas.currency,
      name: "Your Cart",
      description: "Albums Payment",
      order_id: datas.id,
      handler: async (response) => {
        try {
          console.log(response);
          const verifyUrl = "http://localhost:3001/payment/verify";
          const { data } = await axios.post(verifyUrl, response, {
            headers: {
              "x-access-token": token,
            },
          });
          console.log(data);
          Navigate("/profile");
        } catch (error) {}
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    if (data.cart_total == 0) {
      toast.error("Please add items to Cart");
      return;
    }
    try {
      const checoutUrl = "http://localhost:3001/payment/checkout";

      const { data } = await axios.post(
        checoutUrl,
        { data: "data" },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-1/4 xl:w-1/4 w-full bg-gray-900 bg-opacity-10 dark:bg-[#303134] h-full">
      <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
        <div>
          <p className="text-4xl font-black leading-9">Summary</p>
          <div className="flex items-center justify-between pt-16">
            <p className="text-base leading-none ">Subtotal</p>
            <p className="text-base leading-none ">Rs. {data.cart_total}</p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none ">Discount</p>
            <p className="text-base leading-none ">Rs. {data.discount}</p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none ">Tax</p>
            <p className="text-base leading-none ">
              Rs {data.total * (5 / 100)}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-2">
            <p className="text-2xl leading-normal ">Total</p>
            <p className="text-2xl font-bold leading-normal text-right ">
              Rs. {data.total + data.total * (5 / 100)}
            </p>
          </div>
          <button
            onClick={handlePayment}
            className="text-base leading-none w-full py-5 bg-black  border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
