import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";

// 🔹 BASE URL

// ================= REGISTER =================
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(`/auth/register`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// ================= LOGIN =================
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(`/auth/login`, data, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// ================= GET USER =================
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`/auth/me`, {
        withCredentials: true,
      });
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// ================= LOGOUT =================
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post(`/auth/logout`, {}, { withCredentials: true });
      return true;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// ================= SLICE =================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET USER
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;