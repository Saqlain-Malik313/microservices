import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";


// 🔹 ADD TO CART
export const addToCart = createAsyncThunk(
  "cart/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(`/cart/addtocarts`, data, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

// 🔹 GET CART
export const fetchCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`/cart/getcart`, {
        withCredentials: true,
      });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // ADD
      .addCase(addToCart.fulfilled, (state) => {
        // optional: refetch later
      })

      // GET
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;