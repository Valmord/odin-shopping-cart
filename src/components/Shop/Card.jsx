import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { CartContext } from "../CartContext";

const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: rgb(180, 180, 230);
  gap: 10px;
  color: black;
  border-radius: 24px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  height: 300px;
  width: auto;
  object-fit: cover;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const StyledTitle = styled.h3`
  height: 60px;
  // from Chad PeTe
  display: -webkit-box;
  -webkit-box-orient: vertical; /* Makes the box behave as a multi-line flex container */
  -webkit-line-clamp: 2; /* Limits the text to two lines */
  overflow: hidden; /* Hides anything that overflows beyond the two lines */
  text-overflow: ellipsis; /* Displays "..." when content overflows */
`;

const StyledCost = styled.p`
  color: purple;
  font-weight: bold;
  margin-top: auto;
  display: inline;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: contents;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  margin: 0 10px;

  padding: 2px 6px;
  color: white;
  background-color: blueviolet;
  border-radius: 12px;
  padding: 8px;
  margin-top: 10px;

  &:hover {
    color: black;
    background: lightpink;
    cursor: pointer;
  }
`;

const StyledBtn = styled.button`
  padding: 2px 6px;
  appearance: none;
  color: white;
  background-color: blueviolet;
  border-radius: 12px;
  padding: 8px;
  margin-top: 10px;

  &:hover {
    color: black;
    background: lightpink;
    cursor: pointer;
  }

  &:active {
    position: relative;
    top: 2px;
    background-color: orange;
  }
`;

const Card = function Card({ data }) {
  const [quantity, setQuantity] = useState(1);
  const { updateCart } = useContext(CartContext);

  const handleQtyChange = function handleQuantityChange(e) {
    setQuantity(+e.target.value);
  };

  const addToCart = function addToCart() {
    updateCart(data, quantity);
  };

  return (
    <StyledCard className="card">
      <StyledLink to={`../product/${data.id}`}>
        <StyledImg src={data.image} alt="card image"></StyledImg>
      </StyledLink>
      <StyledBody className="card-body">
        <StyledTitle>{data.title}</StyledTitle>
        <div className="container">
          <StyledCost>{`Price: $${data.price.toFixed(2)}`}</StyledCost>
          <StyledSelect onChange={handleQtyChange}>
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
          </StyledSelect>
          <StyledBtn onClick={addToCart}>Add to Cart</StyledBtn>
        </div>
      </StyledBody>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
