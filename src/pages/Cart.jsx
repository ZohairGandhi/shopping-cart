import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components//CartItem";

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  margin: 32px 15% 0 15%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 16px;
  }
`;

const StyledDiv = styled.div`
  width: 65%;
  max-height: 500px;

  @media screen and (max-width: 600px) {
    width: 100%;
    max-height: 100%;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: auto;
  margin-top: 16px;
`;

const SummarySec = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
`;

const CostsSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CostItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckoutBtn = styled.button`
  appearance: none;
  background-color: #000;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 32px;

  &:hover {
    opacity: 75%;
  }

  &:disabled {
    opacity: 50%;
    cursor: default;
  }
`;

function Cart() {
  const [cart, _] = useOutletContext();
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container>
      <StyledDiv>
        <h2>Your Stuff</h2>
        <CartItems>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </CartItems>
      </StyledDiv>

      <SummarySec>
        <h2>Summary</h2>

        <CostsSec>
          <CostItem>
            <p>Subtotal</p>
            <p>{"$" + subTotal.toFixed(2)}</p>
          </CostItem>

          <CostItem>
            <p>Shipping</p>
            <p>$9.99</p>
          </CostItem>

          <hr />

          <CostItem>
            <p>Total</p>
            <p>{"$" + (subTotal + 9.99).toFixed(2)}</p>
          </CostItem>
        </CostsSec>

        <CheckoutBtn
          type="button"
          onClick={() =>
            alert(
              "Maybe go to a real storefront if you're actually trying to buy things?",
            )
          }
          disabled={cart.length === 0 ? true : null}
        >
          Checkout
        </CheckoutBtn>
      </SummarySec>
    </Container>
  );
}

export default Cart;
