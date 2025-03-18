import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // State to track the current slide

  // Auto-sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1); // Loop through slides 1-4
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to handle manual navigation
  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div>
      <div className="carousel w-full h-[80vh] relative overflow-hidden">
        {/* Slide 1 */}
        <div
          id="slide1"
          className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1621018987439-ebca083ef360?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          id="slide2"
          className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1726869666570-ce90e9825f59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          id="slide3"
          className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1699832728171-cf774fa92150?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          id="slide4"
          className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === 4 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="https://modveste.com/cdn/shop/articles/Modveste_-_Web_Banner_-_1590_x_700_-_Op2.jpg?v=1695147092"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() => goToSlide(currentSlide === 1 ? 4 : currentSlide - 1)}
            className="btn btn-circle bg-white text-black"
          >
            ❮
          </button>
          <button
            onClick={() => goToSlide(currentSlide === 4 ? 1 : currentSlide + 1)}
            className="btn btn-circle bg-white text-black"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
