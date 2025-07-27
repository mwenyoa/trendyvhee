import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "../services/reviews.service";

interface reviewInt {
  reviews: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState: reviewInt = {
  reviews: [],
  loading: "idle",
  error: undefined,
};

const ReviewsSlice = createSlice({
  name: "Product Reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.reviews = action.payload;
        // console.log("Review Reducer: ", state.reviews)
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default ReviewsSlice.reducer;
