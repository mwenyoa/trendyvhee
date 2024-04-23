import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCategories, fetchCategory, fetchProduct } from "../services";

type data = {
  id?: string;
  product_info?: {
    [key: string]: string | undefined;
    cid?: string,
    pid?: string 
  };
};

// Fetch Categories
export const useFetchCategories = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);
  useEffect(() => {
    if (categories?.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);
  return categories;
};

// Fetch Category
export const useFetchCategory = ({ id }: data) => {
  const dispatch: AppDispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.category);
  useEffect(() => {
    dispatch(fetchCategory({ id }));
  }, [dispatch, id]);
  return category;
};

// Fetch Product
export const useFetchProduct = ({ product_info }: data) => {
  const dispatch: AppDispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.product);
  const prod = { product_info };
  useEffect(() => {
    dispatch(fetchProduct(prod));
  }, [dispatch, product_info?.cid, product_info?.pid]);
  return product;
};
