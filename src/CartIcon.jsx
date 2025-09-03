import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  position: relative;
  padding: 8px;
  color: #000;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  border-radius: 100%;
  padding: 2px 6px;
  font-size: 12px;
`;

function CartIcon({ cartSize }) {
  return (
    <Container to="cart">
      <ShoppingCart />
      {cartSize > 0 ? <CartBadge>{cartSize}</CartBadge> : null}
    </Container>
  );
}

export default CartIcon;
