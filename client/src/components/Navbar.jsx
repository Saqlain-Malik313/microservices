import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/login");
    });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md px-6 py-4 flex justify-between items-center"
    >
      {/* 🔹 LOGO */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyStore 🛒
      </Link>

      {/* 🔹 LINKS */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-blue-500">Home</Link>

        <Link to="/products" className="hover:text-blue-500">
          Products
        </Link>

        {/* 🛒 CART */}
        <Link to="/cart" className="relative hover:text-blue-500">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {/* 👤 USER */}
        {user ? (
          <>
            <Link to="/profile" className="hover:text-blue-500">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
        )}

      </div>
    </motion.nav>
  );
};

export default Navbar;