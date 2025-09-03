import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Plus, Minus } from "lucide-react";

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  margin: 32px 15% 0 15%;
`;

const StyledDiv = styled.div`
  width: 65%;
  max-height: 500px;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: auto;
  margin-top: 16px;
`;

const ProductItem = styled.div`
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
  const [cart, setCart] = useOutletContext();
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
      <StyledDiv>
        <h2>Your Stuff</h2>
        <CartItems>
          {cart.map((item) => {
            return (
              <ProductItem key={item.id}>
                <ProdImg $image={item.image} />

                <ProdDetails>
                  <div>
                    <StyledPara>{item.title}</StyledPara>
                    <p>
                      {item.category
                        .split(" ")
                        .map((word) => word[0].toUpperCase() + word.slice(1))
                        .join(" ")}
                    </p>
                    <StyledPara>{"$" + item.price}</StyledPara>
                  </div>

                  <ProdQtyDiv>
                    <ProdQtyBtn type="button" onClick={() => decQty(item.id)}>
                      <Minus height="16px" />
                    </ProdQtyBtn>
                    <p>{item.quantity}</p>
                    <ProdQtyBtn type="button" onClick={() => incQty(item.id)}>
                      <Plus height="16px" />
                    </ProdQtyBtn>
                  </ProdQtyDiv>
                </ProdDetails>
              </ProductItem>
            );
          })}
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
