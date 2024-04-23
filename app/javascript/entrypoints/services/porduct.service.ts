import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url from "../helpers/base";

type data = {
  id?: string;
  productData?: {};
  product_info?: {
    cid: string,
    pid: string
  }
};

export const createProduct = createAsyncThunk(
  "Create Product",
  async ({ productData }:data) => {
    try {
      const res = await axios.post(`${base_url}products`, productData);
      const proData = await res.data;
      return proData;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const fetchProduct = createAsyncThunk("Fetch Product",async ({product_info}:data) => {
   const {cid, pid }: any = product_info;
  try {
     const res = await axios.get(`${base_url}categories/${cid}/products/${pid}`);
     const data  = await res.data;
     return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
})