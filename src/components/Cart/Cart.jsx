import { useContext } from "react";
import { Link, useOutletContext } from "react-router";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = function Cart() {
  const { loading, error } = useOutletContext();
  const { cart, getTotal, updateCart, deleteCartItem } =
    useContext(CartContext);

  const total = getTotal();

  if (loading) return <main>Loading...</main>;
  if (error)
    return (
      <main>
        Error occurred<Link to="/">Return to Home?</Link>
      </main>
    );

  const handleClick = function handleClick() {
    alert("Feature not implement, thanks for using Shop534432!");
  };

  return (
    <main className={styles.main}>
      <h2>
        My Cart {+total > 0 && <small> | Total: ${total.toFixed(2)}</small>}
        <button className={styles["checkout-btn"]} onClick={handleClick}>
          Checkout{" "}
        </button>
      </h2>

      {cart.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          updateCart={updateCart}
          deleteCartItem={deleteCartItem}
        />
      ))}

      <div className={styles["end-container"]}>
        {+total > 0 && <h4>Total: ${total.toFixed(2)}</h4>}
        <button className={styles["checkout-btn"]} onClick={handleClick}>
          Checkout{" "}
        </button>
      </div>
    </main>
  );
};

export default Cart;
