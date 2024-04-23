import React, { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks";

// types
type CartContextProps = {
  children: ReactNode;
};

type CartContext = {
  getCartItemQuantity: (id: string) => number;
  increaseCartItemQuantity: (id: string) => void;
  decreaseCartItemQuantity: (id: string) => void;
  removeCartItem: (id: string) => void;
  cartItemQuantity: number;
};

type CartItem = {
  id: string;
  quantity: number;
};

// context
const ShoppingCartContext = createContext({} as CartContext);

export const useShoppingCart = () => useContext(ShoppingCartContext);

// shopping cart provider Component
export const ShoppingCartProvider = ({ children }: CartContextProps) => {
  const { getCartItems, setShoppingCartItem } = useLocalStorage();
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update local storage whenever cart items change
  useEffect(() => {
    setShoppingCartItem(cartItems);
  }, [cartItems]);

  //--------------- Shopping Cart Methods -----------------------------//
  const getCartItemQuantity = (id: string) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

  // Increase Quantity
  const increaseCartItemQuantity = (id: string) => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      if (!updatedItems.find((item) => item.id === id)) {
        return [...prevCartItems, { id, quantity: 1 }];
      }

      return updatedItems;
    });
  };
// Decrease Quantity
  const decreaseCartItemQuantity = (id: string) => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  };
// Remove Item from cart
  const removeCartItem = (id: string) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id !== id);
    });
  };

  // cart quantity

  const cartItemQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
// ---------------- End of Shopping Cart Methods ---------------------//
  return (
    <ShoppingCartContext.Provider
      value={{
        getCartItemQuantity,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        removeCartItem,
        cartItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
