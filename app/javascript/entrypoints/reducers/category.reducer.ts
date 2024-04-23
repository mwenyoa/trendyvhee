import { createSlice } from "@reduxjs/toolkit";
import { createCategory, fetchCategory } from "../services";

type categoryI = {
  category: {};
  error: undefined | string;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
  category: {},
  error: undefined,
  loading: "idle",
} as categoryI;

const CategorySlice = createSlice({
  name: "Add Category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.category = action.payload;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default CategorySlice.reducer;
