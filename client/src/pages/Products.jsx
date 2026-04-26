import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p._id} className="bg-white p-4 rounded-xl shadow">
          <img src={p.image} className="h-40 w-full object-cover" />

          <h2 className="font-bold">{p.name}</h2>
          <p>₹{p.price}</p>

          <Link to={`/product/${p._id}`} className="text-blue-500">
            View
          </Link>

          <button
            onClick={() =>
              dispatch(addToCart({ product_id: p._id, quantity: 1 }))
            }
            className="block mt-2 bg-green-500 text-white w-full py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;