import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../API/main";
import axios from "axios";
import type { ProductState } from "../types/Types";

const initialState: ProductState = {
  value: [],
  isLoading: false,
  errorMessage: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    });
  },
});

export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
  try {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data.products;
  } catch (error: any) {
    return error.message;
  }
});

export default productSlice.reducer;
