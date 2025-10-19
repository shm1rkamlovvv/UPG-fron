import { Carousel, Typography, Button } from "@material-tailwind/react";
import { IoCartOutline } from "react-icons/io5";

export function CarouselWithContent() {
  return (
    <div className="border-1 border-gray-300 rounded-lg mt-8 fill-red-500">
      <div className="w-[460px] h-[300px] ">
        <Carousel className="">
          <div className="relative h-full w-full p-4">
            <div>
              <p className="text-3xl font-bold">Kun mahsulotlari</p>
            </div>
            <div className="w-full h-[1px] bg-[#6c7178] my-3 "></div>
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="https://cdn.mediapark.uz/imgs/092decf2-c1a9-4fc4-9dd7-1e87a5011569_mediaparkproduct1300x1300.webp"
                  alt=""
                  className="w-[156px] h-[156px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <button className="px-1.5 py-0.5 text-xs bg-[#f6dd07] rounded-lg">
                    -35%
                  </button>
                  <button className="py-0.5 px-1.5 text-white bg-[#d92e15] text-xs rounded-lg">
                    Chegirma
                  </button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p>Televizor Samsung 43N5000UZ</p>
                  <button className="text-sm border px-2 border-black rounded-md">
                    408 765 so'm/ oy
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start flex-col">
                    <p className="line-through text-[#6c7178] text-sm">
                      5 847 000 so'm
                    </p>
                    <p className="text-lg font-bold">3 777 000 so'm</p>
                  </div>
                  <button className="flex items-center justify-center bg-[#d92e15] text-white rounded-xl w-10 h-10">
                    <IoCartOutline size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full p-4 border border-gray-300 rounded-lg">
            <div>
              <p className="text-3xl font-bold">Kun mahsulotlari</p>
            </div>
            <div className="w-full h-[1px] bg-[#6c7178] my-3 "></div>
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="https://cdn.mediapark.uz/imgs/e6cb750d-6a9f-4120-b06d-dc0ddd342558_Artboard-1.webp"
                  alt=""
                  className="w-[156px] h-[156px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <button className="px-1.5 py-0.5 text-xs bg-[#f6dd07] rounded-lg">
                    -50%
                  </button>
                  <button className="py-0.5 px-1.5 text-white bg-[#d92e15] text-xs rounded-lg">
                    Chegirma
                  </button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p>Changyutgich Artel VCC 4516 W Brown</p>
                  <button className="text-sm border px-2 border-black rounded-md">
                    234 307 so'm/ oy
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start flex-col">
                    <p className="line-through text-[#6c7178] text-sm">
                      4 335 000 so'm
                    </p>
                    <p className="text-lg font-bold">2 165 000 so'm</p>
                  </div>
                  <button className="flex items-center justify-center bg-[#d92e15] text-white rounded-xl w-10 h-10">
                    <IoCartOutline size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full p-4 border border-gray-300 rounded-lg">
            <div>
              <p className="text-3xl font-bold">Kun mahsulotlari</p>
            </div>
            <div className="w-full h-[1px] bg-[#6c7178] my-3 "></div>
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="https://cdn.mediapark.uz/imgs/3f531007-18c9-4566-b5bb-472886c57aed_Artboard3-1300.webp"
                  alt=""
                  className="w-[156px] h-[156px] rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <button className="px-1.5 py-0.5 text-xs bg-[#f6dd07] rounded-lg">
                    -45%
                  </button>
                  <button className="py-0.5 px-1.5 text-white bg-[#d92e15] text-xs rounded-lg">
                    Chegirma
                  </button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p>Elektr go'sht maydalagich Aksion M 62.01 T-S</p>
                  <button className="text-sm border px-2 border-black rounded-md">
                    203 463 so'm/ oy
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start flex-col">
                    <p className="line-through text-[#6c7178] text-sm">
                      3 409 000 so'm
                    </p>
                    <p className="text-lg font-bold">1 880 000 so'm</p>
                  </div>
                  <button className="flex items-center justify-center bg-[#d92e15] text-white rounded-xl w-10 h-10">
                    <IoCartOutline size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
