import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaBalanceScale,
  FaUser,
  FaWallet,
  FaTh,
  FaCog,
  FaDesktop,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { zustandStore } from "../../Hooks/zustandStore";
import DarkModeToggle from "../Dark Mode/DarkModeToggle";
import MiniCart from "../Cart/MiniCart";

function Navbar() {
  const { categories, favorite, cart, products } = zustandStore();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) return setSuggestions([]);
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5));
  };

  const handleSelect = (id) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/products/${id}`);
  };

  const cartProducts = cart.map((id) =>
    products.find((product) => product._id == id)
  );

  return (
    <div className="w-full bg-white dark:bg-blue dark:text-white shadow-sm border-b duration-500 sticky top-0 z-50">
      {/* Yuqori qator */}
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Chap tomonda logo va qidiruv */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img
              src="https://files.ox-sys.com/cache/original/image/d7/3d/17/d73d17452d7c7cd96e0f7e1e486fbb64538e33e4a91e9ef39b80a2603bcb2c31.png"
              alt="Logo"
              className="w-[100px] h-14 object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Qidiruv */}
          <div className="relative flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 w-[350px] bg-white dark:bg-blue">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Mahsulot izlash..."
              className="outline-none w-full p-2 bg-transparent text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter" && suggestions[0]) {
                  handleSelect(suggestions[0]._id);
                }
              }}
            />
            <FiSearch
              className="text-gray-500 cursor-pointer"
              onClick={() => suggestions[0] && handleSelect(suggestions[0]._id)}
            />

            {suggestions.length > 0 && (
              <ul className="absolute top-11 left-0 w-full bg-white dark:bg-blue shadow-lg rounded-lg border mt-1 z-50">
                {suggestions.map((item) => (
                  <li
                    key={item._id}
                    onMouseDown={() => handleSelect(item._id)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-pink-600 cursor-pointer"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-10 h-10 object-contain border rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.sellPrice.toLocaleString()} so‘m
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* O‘ng tomon */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex flex-col items-center">
            <FaWallet className="text-xl" />
            <span>UZS/USD</span>
          </div>

          <div className="flex flex-col items-center relative cursor-pointer">
            <FaBalanceScale className="text-xl" />
            <span>Taqqoslash</span>
            <span className="absolute -top-1 -right-2 text-xs text-white bg-pink-600 rounded-full px-1">
              0
            </span>
          </div>

          {/* Saralanganlar */}
          <NavLink
            to="/favorites"
            className="relative flex flex-col items-center"
          >
            <FaHeart className="text-xl" />
            <span>Saralangan</span>
            {favorite.length > 0 && (
              <span className="absolute -top-1 -right-2 text-xs text-white bg-pink-600 rounded-full px-1">
                {favorite.length}
              </span>
            )}
          </NavLink>

          {/* Savatcha */}
          <div
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <FaShoppingCart className="text-xl" />
            <span>Savatcha</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 text-xs text-white bg-pink-600 rounded-full px-1">
                {cart.length}
              </span>
            )}

            {isCartOpen && (
              <div className="absolute top-10 right-0 z-50">
                <MiniCart cartProducts={cartProducts} />
              </div>
            )}
          </div>

          {/* Dark mode toggle (faSun olib tashlandi, faqat toggle qoldi) */}
          <div className="flex flex-col items-center">
            <DarkModeToggle />
            <span className="text-xs mt-1">Tema</span>
          </div>

          <NavLink to="/auth" className="flex flex-col items-center">
            <FaUser className="text-xl" />
            <span>Kirish</span>
          </NavLink>
        </div>
      </nav>

      {/* Pastki menyu */}
      <div className="flex items-center gap-8 px-8 py-3 text-sm font-medium border-t dark:border-gray-700">
        <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
          <FaTh />
          <span>Katalog</span>
        </button>

        <button className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-pink-600">
          <FaCog />
          <span>Sozlamalar</span>
        </button>

        <button className="flex items-center gap-2 text-pink-600">
          <FaDesktop />
          <span>Kompyuter sotib olish</span>
        </button>

        <span className="text-gray-700 dark:text-gray-200">Yangiliklar</span>

        <div className="flex gap-5">
          {categories.slice(0, 5).map((category) => (
            <NavLink
              key={category._id || category.slug}
              to={`/category/${category.slug}`}
              className="hover:text-pink-600 transition"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
