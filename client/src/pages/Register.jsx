import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await dispatch(registerUser(form)).unwrap();

      // ✅ Success → redirect to login
      navigate("/");
    } catch (err) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* ❌ Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* ✅ LOGIN LINK */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;