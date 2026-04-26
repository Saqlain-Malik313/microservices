import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ ADD
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/authSlice";
import { fetchCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());   // ✅ restore login
    dispatch(fetchCart()); // ✅ load cart
  }, []);
  return (
    <BrowserRouter>

      <Navbar /> {/* ✅ SHOW ON ALL PAGES */}

      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 PRIVATE ROUTES */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;