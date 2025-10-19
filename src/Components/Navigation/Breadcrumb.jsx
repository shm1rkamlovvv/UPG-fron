import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Yo'lni "/" bo'yicha bo'lib olish
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm breadcrumbs py-2 px- text-gray-500 dark:text-gray-300 duration-1000 my-4">
      <ul className="flex gap-2 flex-wrap">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-white font-semibold"
          >
            Bosh sahifa
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-700 dark:text-white capitalize">
                  {decodeURIComponent(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-blue-600 dark:hover:text-white "
                >
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
