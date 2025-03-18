import React from "react";
import AllProductsCard from "./AllProductsCard";

const AllProducts = ({
  categories,
  products,
  handleCategory,
  selectedCategory,
  handleCartProduct,
}) => {
  return (
    <div className="bg-white py-30">
      <div className="w-9/12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold text-black">All Products</h1>
            <ul className="flex gap-3 p-2 rounded-full shadow-xl bg-white">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={`btn rounded-full py-3 px-6 cursor-pointer ${
                    selectedCategory?.id === category.id
                      ? "bg-gray-900 text-white"
                      : "text-black hover:text-white bg-white hover:bg-gray-900"
                  }`}
                  onClick={() => handleCategory(category)}
                >
                  <img className="w-5 h-5" src={category.icon} alt="" />{" "}
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <AllProductsCard
              products={products}
              selectedCategory={selectedCategory}
              handleCartProduct={handleCartProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
