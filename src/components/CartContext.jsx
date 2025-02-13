import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = function updateCart(item, quantity, mode = "add") {
    if (cart.find((cartItem) => cartItem.item.id === item.id)) {
      if (mode === "add") {
        setCart((oldCart) =>
          oldCart.map((cartItem) => {
            if (cartItem.item.id === item.id) {
              return { item, quantity: cartItem.quantity + quantity };
            }
            return cartItem;
          })
        );
      } else {
        setCart((oldCart) =>
          oldCart.map((cartItem) => {
            if (cartItem.item.id === item.id) {
              return { item, quantity };
            }
            return cartItem;
          })
        );
      }
    } else {
      setCart((oldCart) => [...oldCart, { item, quantity }]);
    }
  };

  const getCartQty = function getCartQuantity() {
    return cart.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
  };

  const getTotal = function getTotal() {
    return cart.reduce(
      (acc, currentItem) => acc + currentItem.quantity * currentItem.item.price,
      0
    );
  };

  const deleteCartItem = function deleteCartItem(item) {
    setCart((oldCart) =>
      oldCart.filter((cartItem) => cartItem.item.id !== item.id)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, getCartQty, getTotal, updateCart, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
