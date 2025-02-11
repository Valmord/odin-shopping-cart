import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = function NavBar() {
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
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
