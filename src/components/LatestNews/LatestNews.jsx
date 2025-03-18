import React, { useEffect, useState } from "react";
import LatestNewsBlogs from "./LatestNewsBlogs";

const LatestNews = ({ blogs }) => {
  return (
    <div className="bg-white py-30">
      <div className="w-10/12 mx-auto bg-gray-100 p-20 rounded-4xl">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-black">
              The latest news.{" "}
              <span className="text-gray-500">From the Ciseco blog</span>
            </h1>
            <div></div>
          </div>
          <LatestNewsBlogs blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
