import React from "react";
import Example from "./form";
import GoogleMap from "./googlemap";

export default function Contactus({ phone, email }) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 ">
          <h1 className="head text-3xl text font-bold mb-9">Contact Us</h1>
          <ul>
            <li>
              <a
                href={`tel:${phone}`}
                className="text-gray-400 hover:text-white">
                Phone: {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-white">
                Email: {email}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <GoogleMap />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0"></div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <Example />
        </div>
      </div>

      <style jsx>{`
        /* Responsive Styles */
        .head{
          text-
        }
        @media (max-width: 640px) {
          
          .container {
            flex-direction: column;
          }

          .w-full {
            width: 100%;
          }

          .sm:w-1/2,
          .lg:w-1/4 {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}