import { createSlice } from "@reduxjs/toolkit";
import { createReview } from "../services";

// review interface
interface reviewInt {
  review: {};
  error: undefined | string;
  loading: "idle" | "pending" | "succeeded" | "failed";
}
// initial state
const initialState = {
  review: {},
  error: undefined,
  loading: "idle",
} as reviewInt;

const ReviewSlice = createSlice({
  name: "Create Review",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createReview.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.review = action.payload;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default ReviewSlice.reducer