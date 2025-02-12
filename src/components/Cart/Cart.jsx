import { useContext } from "react";
import { Link, useOutletContext } from "react-router";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";

const Cart = function Cart() {
  const { loading, error, products } = useOutletContext();
  const { cart } = useContext(CartContext);

  console.log("Cart", cart);

  if (loading) return <main>Loading...</main>;
  if (error)
    return (
      <main>
        Error occured<Link to="/">Return to Home?</Link>
      </main>
    );

  return (
    <main>
      <h2>My Cart</h2>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Cart;
