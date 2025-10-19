import React, { useState } from "react";

import { zustandStore } from "../../Hooks/zustandStore";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, products } = zustandStore();
  const cartProducts = cart.map((id) =>
    products.find((product) => product._id == id)
  );

  let totalInitial = 0;
  cartProducts.map((product) => {
    totalInitial += product.sellPrice;
  });

  const [total, setTotal] = useState(totalInitial);

  return (
    <div className="font-golos px-14 bg-[#f8f8f9] pt-2 mt-4 dark:bg-blue duration-1000">
      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-600 min-h-[220px] flex items-center justify-center ">
          🛒 Savatingiz bo‘sh
        </div>
      ) : (
        <div className="flex  gap-4 font-golos items-start mb-6">
          <div className="flex justify-between flex-col w-full h-auto bg-white rounded-xl dark:bg-blue dark:border">
            <div className="">
              {cartProducts.map((product) => (
                <CartItem product={product} total={total} setTotal={setTotal} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 ">
            <div className="bg-white w-[457px] h-[162px] rounded-xl p-6 dark:bg-blue border">
              <div className="flex flex-col text-left gap-4">
                <p className="text-[20px] font-bold dark:text-white">
                  Sizning buyurtmangiz
                </p>
                <div className="flex justify-between dark:text-white">
                  <p className="text-[16px] font-semibold">Jami</p>
                  <div className="grow border-b border-dashed border-"></div>
                  <p className="text-[16px] font-medium">
                    {total.toLocaleString()} so'm
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-[457px] h-[80px] rounded-xl items-center justify-start flex p-4 dark:bg-blue dark:border">
              <div className="flex  items-center gap-2">
                <div className="w-[48px] h-[48px] bg-[#fdf5f3] rounded-xl"></div>
                <div className="flex flex-col justify-between gap-2">
                  <p className="text-[14px] font-semibold dark:text-white">
                    Yetkazib berish xizmati
                  </p>
                  <p className="text-[12px] underline text-[#0b2b5e] dark:text-red">
                    Ko'proq ma'lumot
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#d92e15] w-[457px] h-[53px] rounded-xl text-white font-semibold justify-center flex items-center dark:text-red dark:bg-white">
              Rasmiylashtirishga otish
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
