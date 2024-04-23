import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url from "../helpers/base";

type data = {
  user?: {};
  id?: number;
};

// register
export const RegisterUser = createAsyncThunk(
  "Create User",
  async ({ user }: data) => {
    try {
      const res = await axios.post("/users", user);
      const data = await res.data;
      return data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  }
);

