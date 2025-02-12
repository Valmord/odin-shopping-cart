import { useOutletContext, useParams } from "react-router";

const Product = function Product() {
  console.log("here");
  const { id } = useParams();
  console.log(typeof id);
  const { products } = useOutletContext();

  const product = products.find((product) => product.id.toString() === id);

  return (
    <main>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" role="presentation" />
      <p>{`${product.price}`}</p>
      <label htmlFor="quantity">Quantity</label>
      <input type="text" id="quantity" />
      <hr />
      <p>{product.description}</p>
    </main>
  );
};

export default Product;
