import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import useActive from "../../hooks/useActive";
import productsData from "../../data/productsData";
import ProductCard from "./ProductCard";

const TopProducts = () => {
  const [products, setProducts] = useState(productsData);
  const { activeClass, handleActive } = useActive(0);

  // unique product categories
  const productsCategory = [
    "All",
    ...new Set(productsData.map((item) => item.category)),
  ];

  // handle filtering
  const handleProducts = (category, i) => {
    if (category === "All") {
      setProducts(productsData);
      handleActive(i);
      return;
    }

    const filteredProducts = productsData.filter(
      (item) => item.category === category
    );
    setProducts(filteredProducts);
    handleActive(i);
  };

  return (
    <section className="py-10 bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Top Products
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {productsCategory.map((item, i) => (
            <button
              key={i}
              onClick={() => handleProducts(item, i)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeClass(i)
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 border-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 11).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}

          {/* Browse More Card */}
          <div className="flex items-center justify-center border-2 border-dashed border-zinc-400 rounded-2xl text-zinc-400 hover:text-orange-600 hover:border-orange-500 bg-white dark:bg-zinc-950 transition-all duration-300 cursor-pointer">
            <Link
              to="/all-products"
              className="flex flex-col items-center justify-center text-center text-lg font-medium py-10 px-5"
            >
              Browse All
              <br />
              Products
              <BsArrowRight className="text-2xl mt-2 animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
