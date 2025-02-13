import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import deleteImg from "../../assets/delete.svg";
import { Link } from "react-router";

const CartItem = function CartItem({ item, updateCart, deleteCartItem }) {
  const { item: product } = item;

  const handleQuantityChange = function handleQuantityChange(e) {
    updateCart(product, +e.target.value, "edit");
  };

  const handleDeleteItem = function handleDeleteCartItem() {
    deleteCartItem(product);
  };

  return (
    <article className={styles.cartItem} key={product.id}>
      <Link to={`/product/${product.id}`} className={styles.linkbtn}>
        <img src={product.image} role="presentation" aria-hidden></img>
      </Link>
      <button className={styles.editBtn}>
        <img
          src={deleteImg}
          alt="delete"
          className={styles.icon}
          onClick={handleDeleteItem}
        />
      </button>
      <div className={styles.contentContainer}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="price-container">
          <p>
            Quantity:{" "}
            <input
              type="number"
              defaultValue={item.quantity}
              className={styles.input}
              onChange={handleQuantityChange}
            />{" "}
            | ${product.price.toFixed(2)} each
          </p>
          <p>Total: ${(item.quantity * product.price).toFixed(2)}</p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateCart: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};
