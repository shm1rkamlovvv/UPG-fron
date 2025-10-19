import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[70px] right-6 z-50 bg-[#dfdee2] text-gray-800 p-3 rounded-full shadow-lg transition-all duration-1000${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <GoArrowUp size={25} />
    </button>
  );
};

export default ScrollToTopButton;
