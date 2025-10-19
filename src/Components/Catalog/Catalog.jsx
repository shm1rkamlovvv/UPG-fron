// Components/Catalog/Catalog.jsx
import React from "react";
import { zustandStore } from "../../Hooks/zustandStore";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { categories } = zustandStore();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📦 Katalog</h2>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category._id}>
            <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.products?.slice(0, 5).map((product) => (
                <Link
                  to={`/products/${product._id}`}
                  key={product._id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-3"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <div className="mt-2">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500 line-through">
                      {product.fullPrice} so'm
                    </p>
                    <p className="text-red-600 font-bold">
                      {product.sellPrice} so'm
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
