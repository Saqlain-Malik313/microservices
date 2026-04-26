import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";


// 🔹 CREATE ORDER
export const createOrder = createAsyncThunk(
  "payment/createOrder",
  async (amount, { rejectWithValue }) => {
    try {
      const res = await api.post(
        `/payment/create-order`,
        { amount },
        { withCredentials: true }
      );
      return res.data.order;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

// 🔹 VERIFY PAYMENT
export const verifyPayment = createAsyncThunk(
  "payment/verify",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(
        `/payment/verify`,
        data,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    order: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(verifyPayment.fulfilled, (state) => {
        state.success = true;
      });
  },
});

export default paymentSlice.reducer;