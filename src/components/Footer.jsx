import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t-2 border-gray-300">
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  All collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Backpack
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Home page</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Backpack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home page
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">All collections</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Recycled Blanket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  All collections
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">News</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Backpack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Stay up to date</h3>
              <p className="mb-4">
                Subscribe to our newsletter to get the latest updates and
                special offers.
              </p>
              <div className="flex  border border-gray-300 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 pl-4 rounded-lg"
                />
                <button className="btn  py-7 px-5 transition-colors">
                  <FaChevronRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 flex justify-between">
          <p className="text-sm">
            © 2025Ciseco Hydrogen Main, Inc. All rights reserved.
          </p>
          <div className="flex justify-end">
            <div  className="mr-2 cursor-pointer">
              <img src="https://img.icons8.com/color/24/000000/twitter.png" />
            </div>
            <div className="mr-2 cursor-pointer">
              <img src="https://img.icons8.com/color/24/000000/facebook-new.png" />
            </div>
            <div className=" cursor-pointer">
              <img src="https://img.icons8.com/color/24/000000/youtube-play.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
