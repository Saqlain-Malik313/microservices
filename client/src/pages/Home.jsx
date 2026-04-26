import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Wireless Headphones",
    price: "₹2,999",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    name: "Smart Watch",
    price: "₹4,499",
    img: "https://www.flipkart.com/full-image-view",
  },
  {
    name: "Sneakers",
    price: "₹3,199",
    img: "https://www.flipkart.com/full-image-view",
  },
  {
    name: "Backpack",
    price: "₹1,799",
    img: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div className="text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Next-Gen Shopping 🛍️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg mb-8"
          >
            Discover premium products with unbeatable deals
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/products"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
            >
              Shop Now
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {[
          { title: "Fast Delivery", icon: "🚀" },
          { title: "Secure Payment", icon: "🔒" },
          { title: "Premium Quality", icon: "⭐" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl text-center shadow-lg"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
          </motion.div>
        ))}
      </section>

      {/* 🔥 FEATURED PRODUCTS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-purple-400 font-bold">
                  {product.price}
                </p>

                <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CATEGORY */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Electronics", "Clothing", "Shoes", "Accessories"].map(
            (cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl text-center cursor-pointer"
              >
                <h3 className="font-semibold text-lg">{cat}</h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-700 to-pink-600">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Upgrade Your Style Today 🚀
        </motion.h2>

        <Link
          to="/products"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Explore Now
        </Link>
      </section>

    </div>
  );
};

export default Home;