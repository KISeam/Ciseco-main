import React from "react";

const AllProductsCard = ({ products, selectedCategory, handleCartProduct }) => {
  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col gap-5">
            <div className="w-full h-[274px] rounded-3xl overflow-hidden border-2 border-gray-200">
              <img
                className="object-cover w-full h-full"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold text-black">{product.title}</h1>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold py-1 px-2 border-2 border-green-500 rounded-xl text-green-500">
                  ${product.price}
                </p>
                <button
                  onClick={() => {
                    handleCartProduct(product);
                  }}
                  className="btn rounded-xl text-black hover:text-white bg-white hover:bg-gray-900"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsCard;
