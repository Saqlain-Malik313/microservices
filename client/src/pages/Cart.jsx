import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.product_id.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {cart.map((item) => (
        <div key={item._id} className="flex justify-between bg-white p-4 mb-3 shadow rounded">
          
          <div>
            <h2 className="font-bold">{item.product_id.name}</h2>
            <p>Qty: {item.quantity}</p>
          </div>

          <p>₹{item.product_id.price}</p>
        </div>
      ))}

      <h2 className="text-xl font-bold text-right mt-4">
        Total: ₹{total}
      </h2>
    </div>
  );
};

export default Cart;