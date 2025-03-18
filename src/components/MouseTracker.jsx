import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;

      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute w-2 h-2 bg-gray-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${mousePosition.x - 3}px, ${
            mousePosition.y - 3
          }px)`,
        }}
      ></div>

      <div
        className="absolute -top-2 -left-2 w-8 h-8 md:w-12 md:h-12 border-2 border-gray-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${
            mousePosition.y - 16
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
    </div>
  );
};

export default MouseTracker;
