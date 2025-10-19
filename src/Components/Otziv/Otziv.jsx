import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Footer from "../Footer/Footer";

const Otziv = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-10 text-black">
        ОТЗЫВЫ КЛИЕНТОВ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <a
          href="https://yandex.uz/maps/org/upg/124982657071/reviews/?ll=69.246823%2C41.321262&z=16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center bg-gray-100 border border-gray-200 p-12 rounded-sm hover:shadow-md transition-all">
            <p className="text-pink-600 text-lg mb-2 font-medium">
              Общий рейтинг
            </p>
            <p className="text-7xl font-solid text-gray-800 mb-2">95%</p>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://yandex.uz/maps/org/upg/124982657071/reviews/?ll=69.246823%2C41.321262&z=16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center bg-gray-100 border border-gray-200 p-[77px] rounded-sm hover:shadow-md transition-all">
            <p className="text-pink-600 text-lg mb-2 font-medium">Yandex.uz</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 hover:text-pink-600 transition-colors">
                Оставить свой отзыв
              </p>
              <ArrowRight className="text-gray-700 w-5 h-5" />
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="https://yandex.uz/maps/org/upg/124982657071/reviews/?ll=69.246823%2C41.321262&z=16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center bg-gray-100 border border-gray-200 p-[73px] rounded-sm hover:shadow-md transition-all">
            <div className="flex text-pink-600 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-pink-600" />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-sm">
                93% покупателей купили бы здесь снова
              </p>
              <ArrowRight className="text-gray-700 w-5 h-5" />
            </div>
          </div>
        </a>

        {/* Card 4 */}
        <a
          href="https://yandex.uz/maps/org/upg/124982657071/reviews/?ll=69.246823%2C41.321262&z=16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center bg-gray-100 border border-gray-200 p-[70px] rounded-sm hover:shadow-md transition-all">
            <p className="text-pink-600 text-lg mb-2 font-medium">500+</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-sm">
                Положительных оценок за все время работы
              </p>
              <ArrowRight className="text-gray-700 w-5 h-5" />
            </div>
          </div>
        </a>
      </div>
    </section>
    
    </>
  );
};

export default Otziv;
