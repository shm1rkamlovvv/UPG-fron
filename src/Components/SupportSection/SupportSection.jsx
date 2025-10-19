import React from "react";
import { ArrowRight, DollarSign, HelpCircle, Box } from "lucide-react";
import Otziv from "../Otziv/Otziv";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-10 text-black">
        ПОДДЕРЖКА
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link to = "/aplata">
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 p-10 rounded-sm text-center hover:shadow-md transition-all">
          <DollarSign className="text-pink-600 w-12 h-12 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Оплата</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Информация о оплате
          </p>
          <ArrowRight className="text-gray-700" />
        </div>
        </Link>

        {/* Card 2 */}
        <Link to="/faq">
          <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 p-10 rounded-sm text-center hover:shadow-md transition-all">
            <HelpCircle className="text-pink-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">FAQ</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Все вопросы и ответы
            </p>
            <ArrowRight className="text-gray-700" />
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/dostavka">
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 p-10 rounded-sm text-center hover:shadow-md transition-all">
          <Box className="text-pink-600 w-12 h-12 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Доставка</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Информация о доставке
          </p>
          <ArrowRight className="text-gray-700" />
        </div>
        </Link>
      </div>
    </section>
    <Otziv />
    </>
  );
};

export default SupportSection;
