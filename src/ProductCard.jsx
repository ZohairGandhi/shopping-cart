import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProdImg = styled.div`
  background-image: url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e5e4e2;
  height: 256px;
`;

const StyledPara = styled.p`
  font-weight: bold;
`;

function ProductCard({ title, price, category, image }) {
  return (
    <Card>
      <ProdImg $image={image} />
      <StyledPara>{title}</StyledPara>
      <p>
        {category
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")}
      </p>
      <StyledPara>{"$" + price}</StyledPara>
    </Card>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
