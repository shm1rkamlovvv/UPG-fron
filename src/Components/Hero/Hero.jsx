import React from "react";
import { Carousel } from "@material-tailwind/react";
import { zustandStore } from "../../Hooks/zustandStore";
import Card from "../Card/Card";
import Reklama from "../Reklama/Reklama";

const Hero = () => {
  const { categories } = zustandStore();

  // Rasmlar massiv ko‘rinishida
  const heroImages = [
    "/src/assets/hero1.png",
    "/src/assets/hero2.png",
    "/src/assets/hero3.png",
    "/src/assets/hero4.png",
    "/src/assets/hero5.png",
    "/src/assets/hero6.jpg",
    "/src/assets/hero7.png",
  ];

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-8 lg:px-14 dark:text-white font-golos duration-1000">

      {/* 🖼️ UPG Carousel */}
      <div className="mt-6">
        <Carousel
          autoplay
          loop
          autoplayDelay={3500}
          transition={{ type: "tween", duration: 0.8 }}
          className="rounded-2xl shadow-lg overflow-hidden"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {new Array(length).fill("").map((_, i) => (
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
              alt={`hero-${i + 1}`}
              className="h-[180px] sm:h-[280px] md:h-[400px] lg:h-[500px] w-full object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* 🛍️ Productlar */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories.map((category) =>
          category.products.map((product) => (
            <Card product={product} key={product._id} />
          ))
        )}
      </div>

      {/* 📢 Reklama */}
      <Reklama />
    </div>
  );
};

export default Hero;
