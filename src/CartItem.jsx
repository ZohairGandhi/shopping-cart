import styled from "styled-components";
import { Plus, Minus } from "lucide-react";
import { useOutletContext } from "react-router-dom";

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
  const [cart, setCart] = useOutletContext();

  function incQty(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      }),
    );
  }

  function decQty(id) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    setCart(newCart.filter((item) => item.quantity > 0));
  }

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
          <ProdQtyBtn type="button" onClick={() => decQty(id)}>
            <Minus height="16px" />
          </ProdQtyBtn>

          <p>{quantity}</p>

          <ProdQtyBtn type="button" onClick={() => incQty(id)}>
            <Plus height="16px" />
          </ProdQtyBtn>
        </ProdQtyDiv>
      </ProdDetails>
    </Container>
  );
}

export default CartItem;
