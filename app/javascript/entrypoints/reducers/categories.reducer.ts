import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../services";

type CategoriesI = {
  categories: [];
  error: undefined | string;
  loading: "idle" | "pending" | "succeeded" | " failed";
};

const initialState = {
  categories: [],
  error: undefined,
  loading: "idle",
} as CategoriesI;

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = " failed";
        state.error = action.error.message;
      });
  },
});

export default CategoriesSlice.reducer;
