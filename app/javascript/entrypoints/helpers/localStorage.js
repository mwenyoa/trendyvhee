const LocalStorage = {
    getUser: () => {
      let now = new Date(Date.now()).getTime();
      let thirtyMinutes = 1000 * 60 * 30;
      let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
      if (timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token");
      }
    },
  
    setUser: (token) => {
      localStorage.setItem("token", token);
      localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
    },
  
    removeUser: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("lastLoginTime");
    },

      // Shopping Cart
  getCartItems: () => {
    const cartItemsString = localStorage.getItem("cartItems");
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  },

  setShoppingCartItem: (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },

  clearCart: () => {
    localStorage.removeItem("cartItems");
  },
  };
  
  export default LocalStorage;