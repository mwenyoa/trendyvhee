import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url from "../helpers/base";
import LocalStorage from "../helpers/localStorage";

type data = {
  categoryData?: {};
  id?: string;
};

type Props = {};

// create category
export const createCategory = createAsyncThunk(
  "Create Category",
  async ({ categoryData }: data) => {
    try {
      const res = await axios.post(`${base_url}categories`, categoryData);
      const catData = await res.data;
      return catData;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);
// fetch categories
export const fetchCategories = createAsyncThunk(
  "Fetch Categories",
  async (Props) => {
    try {
      const res = await axios.get(`${base_url}categories`);
      const category_list = await res.data;
      return category_list;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

// fetch category
export const fetchCategory = createAsyncThunk(
  "Fetch Category",
  async ({ id }: data) => {
    try {
      const res = await axios.get(`${base_url}categories/${id}`);
      const category = await res.data;
      return category;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

// update category
export const updedateCategory = createAsyncThunk(
  "Update Category",
  async ({ id, categoryData }: data) => {
    try {
      const res = await axios.patch(
        `${base_url}categories/${id}`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${LocalStorage.getUser}`,
          },
        }
      );
      const updatedCategory = await res.data;
      return updatedCategory;
    } catch (err) {
      throw new Error(err.response.data);
    }
  }
);

// Delete category
export const deleteCategory = createAsyncThunk(
  "Delete Category",
  async ({ id }: data) => {
    try {
      const res = await axios.delete(`${base_url}categories/${id}`, {
        headers: {
          Authorization: `Bearer ${LocalStorage.getUser}`,
        },
      });
      const delData = await res.data;
      return delData;
    } catch (err) {
      throw new Error(err.response.data);
    }
  }
);
