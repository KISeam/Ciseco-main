import React, { useState, useEffect } from "react";
import "../App.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Navbar = ({ count, cartProduct }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      // Update the last scroll position
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const handleCheckboxChange = (product, isChecked) => {
    if (isChecked) {
      setSelectedProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setSelectedProducts((prev) =>
        prev.filter((item) => item.id !== product.id)
      );
    }
  };

  const handleIncrease = (product) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (product) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateTotalQuantity = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  return (
    <>
      <div
        className={`bg-white shadow-lg sticky top-0 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-full xl:w-10/12 mx-auto py-6">
          <div className="flex items-center gap-6">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0874/8928/2359/files/logo.svg?v=1714142588&width=148&height=38&crop=center"
                alt=""
              />
            </div>
            <div className="flex w-[1px] h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <p className="text-black font-semibold">Shops</p>
              <IoIosArrowDown className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="flex gap-4 text-gray-800">
            <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer">
              <TbWorld />
              <p>Language</p>
              <IoIosArrowDown />
            </div>
            <CiSearch className="text-3xl cursor-pointer" />
            <CiUser className="text-3xl cursor-pointer" />
            <div className="relative cursor-pointer cart_icon">
              <label htmlFor="my-drawer-4" className="cursor-pointer">
                <FiShoppingCart className="text-3xl font-bold" />
                <div className="absolute -top-2 -right-2 px-1 pt-[2px] border-2 border-white rounded-full bg-red-600 flex items-center justify-center text-xs text-white">
                  {count}
                </div>
              </label>

              <div className="cart_box absolute -left-[380px] w-[400px] max-h-[500px] z-[300] bg-white shadow-lg rounded-md hidden overflow-y-scroll">
                <ul className="list rounded-box shadow-md">
                  {cartProduct.map((cart) => {
                    const selectedProduct = selectedProducts.find(
                      (item) => item.id === cart.id
                    );
                    const quantity = selectedProduct
                      ? selectedProduct.quantity
                      : 1;

                    return (
                      <li
                        key={cart.id}
                        className="flex items-center justify-between px-4 py-2 border-b border-gray-200"
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                            checked={selectedProducts.some(
                              (item) => item.id === cart.id
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(cart, e.target.checked)
                            }
                          />
                          <img
                            className="size-10 object-cover"
                            src={cart.image}
                            alt={cart.title}
                          />
                          <div>
                            <div>{cart.title}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                            onClick={() => handleDecrease(cart)}
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                            onClick={() => handleIncrease(cart)}
                          >
                            +
                          </button>
                          <div>${(cart.price * quantity).toFixed(2)}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="bg-white py-4">
                  <div className="flex justify-between px-4 text-black">
                    <span>Total Price:</span>
                    <span>${calculateTotalPrice().toFixed(2)}</span>
                  </div>
                  <button
                    className="w-full bg-green-500 text-white py-2 mt-2 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-base-content min-h-full w-[35%] lg:w-[25%] p-4">
            <li>
              <h3 className="text-lg font-bold text-black">Your Cart</h3>
            </li>
            {cartProduct.map((cart) => {
              const selectedProduct = selectedProducts.find(
                (item) => item.id === cart.id
              );
              const quantity = selectedProduct ? selectedProduct.quantity : 1;

              return (
                <li
                  key={cart.id}
                  className="flex justify-between px-4 py-2 border-b border-gray-200 text-black"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                        checked={selectedProducts.some(
                          (item) => item.id === cart.id
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(cart, e.target.checked)
                        }
                      />
                      <img
                        className="size-10 object-cover"
                        src={cart.image}
                        alt={cart.title}
                      />
                      <div>
                        <div>{cart.title}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {cart.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                        onClick={() => handleDecrease(cart)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                        onClick={() => handleIncrease(cart)}
                      >
                        +
                      </button>
                      <div>${(cart.price * quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="bg-white p-4 pr-6 text-base font-semibold">
              <div className="flex justify-between px-4 text-black">
                <span>Total Price:</span>
                <span>${calculateTotalPrice().toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-green-500 text-white py-2 mt-2 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Buy Now
              </button>
            </div>
          </ul>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-4">Order Summary</h3>
          {selectedProducts.length > 0 ? (
            <ul className="space-y-4 mt-4">
              {selectedProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-medium">{product.title}</p>
                    <p className="text-base text-white">{product.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">
                      {product.quantity} x ${product.price.toFixed(2)}
                    </span>
                    <span className="text-lg font-medium">
                      = ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-white text-lg">Your cart is empty</p>
          )}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="flex justify-between text-lg font-medium">
              <span>Total Quantity:</span>
              <strong>{calculateTotalQuantity()}</strong>
            </p>
            <p className="flex justify-between text-lg font-medium">
              <span>Total Price:</span>
              <strong>${calculateTotalPrice().toFixed(2)}</strong>
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg">
                ✕
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Navbar;
