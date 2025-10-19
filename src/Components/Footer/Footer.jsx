import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10">
      {/* Yuqori qator */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 border-b border-pink-500 pb-6">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
          <img
              src="https://files.ox-sys.com/cache/original/image/d7/3d/17/d73d17452d7c7cd96e0f7e1e486fbb64538e33e4a91e9ef39b80a2603bcb2c31.png"
              alt="Logo"
              className="w-[200px] h-14 object-contain hover:scale-110 transition-transform duration-300"
            />
          </h2>
        </div>

        {/* Kompaniya */}
        <div>
          <h3 className="font-semibold mb-2">Компания</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-pink-600">Контакты</a></li>
            <li><a href="#" className="hover:text-pink-600">О нас</a></li>
            <li><a href="#" className="hover:text-pink-600">Почему мы?</a></li>
          </ul>
        </div>

        {/* Услуги */}
        <div>
          <h3 className="font-semibold mb-2">Услуги</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-pink-600">Апгрейд</a></li>
          </ul>
        </div>

        {/* Поддержка */}
        <div>
          <h3 className="font-semibold mb-2">Поддержка</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-pink-600">Доставка</a></li>
            <li><a href="#" className="hover:text-pink-600">Способ оплаты</a></li>
            <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
          </ul>
        </div>

        {/* Проекты */}
        <div>
          <h3 className="font-semibold mb-2">Проекты</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-pink-600">Блогеры</a></li>
            <li><a href="#" className="hover:text-pink-600">Игровые клубы</a></li>
            <li><a href="#" className="hover:text-pink-600">Киберспорт</a></li>
          </ul>
        </div>
      </div>

      {/* Pastki kontakt qismi */}
      <div className="max-w-7xl mx-auto px-6 mt-6 grid md:grid-cols-3 gap-6 text-sm">
        {/* Telefonlar */}
        <div>
          <h4 className="font-semibold flex items-center gap-2">
            <i className="fa-regular fa-phone"></i> Телефоны
          </h4>
          <p>+998 (99) 124-24-24</p>
          <p>+998 (97) 124-24-24</p>
        </div>

        {/* Adres */}
        <div>
          <h4 className="font-semibold flex items-center gap-2">
            <i className="fa-regular fa-location-dot"></i> Адреса
          </h4>
          <p>г. Ташкент, ул. Навои 37</p>
          <p>г. Ташкент, ТРЦ Малика, Магазин 24</p>
        </div>

        {/* Ish vaqti */}
        <div>
          <h4 className="font-semibold flex items-center gap-2">
            <i className="fa-regular fa-clock"></i> Режим работы
          </h4>
          <p>Ежедневно с 10:00 до 20:00</p>
        </div>
      </div>

      {/* Social tarmoqlar */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-wrap justify-center gap-10 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="w-5 h-5"
          />
          Instagram <span className="text-pink-600">187 тыс. подписчиков</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube"
            className="w-5 h-5"
          />
          YouTube <span className="text-pink-600">121 тыс. подписчиков</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram"
            className="w-5 h-5"
          />
          Telegram <span className="text-pink-600">23.4 тыс. подписчиков</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
            alt="TikTok"
            className="w-5 h-5"
          />
          TikTok <span className="text-pink-600">30 тыс. подписчиков</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
