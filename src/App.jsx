import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import Category from "./Components/Category/Category";
import Favorite from "./Components/Favorite/Favorite";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/Not Found/NotFound";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ScrollToTopButton from "./Components/Scroll/ScrollToTopButton";
import { zustandStore } from "./Hooks/zustandStore";
import AdminPanel from "./Components/Auth/AdminPanel";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Delivery from "./Components/dostavka/Delivery";
import Faq from "./Components/Faq/Faq";
import Aplata from "./Components/aplata/aplata";

// 🔹 Login funksiyasi
const loginFunction = async () => {
  try {
    const login = await axios.post("http://localhost:4200/auth/login", {
		username: "umar",
		password: "umar1212",
    });
    return login;
  } catch (error) {
    return error.message;
  }
};

const App = () => {
  const { setCategories, setProducts, setToken } = zustandStore();
  const location = useLocation();

  // 🔹 Ma'lumotlarni olish (kategoriya va productlar)
  useEffect(() => {
    async function getInitialData() {
      try {
        const [categories, products] = await Promise.all([
          axios.get("http://localhost:4200/categories"),
          axios.get("http://localhost:4200/products"),
        ]);

        setCategories(categories.data);
        setProducts(products.data.products);
      } catch (err) {
        console.error("Ma'lumotlarni yuklashda xatolik:", err);
      }
    }

    getInitialData();
  }, []);

  // 🔹 Login mutation
  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: loginFunction,
    onSuccess: (data) => {
      console.log("Token:", data.data.token);
      setToken(data.data.token);
    },
  });

  // 🔹 Admin sahifasida Navbar/Footer chiqmasin
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="dark:bg-blue duration-1000 min-h-screen flex flex-col">
      {/* 🔹 Navbar (faqat admin sahifasida ko‘rinmaydi) */}
      {!isAdminPage && <Navbar />}

      {/* 🔹 Scroll button */}
      <ScrollToTopButton />

      {/* 🔹 Barcha sahifalar */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/dostavka" element={<Delivery />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/products/:productId" element={<ProductInfo />} />
		  <Route path="/aplata" element={<Aplata />} />

          {/* Admin panel (ProtectedRoute bilan himoyalangan) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* 404 sahifa */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* 🔹 Footer (faqat admin sahifasida ko‘rinmaydi) */}
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;
