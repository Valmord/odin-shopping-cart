import PropTypes from "prop-types";

const CartItem = function CartItem({ item }) {
  const { item: product } = item;
  return (
    <article className="cart-item" key={product.id}>
      <img src={product.image} role="presentation" aria-hidden></img>
      <div className="content-container">
        <h3>{product.title}</h3>
        <p>{product.descripiton}</p>
        <div className="price-container">
          <p>Price each: ${product.price}</p>
          <p>Quantity: {item.quantity}</p>
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
