import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/New Arrivals/NewArrivals";
import AllProducts from "../components/AllProducts/AllProducts";
import LatestNews from "../components/LatestNews/LatestNews";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Categories from "../components/Categories/Categories";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [count, setCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCartProduct = (product) => {
    setCartProduct((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        toast.warn(`${product.title} is already in the cart!`);
        return prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.title} added to cart!`);
        setCount((prevCount) => prevCount + 1);
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((json) => setBlogs(json));
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar count={count} cartProduct={cartProduct} />
      <HeroSection />
      <Categories categories={categories} />
      <NewArrivals products={products} handleCartProduct={handleCartProduct} />
      <AllProducts
        categories={categories}
        products={products}
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
        handleCartProduct={handleCartProduct}
      />
      <LatestNews blogs={blogs} />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
