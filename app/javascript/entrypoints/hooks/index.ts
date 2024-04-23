import { useFetchCategories, useFetchProduct } from "./UseFetch";
import useIsLoading from "../hooks/useIsLoading";
import ShowAlert from "../hooks/toastyMessage";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useLocalStorage from "./useLocalStorage";

export {
  useFetchCategories,
  useIsLoading,
  ShowAlert,
  useFetchProduct,
  useShoppingCart,
  useLocalStorage
};
