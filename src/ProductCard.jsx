import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
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

const StyledBtn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    opacity: 75%;
  }
`;

function ProductCard({ id, title, price, category, image }) {
  const [cart, setCart] = useOutletContext();

  function addToCart(prod) {
    const prevCart = [...cart];
    let isProdInCart = false;

    prevCart.forEach((item) => {
      if (item.id === prod.id) {
        isProdInCart = true;
        item.quantity += 1;
        return;
      }
    });

    if (isProdInCart) {
      setCart([...prevCart]);
    } else {
      setCart([...cart, { ...prod, quantity: 1 }]);
    }
  }

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
      <StyledBtn
        type="button"
        onClick={() => addToCart({ id, title, price, category, image })}
      >
        Add to Cart
      </StyledBtn>
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
