import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  PiShoppingCartSimpleFill,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import { zustandStore } from "../../Hooks/zustandStore";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const {
    addToFavorite,
    removeFromFavorite,
    favorite,
    cart,
    addToCart,
    removeFromCart,
  } = zustandStore();

  const [isFavorite, setIsFavorite] = useState(favorite.includes(product?._id));
  const [isCart, setIsCart] = useState(cart.includes(product?._id));
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const navigate = useNavigate();

  if (!product) return null;

  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["https://via.placeholder.com/240x240?text=No+Image"];

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    const index = Math.floor(percent * images.length);
    setHoveredImageIndex(index >= images.length ? images.length - 1 : index);
  };

  const handleMouseLeave = () => setHoveredImageIndex(0);

  const handleFavorite = () => {
    if (!isFavorite) {
      addToFavorite(product._id);
      setIsFavorite(true);
    } else {
      removeFromFavorite(product._id);
      setIsFavorite(false);
    }
  };

  const handleCart = () => {
    if (isCart) {
      removeFromCart(product._id);
      setIsCart(false);
    } else {
      addToCart(product._id);
      setIsCart(true);
    }
  };

  const handleClick = () => navigate(`/products/${product._id}`);

  const fullPrice = product.fullPrice || product.price || 0;
  const sellPrice = product.sellPrice || product.price || 0;

  return (
    <div
      className="
        bg-white dark:bg-[#1a1a2e]
        border border-pink-100
        rounded-2xl shadow-md hover:shadow-xl
        transition-all duration-500
        p-4 relative group
        w-full sm:w-[275px]
        h-auto sm:h-[420px]
        flex flex-col justify-between
      "
    >
      {/* ❤️ Favorite */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 z-10 text-xl transition-all hover:scale-110"
      >
        {isFavorite ? (
          <FaHeart className="text-2xl text-pink-500" />
        ) : (
          <FaRegHeart className="text-2xl text-gray-400" />
        )}
      </button>

      {/* 🖼️ Image */}
      <div
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer flex justify-center items-center w-full"
      >
        <img
          src={images[hoveredImageIndex]}
          alt={product.name || product.title || "Mahsulot"}
          className="
            w-full sm:w-[240px] h-[200px] sm:h-[240px]
            object-contain rounded-xl
            transition-transform duration-300 group-hover:scale-105
          "
        />
      </div>

      {/* 📦 Product Info */}
      <div className="flex flex-col gap-2 mt-3 items-start">
        <p className="text-[15px] font-semibold text-gray-800 dark:text-white line-clamp-1">
          {product.name || product.title || "Noma’lum mahsulot"}
        </p>
        <button className="text-sm font-medium text-pink-600 bg-pink-50 border border-pink-200 rounded-lg px-3 py-1 shadow-sm">
          {(sellPrice / 12).toLocaleString()} so‘m/oyiga
        </button>
      </div>

      {/* 💰 Price & Cart */}
      <div className="flex justify-between items-center mt-4">
        <div>
          {fullPrice !== sellPrice && (
            <p className="text-xs text-gray-400 line-through">
              {fullPrice.toLocaleString()} so‘m
            </p>
          )}
          <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
            {sellPrice.toLocaleString()} so‘m
          </p>
        </div>

        <button
          onClick={handleCart}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {isCart ? (
            <PiShoppingCartSimpleFill size={26} />
          ) : (
            <PiShoppingCartSimpleLight size={26} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
