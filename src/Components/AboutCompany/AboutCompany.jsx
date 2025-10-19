import React from "react";
import { ArrowRight } from "lucide-react";
import SupportSection from "../SupportSection/SupportSection";

const AboutCompany = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-8 md:px-16">
      
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-10 text-black">
      О КОМПАНИИ
     </h2>
     

     <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
       {/* Left Image */}
       <div className="w-full lg:w-1/2 flex justify-center">
         <img
           src="https://files.ox-sys.com/cache/original/image/36/94/94/3694947a86fda51618fea2564bd2a93232511cd2b749880349a06870cdf80e87.jpg" // 🔹 rasmingni shu papkaga joylashtir (public/images/)
           alt="Команда"
           className=" w-full max-w-[600px] object-contain"
         />
       </div>

       {/* Right Text */}
       <div className="w-full lg:w-1/2 flex flex-col gap-6">
         <h2 className="text-3xl md:text-4xl font-bold text-black">
           О компании
         </h2>
         <p className="text-gray-700 leading-relaxed text-[16px]">
           С 2009 года мы продаем компьютерную технику в Узбекистане. Мы —
           официальные партнеры многих международных компаний, что гарантирует
           качество нашей продукции.
         </p>
         <p className="text-gray-700 leading-relaxed text-[16px]">
           Наши опытные сотрудники всегда готовы помочь с выбором техники. В
           нашем шоуруме представлен широкий ассортимент товаров.
         </p>
         <p className="text-gray-700 leading-relaxed text-[16px]">
           Мы предлагаем доставку по всей республике и поддерживаем все виды
           оплаты для вашего удобства.
         </p>

         <button className="border border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white transition-all px-6 py-2 rounded-md w-fit">
           Узнать больше
         </button>
       </div>
     </div>

     {/* Bottom Cards */}
     <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
       {/* 1 */}
       <div className="flex flex-col items-center justify-center text-center py-8 border-b sm:border-b-0 sm:border-r border-gray-200">
         <p className="text-pink-600 font-semibold text-[17px]">Лидеры</p>
         <p className="text-gray-600 text-sm">на игровом рынке</p>
         <ArrowRight className="mt-4 text-gray-600" />
       </div>

       {/* 2 */}
       <div className="flex flex-col items-center justify-center text-center py-8 border-b sm:border-b-0 sm:border-r border-gray-200">
         <p className="text-gray-700 text-sm">
           Более <br />
           <span className="text-pink-600 font-semibold text-[17px]">
             500 положительных
           </span>{" "}
           <br />
           отзывов
         </p>
         <ArrowRight className="mt-4 text-gray-600" />
       </div>

       {/* 3 */}
       <div className="flex flex-col items-center justify-center text-center py-8 border-b sm:border-b-0 sm:border-r border-gray-200">
         <p className="text-gray-700 text-sm">
           Провели <br />
           <span className="text-pink-600 font-semibold text-[17px]">
             32 киберспортивных
           </span>{" "}
           <br />
           турнира
         </p>
         <ArrowRight className="mt-4 text-gray-600" />
       </div>

       {/* 4 */}
       <div className="flex flex-col items-center justify-center text-center py-8">
         <p className="text-gray-700 text-sm">
           Оборудовали <br />
           <span className="text-pink-600 font-semibold text-[17px]">
             60 компьютерных клубов
           </span>{" "}
           <br />
           под ключ
         </p>
         <ArrowRight className="mt-4 text-gray-600" />
       </div>
     </div>
   </section>
   <SupportSection />
    </>
    
  );
};

export default AboutCompany;
