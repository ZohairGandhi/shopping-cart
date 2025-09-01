import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 256px);
  justify-content: space-around;
  gap: 32px;
  padding: 0 15%;
`;

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Bad request");
        }
        return res.json();
      })
      .then((res) => setProducts(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Network error was enountered</p>;
  }

  return (
    <ProductsGrid>
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          title={prod.title}
          price={prod.price}
          category={prod.category}
          image={prod.image}
        />
      ))}
    </ProductsGrid>
  );
}

export default Shop;
