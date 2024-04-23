import { createAsyncThunk } from "@reduxjs/toolkit";
import base_url from "../helpers/base";
import axios from "axios";

// type
type reviewData = {
  id: number;
  reviewInfo?: {
    product_id: number;
    user_id: number;
    rating: number;
    review_text: string;
  };
};

// action creators
export const createReview = createAsyncThunk(
  "Create Review",
  async ({ reviewInfo }: reviewData) => {
    try {
      const res = await axios.post(`${base_url}reviews`, reviewInfo);
      const data = await res.data;
      return data;
    } catch (err) {
      throw new Error(err.response.error.data);
    }
  }
);
