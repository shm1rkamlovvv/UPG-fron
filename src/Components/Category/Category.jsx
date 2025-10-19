import { useParams } from "react-router-dom";
import { zustandStore } from "../../Hooks/zustandStore";
import Card from "../Card/Card";

const Category = () => {
  const { slug } = useParams();
  const { categories } = zustandStore();

  // slug orqali categoryni topish
  const categoryData = categories.find((category) => category.slug === slug);

  if (!categoryData) {
    return (
      <div className="text-center text-red-600 p-10">
        Bunday kategoriya topilmadi.
      </div>
    );
  }

  return (
    <div>
      {/* Desktop */}
      <div className="px-14 py- hidden lg:flex flex-col my-3">
        <h1 className="text-3xl font-semibold mb-">
          {categoryData.categoryName}
        </h1>
        <div className="flex justify-between gap-3 flex-wrap ">
          {categoryData.products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="px-14  lg:hidden flex-col justify-center flex">
        <h1 className="text-3xl font-semibold mb-3">
          {categoryData.categoryName}
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {categoryData.products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
