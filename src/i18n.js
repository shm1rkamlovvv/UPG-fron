// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          about: "Biz haqimizda",
          mediablog: "Mediablog",
          delivery: "Yetkazib berish",
          stores: "Doʻkonlar",
          installment: "Muddatli to'lov",
          contact: "Biz bilan bogʻlaning!",
          language: "O'zbek",
          catalog: "Katalog",
          orderStatus: "Buyurtma holati",
          compare: "Taqqoslash",
          cart: "Savatcha",
          favorites: "Saralanganlar",
          login: "Kirish",
          promotions: "Aksiyalar",
        },
      },
      ru: {
        translation: {
          about: "О нас",
          mediablog: "Медиаблог",
          delivery: "Доставка",
          stores: "Магазины",
          installment: "Рассрочка",
          contact: "Свяжитесь с нами!",
          language: "Русский",
          catalog: "Каталог",
          orderStatus: "Статус заказа",
          compare: "Сравнение",
          cart: "Корзина",
          favorites: "Избранное",
          login: "Войти",
          promotions: "Акции",
        },
      },
      en: {
        translation: {
          about: "About us",
          mediablog: "Mediablog",
          delivery: "Delivery",
          stores: "Stores",
          installment: "Installment",
          contact: "Contact us!",
          language: "English",
          catalog: "Catalog",
          orderStatus: "Order Status",
          compare: "Compare",
          cart: "Cart",
          favorites: "Favorites",
          login: "Login",
          promotions: "Promotions",
        },
      },
    },
  });

export default i18n;
