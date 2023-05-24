import React from "react";
import Example from "./form";
import GoogleMap from "./googlemap";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-4">
            <li>
              <a
                href="tel:1234567890"
                className="text-gray-400 hover:text-white">
                Phone: (123) 456-7890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@example.com"
                className="text-gray-400 hover:text-white">
                Email: info@example.com
              </a>
            </li>
          </ul>
          <GoogleMap />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0"></div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          {/* Additional footer links or content */}
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <Example />
        </div>
      </div>
      
      <style jsx>{`
        /* Responsive Styles */
        @media (max-width: 640px) {
          .container {
            flex-direction: column;
          }
          
          .w-full {
            width: 100%;
          }
          
          .sm:w-1/2, .lg:w-1/4 {
            width: 100%;
          }
        }
        
        /* Add more media queries for other screen sizes if needed */
      `}</style>
    </footer>
  );
}

export default Footer;
