import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Kompyuter apgreyidi nima va uni nima uchun qilish kerak?",
      answer:
        "Kompyuter apgreyidi — bu kompyuter qismlarini yangisiga almashtirish jarayoni. Bu orqali tizim tezligi, unumdorligi va ishlash qulayligi oshadi.",
    },
    {
      question: "Modernizatsiya bilan apgreyid o‘rtasida qanday farq bor?",
      answer:
        "Apgreyid — bu ayrim qismlarni yangilash, modernizatsiya esa butun tizimni takomillashtirish yoki yangi texnologiyalarni joriy qilishdir.",
    },
    {
      question: "O‘yin uchun qaysi protsessorni tanlash yaxshiroq?",
      answer:
        "O‘yinlar uchun yuqori chastotali va ko‘p yadroli protsessorlar (masalan, Intel i5/i7 yoki AMD Ryzen 5/7) tavsiya etiladi.",
    },
    {
      question: "Qaysi hajmdagi qattiq disk o‘yin va ish uchun qulay?",
      answer:
        "Kamida 512GB SSD ishlatish tavsiya etiladi. Agar fayllar ko‘p bo‘lsa, SSD + HDD kombinatsiyasi eng maqbul variant.",
    },
    {
      question: "Protsessor uchun suvli yoki havo sovutish qaysi yaxshi?",
      answer:
        "Oddiy foydalanuvchilar uchun havo sovutish yetarli. Kuchli o‘yin yoki render ishlari uchun esa suvli sovutish yaxshi natija beradi.",
    },
    {
      question: "Protsessor yadrolari soni o‘yin unumdorligiga ta’sir qiladimi?",
      answer:
        "Ha, ko‘p yadroli protsessorlar ko‘p vazifali va zamonaviy o‘yinlarda yaxshiroq ishlaydi.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-10 text-black border-b-2 border-pink-500 pb-2">
        FAQ
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-sm bg-gray-50 hover:shadow-sm transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggle(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-700 w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-700 w-5 h-5" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
