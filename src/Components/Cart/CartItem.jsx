import React, { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { zustandStore } from "../../Hooks/zustandStore";

const CartItem = ({ product, total, setTotal }) => {
  const { removeFromCart, addToFavorite, favorite } = zustandStore();
  const { _id, name, images, sellPrice } = product;

  const [count, setCount] = useState(1);

  const isFavorite = favorite.includes(_id.toString());

  // useEffect(() => {
  //   setTotal((prev) => prev + sellPrice);
  // }, []);

  function increase() {
    setCount((prev) => prev + 1);
    setTotal((prev) => prev + sellPrice);
  }

  function decrease() {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setTotal((prev) => prev - sellPrice);
    }
  }

  return (
    <div className="border m-4 rounded-xl dark:bg-blue dark:border-white">
      <div className="items-center lg:flex">
        <div className="flex flex-col w-full justify-between">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-6">
              <img
                src={images[0]}
                alt={name}
                className="w-[124px] h-[124px] object-contain"
              />
              <div className="flex flex-col gap-4 items-start dark:text-white">
                <p className="font-bold">{name}</p>

                <button className="text-[12px] px-3 py-0.5 rounded-lg text-[#d92e15] bg-[#fdf5f3] dark:text-white dark:bg-red">
                  {(sellPrice / 12).toLocaleString()} soʻm/oyiga
                </button>

                <div className="text-gray-600 flex items-center gap-6 text-[12px] font-semibold dark:text-white">
                  <button
                    onClick={() => {
                      setTotal((prev) => prev - sellPrice * count);
                      removeFromCart(_id);
                    }}
                  >
                    O'chirish
                  </button>

                  {isFavorite ? (
                    <span className="text-green-600 font-normal">
                      ✅ Saralanganlarda bor
                    </span>
                  ) : (
                    <button
                      onClick={() => addToFavorite(_id)}
                      className="text-red-600"
                    >
                      ❤️ Saralanganlarga qo‘shish
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <p className="text-xl font-semibold text-moviy dark:text-white">
                {sellPrice.toLocaleString()} so'm
              </p>

              <div className="flex items-center gap-10 bg-[#f8f8f9] p-1 rounded-lg dark:bg-blue dark:text-white">
                <button onClick={decrease} disabled={count <= 1}>
                  <AiOutlineMinus size={20} />
                </button>
                <p>{count}</p>
                <button onClick={increase}>
                  <GoPlus size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
