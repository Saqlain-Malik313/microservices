import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* 🔥 HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Shop Smart 🛒
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg mb-6"
          >
            Best products at unbeatable prices
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {[
          { title: "Fast Delivery", icon: "🚚" },
          { title: "Secure Payment", icon: "💳" },
          { title: "Best Quality", icon: "⭐" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
          </motion.div>
        ))}
      </section>

      {/* 🔥 CATEGORY SECTION */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Electronics", "Clothing", "Shoes", "Accessories"].map(
            (cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-100 p-6 rounded-xl text-center shadow cursor-pointer"
              >
                <h3 className="font-semibold">{cat}</h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 text-center bg-purple-600 text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Start Shopping Today
        </motion.h2>

        <Link
          to="/products"
          className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Explore Products
        </Link>
      </section>

    </div>
  );
};

export default Home;