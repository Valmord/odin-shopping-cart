import { Link } from "react-router";
import styles from "./Navbar.module.css";
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navbar = function NavBar() {
  const { getCartQty } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link to="/" className={styles.link}>
          TestStore5324432
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="shop" className={styles.link}>
              Shop
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="cart" className={styles.link}>
              Cart
              <img src={cart} alt="" className={styles.cart} />
              <span className={styles.cartQty}>{getCartQty()}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
