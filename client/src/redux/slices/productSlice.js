import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";



// 🔹 GET ALL PRODUCTS
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`/products/getproducts`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// 🔹 GET PRODUCT BY ID
export const fetchProductById = createAsyncThunk(
  "product/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/products/getproductbyid/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    singleProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // ALL PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SINGLE PRODUCT
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      });
  },
});

export default productSlice.reducer;