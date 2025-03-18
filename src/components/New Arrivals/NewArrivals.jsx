import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NewArrivalsCard from "./NewArrivalsCard";

const NewArrivals = ({ products, handleCartProduct }) => {
  return (
    <div className="bg-white py-30">
      <div className="w-10/12 mx-auto bg-gray-100 p-20 rounded-4xl">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-black">
              The latest news.{" "}
              <span className="text-gray-500">From the Ciseco blog</span>
            </h1>
            <div className="flex justify-center items-center gap-1">
              <button className="btn rounded-full py-7 px-5">
                <FaChevronLeft className="text-xl" />
              </button>
              <button className="btn rounded-full py-7 px-5">
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>
          <NewArrivalsCard
            products={products}
            handleCartProduct={handleCartProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
