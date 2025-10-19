// components/MiniCart.jsx
import React from "react";
import { zustandStore } from "../../Hooks/zustandStore";
import { Link, NavLink } from "react-router-dom";

const MiniCart = () => {
  const { cart, products } = zustandStore();

  const cartProducts = cart.map((id) =>
    products.find((product) => product._id === id)
  );

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-blue border shadow-xl rounded-xl p-4 z-50">
      {cartProducts.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300">
          Savat bo‘sh
        </div>
      ) : (
        <div className="flex flex-col gap-2 max-h-[300px] overflow-y-visible">
          {cartProducts.slice(0, 3).map((product) => (
            <div
              key={product._id}
              className="flex items-center gap-2 border-b pb-2"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold dark:text-white">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {product.sellPrice.toLocaleString()} so'm
                </p>
              </div>
            </div>
          ))}
          <NavLink
            to="/cart"
            className="mt-2 bg-[#d92e15] text-white py-2 rounded text-center text-sm font-medium dark:text-red dark:bg-white"
          >
            Savatga o'tish
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
