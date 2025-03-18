import React from "react";

const Categories = ({ categories }) => {
  const filteredCategories = categories.filter(
    (category) => category.name !== "All"
  );

  return (
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Categories
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
            Explore our wide range of product categories and find what suits
            your needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              {/* Category Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-primary-100 transition-colors duration-300">
                <img
                  className="w-6 h-6 object-contain"
                  src={category.icon}
                  alt={category.name}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
