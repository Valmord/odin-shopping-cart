import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";

const StyledSection = styled.section`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 30px;
  column-gap: 39px;
`;

const CardContainer = function CardContainer({ cards }) {
  return (
    <StyledSection className="card-container">
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </StyledSection>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.object.isRequired,
};
