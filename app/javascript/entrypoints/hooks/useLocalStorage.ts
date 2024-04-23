import LocalStorage from "../helpers/localStorage";

const useLocalStorage = () => {
  const { setShoppingCartItem, clearCart, getCartItems, removeUser, setUser } =
    LocalStorage;

  return { setShoppingCartItem, clearCart, getCartItems, removeUser, setUser };
};

export default useLocalStorage;
