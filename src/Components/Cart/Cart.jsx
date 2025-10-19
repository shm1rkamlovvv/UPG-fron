import React, { useState, useEffect } from "react";
import { zustandStore } from "../../Hooks/zustandStore";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, products } = zustandStore();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // 🔄 Savatcha o'zgarganda yangilash
  useEffect(() => {
    const items = cart.map((id) => products.find((p) => p._id === id)).filter(Boolean);
    setCartProducts(items);
    const sum = items.reduce((acc, p) => acc + (p.sellPrice || 0), 0);
    setTotal(sum);
  }, [cart, products]);

  return (
    <div className="font-golos px-4 sm:px-8 lg:px-14 bg-[#f8f8f9] pt-4 min-h-screen dark:bg-[#0b1534] transition-all duration-700">
      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-600 dark:text-gray-300 min-h-[220px] flex items-center justify-center">
          🛒 Savatingiz bo‘sh
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 font-golos items-start mb-10">
          {/* 🛍️ Mahsulotlar */}
          <div className="flex-1 bg-white rounded-xl dark:bg-[#1e293b] border dark:border-gray-700 p-4">
            {cartProducts.map((product) => (
              <CartItem
                key={product._id}
                product={product}
                total={total}
                setTotal={setTotal}
              />
            ))}
          </div>

          {/* 💰 Jami va Yetkazib berish */}
          <div className="flex flex-col gap-4 w-full lg:w-[400px]">
            <div className="bg-white rounded-xl p-6 dark:bg-[#1e293b] border dark:border-gray-700">
              <h2 className="text-[20px] font-bold mb-4 dark:text-white">
                Sizning buyurtmangiz
              </h2>
              <div className="flex justify-between items-center dark:text-white">
                <p className="text-[16px] font-semibold">Jami</p>
                <div className="grow border-b border-dashed mx-2 border-gray-300"></div>
                <p className="text-[16px] font-medium">
                  {total.toLocaleString()} so'm
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 flex items-center gap-3 dark:bg-[#1e293b] border dark:border-gray-700">
              <div className="w-[48px] h-[48px] bg-[#fdf5f3] rounded-xl flex items-center justify-center">
                🚚
              </div>
              <div>
                <p className="text-[14px] font-semibold dark:text-white">
                  Yetkazib berish xizmati
                </p>
                <p className="text-[12px] underline text-[#0b2b5e] dark:text-[#f87171] cursor-pointer">
                  Ko'proq ma'lumot
                </p>
              </div>
            </div>

            <button className="bg-[#d92e15] hover:bg-[#b2220f] w-full h-[53px] rounded-xl text-white font-semibold flex justify-center items-center transition-all duration-300 dark:bg-white dark:text-[#d92e15]">
              Rasmiylashtirishga o‘tish 🛍️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
