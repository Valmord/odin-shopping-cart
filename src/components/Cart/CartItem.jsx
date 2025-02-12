import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import deleteImg from "../../assets/delete.svg";

const CartItem = function CartItem({ item, updateCart }) {
  const { item: product } = item;

  const handleQuantityChange = function handleQuantityChange(e) {
    console.log(product);
    updateCart(product, +e.target.value, "edit");
  };

  return (
    <article className={styles.cartItem} key={product.id}>
      <img src={product.image} role="presentation" aria-hidden></img>
      <button className={styles.editBtn}>
        <img src={deleteImg} alt="delete" className={styles.icon} />
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
};
