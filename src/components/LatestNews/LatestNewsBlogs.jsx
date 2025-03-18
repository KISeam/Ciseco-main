import React, { useState, useEffect } from "react";

const LatestNewsBlogs = ({ blogs }) => {
  const [bigCard, setBigCard] = useState(null);
  const [smallCards, setSmallCards] = useState([]);

  useEffect(() => {
    if (blogs.length > 0) {
      setBigCard(blogs.find((blog) => blog.id === 1));
      setSmallCards(blogs.filter((blog) => blog.id !== 1));
    } else {
      setBigCard(null);
      setSmallCards([]);
    }
  }, [blogs]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-2 gap-10">
        <div>
        {bigCard && (
          <div className="flex flex-col gap-5">
            <div className="h-[450px] rounded-3xl overflow-hidden border-2 border-gray-200">
              <img
                className="object-cover w-full h-full"
                src={bigCard.image}
                alt={bigCard.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold text-black">{bigCard.title}</h1>
              <p className="text-sm text-gray-500">{bigCard.content}</p>
              <div className="flex justify-between items-center">
                <button className="btn rounded-xl text-black hover:text-white bg-white hover:bg-gray-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
        <div className="flex flex-col gap-10">
          {smallCards.map((blog) => (
            <div key={blog.id} className="flex gap-5">
              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-lg font-bold text-black">{blog.title}</h1>
                <p className="text-sm text-gray-500">{blog.content}</p>
                <div className="flex justify-between items-center">
                  <button className="btn rounded-xl text-black hover:text-white bg-white hover:bg-gray-900">
                    Read More
                  </button>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-gray-200">
                <img
                  className="object-cover w-full h-full"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsBlogs;
