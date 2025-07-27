import { createAsyncThunk } from "@reduxjs/toolkit";
import base_url from "../helpers/base";
import axios from "axios";
import { ReviewData } from "../helpers";

// action creators
export const createReview = createAsyncThunk(
  "Create Review",
  async ({ review }: ReviewData) => {
    try {
      const res = await axios.post(`${base_url}reviews`, review);
      const data = await res.data;
      return data;
    } catch (err) {
      throw new Error(err.response.data.error);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  "Fetch Reviews",
  async ({ review }: ReviewData) => {
    try {
      const res = await axios.get(
        `${base_url}product-reviews/${`428e0b78-0207-4603-b2b5-4c96730c84a9`}`
      );
      const data = await res.data;
      console.log("Data  tttt: ", data);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);
