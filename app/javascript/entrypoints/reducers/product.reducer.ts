import { createSlice } from "@reduxjs/toolkit";
import { createProduct, fetchProduct } from "../services";

interface productInt {
  product: any;
  error: string | undefined;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  product: {},
  error: "",
  loading: "idle",
} as productInt;

const ProductSlice = createSlice({
  name: "Create Product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
