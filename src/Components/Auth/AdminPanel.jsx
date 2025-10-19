import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Trash2, Edit3, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    fullPrice: "",
    sellPrice: "",
    available: "",
    code: "",
    description: "",
    category: "",
    trademark: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  // 🔹 LOGOUT funktsiyasi
  const handleLogout = () => {
    if (window.confirm("Tizimdan chiqmoqchimisiz?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login"); // foydalanuvchini login sahifasiga qaytaradi
    }
  };

  // --- Ma'lumotlarni olish ---
  const getData = async () => {
    try {
      const [catRes, prodRes] = await Promise.all([
        axios.get("http://localhost:4200/categories"),
        axios.get("http://localhost:4200/products"),
      ]);
      setCategories(catRes.data);
      setProducts(prodRes.data);
    } catch (err) {
      console.error("❌ Xatolik (GET):", err);
      alert("Server bilan bog‘lanishda xatolik!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // --- Qo‘shish yoki yangilash ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        ...form,
        images: [form.image],
      };

      if (editId) {
        await axios.put(`http://localhost:4200/products/${editId}`, newData);
        alert("✅ Mahsulot yangilandi!");
      } else {
        await axios.post("http://localhost:4200/products", newData);
        alert("✅ Mahsulot qo‘shildi!");
      }

      setForm({
        name: "",
        fullPrice: "",
        sellPrice: "",
        available: "",
        code: "",
        description: "",
        category: "",
        trademark: "",
        image: "",
      });
      setEditId(null);
      getData();
    } catch (err) {
      console.error("❌ Xatolik (POST/PUT):", err);
      alert("Xatolik yuz berdi!");
    }
  };

  // --- Tahrirlash ---
  const handleEdit = (p) => {
    setForm({
      name: p.name,
      fullPrice: p.fullPrice,
      sellPrice: p.sellPrice,
      available: p.available,
      code: p.code,
      description: p.description,
      category: p.category?._id || "",
      trademark: p.trademark || "",
      image: p.images?.[0] || "",
    });
    setEditId(p._id);
  };

  // --- O‘chirish ---
  const handleDelete = async (id) => {
    if (window.confirm("Rostdan o‘chirmoqchimisiz?")) {
      try {
        await axios.delete(`http://localhost:4200/products/${id}`);
        alert("🗑️ Mahsulot o‘chirildi!");
        getData();
      } catch (err) {
        console.error("❌ Xatolik (DELETE):", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 HEADER va CHIQISH TUGMASI */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#DB2777]">
            🛍️ Sevgicha Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-[#DB2777] text-white px-4 py-2 rounded-lg hover:bg-[#be1e66] transition"
          >
            <LogOut size={18} />
            Chiqish
          </button>
        </div>

        {/* --- FORM --- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-6 rounded-2xl mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 border border-pink-100"
        >
          <input
            type="text"
            placeholder="Mahsulot nomi"
            className="border p-3 rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="To‘liq narx"
            className="border p-3 rounded-lg"
            value={form.fullPrice}
            onChange={(e) => setForm({ ...form, fullPrice: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Sotuv narxi"
            className="border p-3 rounded-lg"
            value={form.sellPrice}
            onChange={(e) => setForm({ ...form, sellPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Mavjud miqdor"
            className="border p-3 rounded-lg"
            value={form.available}
            onChange={(e) => setForm({ ...form, available: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Kod"
            className="border p-3 rounded-lg"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
          />

          {/* --- Kategoriya tanlash --- */}
          <select
            className="border p-3 rounded-lg"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Kategoriya tanlang</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Brend (trademark)"
            className="border p-3 rounded-lg"
            value={form.trademark}
            onChange={(e) => setForm({ ...form, trademark: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Rasm URL"
            className="border p-3 rounded-lg"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
          />
          <textarea
            placeholder="Tavsif"
            className="border p-3 rounded-lg md:col-span-2"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <button
            type="submit"
            className="md:col-span-2 bg-[#DB2777] text-white py-3 rounded-xl hover:bg-[#be1e66] flex items-center justify-center gap-2"
          >
            <Plus size={18} /> {editId ? "Yangilash" : "Qo‘shish"}
          </button>
        </form>

        {/* --- TABLE --- */}
        <table className="w-full bg-white rounded-xl shadow border border-pink-100">
          <thead className="bg-[#DB2777] text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Nomi</th>
              <th className="p-3 text-left">Narx</th>
              <th className="p-3 text-left">Kategoriya</th>
              <th className="p-3 text-left">Brend</th>
              <th className="p-3 text-left">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p, i) => (
                <tr key={p._id} className="border-b hover:bg-pink-50">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3 text-[#DB2777] font-semibold">
                    {p.sellPrice || p.fullPrice} so‘m
                  </td>
                  <td className="p-3 text-gray-600">
                    {p.category?.name || "Noma'lum"}
                  </td>
                  <td className="p-3">{p.trademark}</td>
                  <td className="p-3 flex gap-3">
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-5 text-center text-gray-500 italic"
                >
                  Mahsulotlar yo‘q 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
