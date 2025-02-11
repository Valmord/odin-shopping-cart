import PropTypes from "prop-types";
import styled from "styled-components";

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
`;

const Card = function Card({ data }) {
  return (
    <StyledCard className="card">
      <StyledImg src={data.image} alt="card image" />
      <StyledBody className="card-body">
        <StyledTitle>{data.title}</StyledTitle>
        <StyledCost>{`Price: $${data.price.toFixed(2)}`}</StyledCost>
      </StyledBody>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
