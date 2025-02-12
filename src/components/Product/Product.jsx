import { useNavigate, useOutletContext, useParams } from "react-router";
import styled from "styled-components";
import styles from "./Product.module.css";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";

const StyledMain = styled.main`
  padding: 20px;
`;

const StyledH2 = styled.h2`
  margin-bottom: 20px;
  max-width: 1200px;
`;

const StyledImg = styled.img`
  max-height: 400px;
  width: auto;
`;

const StyledNavLink = styled.button`
  all: unset;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  margin-top: 20px;

  &:hover {
    color: darkblue;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1000px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Product = function Product() {
  const { id } = useParams();
  const { products } = useOutletContext();
  const { updateCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const product = products.find((product) => product.id.toString() === id);

  const handleQtyChange = function handleQuantityChange(e) {
    setQuantity(+e.target.value);
  };

  return (
    <StyledMain>
      <StyledH2>{product.title}</StyledH2>
      <StyledContainer>
        <StyledImg src={product.image} alt="" role="presentation" />
        <div className="description-container">
          <h3>Description</h3>

          <p>{product.description}</p>
        </div>
      </StyledContainer>
      <div className={styles.container}>
        <h4>In Stock</h4>

        <p>{`Price: $${product.price}`}</p>
        <label htmlFor="quantity">Quantity</label>
        <select
          name="quantity"
          id="quantity"
          className={styles.select}
          onChange={handleQtyChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <button
          className={styles.addtocart}
          onClick={() => updateCart(product[id], quantity)}
        >
          Add to cart
        </button>
      </div>
      <StyledNavLink onClick={() => navigate(-1)}>Go Back</StyledNavLink>
    </StyledMain>
  );
};

export default Product;
