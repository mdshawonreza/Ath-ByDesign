import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import { calculateDiscount, displayMoney } from "../../helpers/utils";
import useDocTitle from "../../hooks/useDocTitle";
import useActive from "../../hooks/useActive";
import cartContext from "../../contexts/cart/cartContext";
import productsData from "../../data/productsData";

const ProductDetails = () => {
  useDocTitle("Product Details");
  const { handleActive, activeClass } = useActive(0);
  const { addItem } = useContext(cartContext);
  const { productId } = useParams();
  const prodId = parseInt(productId);
  const product = productsData.find((item) => item.id === prodId);
  const {
    images,
    title,
    info,
    category,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
  } = product;

  const [previewImg, setPreviewImg] = useState(images[0]);

  const handleAddItem = () => {
    addItem(product);
  };

  useEffect(() => {
    setPreviewImg(images[0]);
    handleActive(0);
  }, [images]);

  const handlePreviewImg = (i) => {
    setPreviewImg(images[i]);
    handleActive(i);
  };

  const discountedPrice = originalPrice - finalPrice;
  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);
  const savedPrice = displayMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 md:gap-12">
        {/* Left Column */}
       {/* Left Column */}
<div className="flex  gap-4 sm:flex-col">
  {/* Thumbnails */}
  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-2">
    {images.map((img, i) => (
      <div
        key={i}
        onClick={() => handlePreviewImg(i)}
        className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-all duration-300 ${
          activeClass(i)
            ? "border-orange-500"
            : "border-gray-700 hover:border-gray-500"
        }`}
      >
        <img className="w-20 h-20 object-cover" src={img} alt="thumbnail" />
      </div>
    ))}
  </div>

  {/* Main Image */}
  <figure className="flex-1 rounded-2xl overflow-hidden shadow-xl w-full h-[400px] sm:h-80">
    <img
      className="w-full h-full object-cover"
      src={previewImg}
      alt="product-preview"
    />
  </figure>
</div>


        {/* Right Column */}
        <div className="space-y-6">
          {/* Title & Info */}
          <h1 className="text-3xl font-bold text-orange-400">{title}</h1>
          <h4 className="text-gray-400 text-lg font-semibold">{info}</h4>

          {/* Ratings */}
          <div className="flex items-center gap-3">
            <span className="flex text-yellow-400">
              {[...Array(rateCount)].map((_, i) => (
                <IoMdStar key={i} className="text-lg" />
              ))}
            </span>
            <span className="text-gray-400">|</span>
            <Link className="text-sm text-orange-400 hover:underline">{ratings} Ratings</Link>
          </div>

          <hr className="border-gray-700" />

          {/* Prices */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-orange-400">{newPrice}</h2>
              <small className="text-gray-400 text-lg line-through">{oldPrice}</small>
            </div>
            <p className="text-sm text-gray-400">
              You save: <span className="text-green-400">{savedPrice}</span> ({savedDiscount}%)
            </p>
            <span className="text-xs text-gray-500">(Inclusive of all taxes)</span>
          </div>

          {/* Stock Badge */}
          <div className="flex items-center gap-2 text-green-500 font-medium">
            <IoMdCheckmark /> In Stock
          </div>

          <hr className="border-gray-700" />

          {/* Offers */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Offers and Discounts</h4>
            <ul className="flex gap-3 flex-wrap mt-4">
              <li className="border border-gray-500 bg-gray-800 rounded px-2 py-1 text-sm">
                No Cost EMI on Credit Card
              </li>
              <li className="border border-gray-500 bg-gray-800 rounded px-2 py-1 text-sm">
                Pay Later & Avail Cashback
              </li>
            </ul>
          </div>

          <hr className="border-gray-700" />

          {/* Add to Cart */}
          <button
            onClick={handleAddItem}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
