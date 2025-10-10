import React from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import useActive from "../../hooks/useActive";

const ProductCard = (props) => {
  const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

  const { active, handleActive, activeClass } = useActive(false);

  const handleAddItem = () => {
    handleActive(id);
    setTimeout(() => {
      handleActive(false);
    }, 3000);
  };

  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);

  return (
    <div className="bg-zinc-900 text-gray-200 shadow-md hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300 border border-gray-700">
      {/* Product Image */}
      <figure className="relative w-full h-64 overflow-hidden group">
        <Link to={`${path}${id}`}>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Optional tag like “New” or “Sale” */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          Sale
        </span>
      </figure>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between bg-zinc-950">
        {/* Rating */}
        <div className="flex text-yellow-400 mb-2">
          {[...Array(rateCount)].map((_, i) => (
            <IoMdStar key={i} className="text-lg" />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white hover:text-orange-400 line-clamp-2 mb-1">
          <Link to={`${path}${id}`}>{title}</Link>
        </h3>

        {/* Info */}
        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
          {info}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-orange-400">
            {newPrice}
          </h2>
          <small className="text-gray-500 text-sm line-through">{oldPrice}</small>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddItem}
          className={`w-full py-2.5 mt-auto rounded-lg text-white font-medium transition-all duration-300 ${
            active
              ? "bg-green-500 hover:bg-green-600"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {active ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
