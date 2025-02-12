import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const updateCart = function updateCart(item, quantity) {
    if (cart.find((cartItem) => cartItem === item)) {
      setCart((oldCart) =>
        oldCart.map((cartItem) => {
          if (cartItem === item) {
            return { item, quantity: cartItem.quantity + quantity };
          }
          return { item, quantity };
        })
      );
    } else {
      setCart((oldCart) => [...oldCart, { item, quantity }]);
    }
  };

  const getCartQty = function getCartQuantity() {
    return cart.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, getCartQty, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
