import React, { useEffect } from "react";
import { motion } from "framer-motion";

const deliveries = [
  {
    title: "Do‘kondan olib ketish",
    image:
      "https://files.ox-sys.com/cache/original/image/0b/92/4f/0b924f2d063c0754c516a52dfd56e64949a475662dac6eaa348a550707164211.png",
    address: "Toshkent, TRC Malika, 2-qavat, 24-do‘kon. Navoi ko‘chasi 37-uy",
    time: "10:00 dan 20:00 gacha",
    payment: "Individual",
    cost: "—",
  },
  {
    title: "Toshkent bo‘ylab yetkazib berish",
    image:
      "https://files.ox-sys.com/cache/original/image/55/8b/80/558b80f2cfe6aed31af4ae2d9ecdb402808d7857490fd1a7d2298c2339c623a7.png",
    cost: "Bepul",
    payment: "Individual",
  },
  {
    title: "O‘zbekiston bo‘ylab yetkazib berish",
    image:
      "https://files.ox-sys.com/cache/original/image/4d/69/36/4d693644c3506287512498f0a901856e3b7dbdfbf193862d3e0efe729ef5e26a.png",
    cost: "Individual",
    payment: "100%",
  },
];

const Delivery = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".delivery-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("opacity-100", "translate-y-0");
      }, i * 200);
    });
  }, []);

  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-pink-600 inline-block pb-2">
        Yetkazib berish
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deliveries.map((item, index) => (
          <div
            key={index}
            className="delivery-card bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden 
            transform translate-y-10 opacity-0 transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Rasm qismi */}
            <div className="flex justify-center items-center bg-gray-100 h-64 relative overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain max-w-[320px]"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Ma’lumotlar qismi */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 border-b-2 border-pink-600 pb-1 mb-4">
                {item.title}
              </h3>

              {item.address && (
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Manzil:</strong> {item.address}
                </p>
              )}

              {item.time && (
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Ish vaqti:</strong> {item.time}
                </p>
              )}

              <p className="text-sm text-gray-700 mb-2">
                <strong>Narxi:</strong> {item.cost}
              </p>

              <p className="text-sm text-gray-700">
                <strong>Oldindan to‘lov:</strong> {item.payment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
