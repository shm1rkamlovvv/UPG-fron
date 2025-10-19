import { Carousel } from "@material-tailwind/react";

function CarouselCustomNavigation() {
  return (
    <div className="">
      <div className="w-[916px] h-[300px]  mt-8">
        <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://cdn.mediapark.uz/imgs/002bae6a-da94-4d5e-96fc-d98ebc3f3d0f_WEB_UZ-(16).webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn.mediapark.uz/imgs/855bfea3-15fc-42b4-b935-22c834ff4728_WEB_UZ.webp"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn.mediapark.uz/imgs/4977b647-9c03-44d4-a995-db9c9e978714_WEB_UZ-(3).webp"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselCustomNavigation;
