import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [testimonials]);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white text-black">
      <h1 className="text-4xl font-bold text-black flex items-center gap-3">
        Good news from far away <span className="text-3xl">🏅</span>
      </h1>
      <p className="text-gray-500 text-xl mt-4 mb-6">
        Let's see what people think of Ciseco
      </p>

      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full min-w-full p-6 text-center bg-white border border-gray-200"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto border-2 border-gray-300"
              />
              <p className="text-gray-700 mt-4 text-center">
                {testimonial.text}
              </p>
              <h3 className="font-bold mt-2 text-center">{testimonial.name}</h3>
              <div className="flex justify-center mt-1">
                <span className="text-yellow-500 text-lg">
                  {testimonial.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={prevTestimonial}
          className="btn rounded-full py-7 px-5 transition-colors"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextTestimonial}
          className="btn rounded-full py-7 px-5 transition-colors"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
