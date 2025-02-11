import { Link } from "react-router";
import styles from "./Homepage.module.css";

const HomePage = function HomePage() {
  return (
    <main className={styles.main}>
      <h2>Welcome to TestStore53244432!</h2>
      <p>
        The best place to find{" "}
        <strong>
          your store’s niche, e.g., unique gadgets, handcrafted goods, stylish
          apparel
        </strong>{" "}
        at unbeatable prices!
      </p>
      <h3>Why shop with us?</h3>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <strong>Handpicked Quality</strong> – Every product is carefully
          selected to ensure top-notch quality.
        </li>
        <li className={styles.li}>
          <strong>Fast & Reliable Shipping</strong> – Get your items delivered
          straight to your door in record time.
        </li>
        <li className={styles.li}>
          <strong>Satisfaction Guaranteed</strong> – If you're not happy, we’re
          not happy. Enjoy hassle-free returns.
        </li>
      </ul>
      <h3>Featured Collections</h3>
      <ul className={styles.ul}>
        <li>
          🔥 <strong>Spring Collection 2024</strong> – Fresh new arrivals to
          kick off the season.
        </li>
        <li>
          🎁 <strong>Gift Ideas</strong> – Find the perfect gift for any
          occasion.
        </li>
        <li>
          💥 <strong>Limited-Time Deals</strong> – Huge discounts on select
          items!
        </li>
      </ul>
      <h3>Start Shopping Today!</h3>
      <p>
        Browse our <Link to="shop">[Shop Page]</Link>
        &nbsp;to find the best deals and must-have products. Don't miss out!
      </p>
    </main>
  );
};

export default HomePage;
