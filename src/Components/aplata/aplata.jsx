import React from "react";

const PaymentMethods = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Sarlavha */}
      <h2 className="text-2xl font-semibold border-b-2 border-[#DB2777] pb-2 mb-6">
        Toʻlov usullari
      </h2>

      <div className="flex flex-col lg:flex-row border border-gray-200 rounded-lg overflow-hidden">
        {/* Chapdagi katta blok */}
        <div className="flex-1 p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2 text-[#DB2777]">
            Doʻkonda toʻlov (UPGrade)
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            Siz kompyuter yoki boshqa mahsulotni bevosita doʻkon kassasida
            toʻlashingiz mumkin. Toʻlov amalga oshirilgandan soʻng sizga kassa
            cheki, tovar hujjati va kafolat varaqasi taqdim etiladi. Bizning
            onlayn-doʻkonimizdagi narxlar yakuniy — qoʻshimcha komissiya yoki
            soliq yoʻq.
          </p>
        </div>

        {/* O‘ngdagi 3 to‘lov turi */}
        <div className="flex flex-1 flex-col sm:flex-row border-t lg:border-t-0 lg:border-l border-gray-200">
          {/* QR orqali */}
          <div className="flex flex-col items-center justify-center flex-1 p-6 hover:bg-pink-50 transition border-b sm:border-b-0 sm:border-r border-gray-200">
            <img
              src="https://files.ox-sys.com/cache/500x_/image/63/62/43/636243f5b1ac7f87fe22482c45c2120c218685c438310f01f5d7413a9b0425ce.png"
              alt="QR orqali to'lov"
              className="w-12 h-12 mb-3"
            />
            <p className="text-sm font-medium text-gray-800">QR orqali toʻlov</p>
          </div>

          {/* Naqd pul */}
          <div className="flex flex-col items-center justify-center flex-1 p-6 hover:bg-pink-50 transition border-b sm:border-b-0 sm:border-r border-gray-200">
            <img
              src="https://files.ox-sys.com/cache/500x_/image/81/f5/fd/81f5fd537b39863ca87aa5ad75b0e0ec92e788eb93796eefc7425762ec879bf5.png"
              alt="Naqd pul bilan to'lov"
              className="w-12 h-12 mb-3"
            />
            <p className="text-sm font-medium text-gray-800">
              Naqd pul bilan toʻlov
            </p>
          </div>

          {/* Karta orqali */}
          <div className="flex flex-col items-center justify-center flex-1 p-6 hover:bg-pink-50 transition">
            <img
              src="https://files.ox-sys.com/cache/500x_/image/ec/8b/ac/ec8bac8b907d6f940d98c2ff5f42ae27ceb2b737ca1b8b4c399ffd3ce14f921d.png"
              alt="Karta orqali to'lov"
              className="w-12 h-12 mb-3"
            />
            <p className="text-sm font-medium text-gray-800">
              Karta orqali toʻlov
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
