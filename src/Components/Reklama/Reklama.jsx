import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AboutCompany from "../AboutCompany/AboutCompany";

const Reklama = () => {
  useEffect(() => {
    // Sahifa yuklanganda animatsiyani ishga tushirish
    const section = document.querySelector(".reklama-section");
    section.classList.add("opacity-100", "translate-y-0");
  }, []);

  return (
    <>
      {/* Reklama bo‘limi */}
      <section
        className="reklama-section w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-white relative overflow-hidden 
        opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        {/* Chap taraf - Matn */}
        <div className="md:w-1/2 flex flex-col gap-6 z-10">
          <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide">
            Конфигуратор
          </h2>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            Конфигуратор системного блока UPGrade поможет подобрать
            комплектацию ПК и проверить комплектующие на совместимость.
            Выбирайте, сравнивайте характеристики, заказывайте дополнительные
            опции для создания конфигурации своей мечты!
          </p>

          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium text-[15px] px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 w-fit transition-all">
            Подобрать ПК <ArrowRight size={20} />
          </button>
        </div>

        {/* O‘ng taraf - Rasm */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          {/* Orqa fon - pushti nur */}
          <div className="absolute w-[400px] h-[400px] bg-pink-400 blur-[150px] opacity-40 rounded-full top-1/2 -translate-y-1/2"></div>

          <img
            src="https://files.ox-sys.com/cache/original/image/c0/c7/eb/c0c7eb9642f27583a30c1699c0366c28fb50e748ff93266aac8ae79c7099af04.png"
            alt="PC Configurator"
            className="relative z-10 w-[700px] object-contain animate-float"
          />
        </div>
      </section>

      {/* AboutCompany alohida bo‘limda chiqadi */}
      <AboutCompany />
    </>
  );
};

export default Reklama;
