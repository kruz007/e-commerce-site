import React, { createContext, useState, useEffect, useContext } from "react";
const CartContext = createContext();
const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItem")) || [];

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  let handleAddToCart = (product) => {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  function handleIncrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    }
  }

  function handleDecrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected.quantity === 1) {
      setCartItem(cartItem.filter((oneItem) => oneItem.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      );
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
