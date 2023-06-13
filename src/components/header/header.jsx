/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchInput from "./search/SearchInput";
import Dropdown from "./dropit";
import { BsHeart, BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../../redux/token";
import { removeWishlistItems } from "../../redux/userWishlit";
import { removeCartItems } from "../../redux/usercart";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { addWishlistItems } from "../../redux/userWishlit";
import { addCartItems } from "../../redux/usercart";
import { useEffect } from "react";

import ToggleButton from "../toggle-button/togglebutton";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Album", href: "/albums", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const tokenValue = useSelector((state) => state.tokenData.token);
  const { data: value, error } = useAxios("/user/cart", "GET");
  const { data: value2, error: error2 } = useAxios("/user/wishlist", "GET");

  useEffect(() => {
    dispatch(addWishlistItems(value2));
    dispatch(addCartItems(value));
  }, [value, value2, error, error2]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.userWishlist.userWishlist);
  const userCart = useSelector((state) => state.userCart.userCart);

  function logoutUser() {
    dispatch(removeToken());
    dispatch(removeCartItems());
    dispatch(removeWishlistItems());
    navigate("/");
  }
  console.log("Cloudinary", process.env.REACT_APP_CLOUDINARY);
  return (
    <Disclosure as="nav" className="bg-gray-800 dark:bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://th.bing.com/th/id/R.a4f2b68efcdab59b56c5d79999cd11ed?rik=k6%2bQMyi7L5bQmg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcd%2fgAz%2fRcdgAzXgi.png&ehk=omBZAIcB0SJO0ysB9q96pyTK%2bvaadtx0Mjk1FqsvKSE%3d&risl=&pid=ImgRaw&r=0"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://th.bing.com/th/id/R.a4f2b68efcdab59b56c5d79999cd11ed?rik=k6%2bQMyi7L5bQmg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcd%2fgAz%2fRcdgAzXgi.png&ehk=omBZAIcB0SJO0ysB9q96pyTK%2bvaadtx0Mjk1FqsvKSE%3d&risl=&pid=ImgRaw&r=0"
                    alt="Your Company"
                  />
                </div>
                <div className="flex">
                  <SearchInput />
                </div>
                <div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      ))}
                      <Dropdown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex flex-row items-center p-2 justify-between text-white">
                  <div className="text-white">
                    <ToggleButton />
                  </div>
                  <Link to="/wishlist">
                    <div className="flex flex-row">
                      <BsHeart />
                      <sup>
                        (
                        {wishlist
                          ? wishlist.length > 0
                            ? wishlist.length
                            : 0
                          : 0}
                        )
                      </sup>
                    </div>
                  </Link>

                  <Link to="/cart">
                    <div className="flex flex-row">
                      <BsCartFill />
                      <sup>
                        (
                        {userCart
                          ? Object.keys(userCart).length
                            ? userCart.items.length
                            : 0
                          : 0}
                        )
                      </sup>
                    </div>
                  </Link>
                </div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {tokenValue ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={logoutUser}
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                Sign out
                              </div>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                Log In
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/signup"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                Sign Up
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 640px) {
              .btus {
              }
            }
          `}</style>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
