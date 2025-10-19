import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center pb-10 font-golos">
      <h1 className="text-[100px] font-bold text-[#d92e15] dark:text-white duration-1000">
        404
      </h1>
      <p className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white duration-1000">
        Sahifa topilmadi
      </p>
      <p className="text-gray-600 mb-6 dark:text-gray-500 duration-1000">
        Afsuski, bunday sahifa mavjud emas yoki oʻzgartirilgan. Asosiy sahifaga
        qaytishni tavsiya qilamiz.
      </p>
      <Link
        to="/"
        className=" text-white px-16 py-3 rounded-lg bg-red dark:bg-white dark:text-red duration-1000"
      >
        Asosiy sahifa
      </Link>
    </div>
  );
};

export default NotFound;
