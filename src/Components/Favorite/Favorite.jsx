import React from "react";
import { zustandStore } from "../../Hooks/zustandStore";
import Card from "../Card/Card";

const Favorite = () => {
  const { favorite, products } = zustandStore();

  const favoriteProducts = products.filter((product) =>
    favorite.includes(product._id.toString())
  );

  return (
    <div className="px-14 py-1 font-golos bg-[#f8f8f9] mt-4 dark:bg-blue duration-1000">
      {favoriteProducts.length === 0 ? (
        <div className="text-center text-xl text-gray-600 min-h-[220px] flex items-center justify-center">
          ❤️ Saralanganlar bo'sh
        </div>
      ) : (
        <div className="flex gap-3 flex-wrap">
          {favoriteProducts.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
