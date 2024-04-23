import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser } from "../services";

interface Iuser {
  user: {};
  error: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  user: {},
  error: "",
  loading: "idle",
} as Iuser;

const NewUserReducer = createSlice({
  name: "New User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default NewUserReducer.reducer;
