import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await axios.post("http://localhost:4200/auth/login", {
        username: data.username,
        password: data.password,
      });

      // 🪄 TOKENNI SAQLAYMIZ
      localStorage.setItem("token", response.data.token);

      const decoded = jwtDecode(response.data.token);

      const user = await axios
        .get(`http://localhost:4200/users/${decoded.id}`)
        .then((data) => data.data);

      if (user.role[0] === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Login yoki parol noto‘g‘ri 😕");
    }
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 dark:from-[#1a1a2e] dark:to-[#16213e] transition-all duration-1000">
      <form
        onSubmit={handleSubmit(login)}
        className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-center text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">
          UPG Admin Login 💫
        </h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          required
          className="p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none transition-all duration-300 dark:bg-[#0f172a] dark:text-white"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
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
