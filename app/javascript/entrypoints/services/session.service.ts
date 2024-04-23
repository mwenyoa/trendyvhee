import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import LocalStorage from "../helpers/localStorage";

type LoginProps = {};

export const loginUser = createAsyncThunk(
  "user/userLogin",
  async (user: LoginProps) => {
    try {
      const response = await axios.post("/users/sign_in", user);
      const res = await response.data;
      console.log("res ", res);
      if (response.status === 200) {
        localStorage.setItem("token", response.headers.authorization!);
        localStorage.setItem(
          "lastLoginTime",
          new Date(Date.now()).getTime() as any
        );
        return res;
      } else {
        throw new Error(res.response);
      }
    } catch (error) {
      if (error.response.status === 401) {
        throw new Error(error.response.data);
      }
    }
  }
);

export const logoutUser = createAsyncThunk("user/userLogout", async () => {
  try {
    const response = await axios.delete("/users/sign_out", {
      headers: {
        "Content-Type": "application/json",
        Authorization: LocalStorage.getUser(),
      },
    });
    const res = await response.data;

    return res;
  } catch (e) {
    throw new Error(e.response.data);
  }
});
