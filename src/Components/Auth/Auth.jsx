import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      // 🔒 Trim va normalize qilish (mobil bo‘sh joy / katta harf muammosi uchun)
      const username = data.username.trim();
      const password = data.password.trim();

      const response = await axios.post(
        "https://upg-zu5r.onrender.com/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // 🪄 TOKENNI SAQLAYMIZ
      localStorage.setItem("token", response.data.token);

      // 🔍 Tokenni yechamiz
      const decoded = jwtDecode(response.data.token);

      // 👤 Foydalanuvchini olamiz
      const user = await axios
        .get(`https://upg-zu5r.onrender.com/users/${decoded.id}`)
        .then((res) => res.data);

      // 🧭 Yo‘naltirish
      if (user.role[0] === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login yoki parol noto‘g‘ri 😕");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 dark:from-[#1a1a2e] dark:to-[#16213e] transition-all duration-1000">
      <form
        onSubmit={handleSubmit(login)}
        className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-center text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">
          UPG Admin Login 💫
        </h2>

        {/* 🧍 Username input */}
        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          required
          autoComplete="username"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none transition-all duration-300 dark:bg-[#0f172a] dark:text-white"
        />

        {/* 🔑 Password input */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
          autoComplete="current-password"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none transition-all duration-300 dark:bg-[#0f172a] dark:text-white"
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Kirish 🚀
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          Faqat UPG adminlar uchun 👑
        </p>
      </form>
    </div>
  );
};

export default Auth;
