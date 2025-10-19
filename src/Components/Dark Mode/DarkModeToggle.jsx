import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Foydalanuvchi tanlovini localStorage orqali saqlash
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-xl p-1 rounded-full transition-colors duration-1000 hover:bg-gray-200 dark:hover:bg-gray-700"
      title="Dark Mode Toggle"
    >
      {isDark ? (
        <BsSun className="text-yellow-400" />
      ) : (
        <BsMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
