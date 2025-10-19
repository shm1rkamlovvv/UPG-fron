import React from "react";
import { Carousel } from "@material-tailwind/react";
import { zustandStore } from "../../Hooks/zustandStore";
import Card from "../Card/Card";
import Reklama from "../Reklama/Reklama";

const Hero = () => {
  const { categories } = zustandStore();

  // 🔹 Rasmlar ro‘yxati
  const heroImages = [
    "https://files.ox-sys.com/cache/original/image/ee/d4/19/eed41952ad5f0b3a76feeeebeab1dc38d390fd5d58b4070b0c3fd1931222bc7a.png",
    "https://files.ox-sys.com/cache/original/image/3b/a9/81/3ba9810e16fcef14d8f904093ff424104c832dd2af13252ce02e8378ba87db84.png",
    "https://files.ox-sys.com/cache/original/image/88/e1/39/88e1395552993a636e53e8fb324870caee94ca9600a9f829db91167074162697.png",
    "https://files.ox-sys.com/cache/original/image/9d/5d/00/9d5d00686fa6319048e6130559a2d98389ee1a0b71eb3c7b64e83e3893e106ab.png",
    "https://files.ox-sys.com/cache/original/image/e1/d8/7b/e1d87b70967202804675505e8636a5073abec13ea8a9eadd054864ac73b29fbb.png",
    "https://files.ox-sys.com/cache/original/image/ea/22/c1/ea22c1dca8df23e6e8dbe272e6170bb36a1d8db4e400dceb435ab918f72e935f.png",
    "https://files.ox-sys.com/cache/original/image/87/c7/3e/87c73e6c77fa74668db6d726ca4518789c55874aaa081b2c480b9891205b0cf5.png"
  ];

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-8 lg:px-14 dark:text-white font-golos duration-1000">

      {/* 🖼️ Reklamali karusel */}
      <div className="mt-6">
        <Carousel
          autoplay
          loop
          autoplayDelay={3500}
          transition={{ type: "tween", duration: 0.8 }}
          className="rounded-2xl shadow-lg overflow-hidden"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {Array.from({ length }).map((_, i) => (
                <span
                  key={i}
                  className={`block h-[6px] w-[24px] cursor-pointer rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-[#1e40af] scale-110" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {heroImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`reklama-${i + 1}`}
              className="h-[180px] sm:h-[280px] md:h-[400px] lg:h-[500px] w-full object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* 🛍️ Productlar ro‘yxati */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories.map((category) =>
          category.products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>

      {/* 📢 Reklama joyi */}
      <Reklama />
    </div>
  );
};

export default Hero;
