import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded-xl shadow w-[400px]">
        <img src={product.image} className="h-60 w-full object-cover" />

        <h2 className="text-xl font-bold mt-3">{product.name}</h2>
        <p>{product.description}</p>

        <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>

        <button
          onClick={() =>
            dispatch(addToCart({ product_id: product._id, quantity: 1 }))
          }
          className="w-full mt-3 bg-green-500 text-white py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;