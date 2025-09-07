import styled from "styled-components";
import { Plus, Minus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const ProdImg = styled.div`
  background-image: url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e5e4e2;
  width: 128px;
  height: 128px;
`;

const StyledPara = styled.p`
  font-weight: bold;
`;

const ProdQtyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;

const ProdQtyBtn = styled.button`
  appearance: none;
  border: none;
  border-radius: 8px;
  padding: 2px;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const ProdDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function CartItem({ id, title, price, category, image, quantity }) {
  const [_, dispatch] = useOutletContext();

  return (
    <Container>
      <ProdImg $image={image} />

      <ProdDetails>
        <div>
          <StyledPara>{title}</StyledPara>

          <p>
            {category
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
          </p>

          <StyledPara>{"$" + price}</StyledPara>
        </div>

        <ProdQtyDiv>
          <ProdQtyBtn
            type="button"
            onClick={() => dispatch({ type: "decrement_quantity", id: id })}
          >
            <Minus height="16px" />
          </ProdQtyBtn>

          <p>{quantity}</p>

          <ProdQtyBtn
            type="button"
            onClick={() => dispatch({ type: "increment_quantity", id: id })}
          >
            <Plus height="16px" />
          </ProdQtyBtn>
        </ProdQtyDiv>
      </ProdDetails>
    </Container>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
