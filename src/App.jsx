import styled from "styled-components";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 32px;
  margin-bottom: 8px;
`;

const LogoText = styled.h1`
  font-family: "Roboto Slab", serif;
  font-size: 2.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 64px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.25rem;

  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const StyledFooter = styled.footer`
  padding: 16px;
  text-align: center;
`;

function App() {
  return (
    <>
      <StyledHeader>
        <LogoText>stuff</LogoText>

        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="shop">Shop</StyledLink>
        </StyledNav>

        <StyledButton>
          <ShoppingCart />
        </StyledButton>
      </StyledHeader>

      <Outlet />

      <StyledFooter>
        <p>Copyright (c) 2025 Zohair Gandhi. All Rights Reserved.</p>
      </StyledFooter>
    </>
  );
}

export default App;
