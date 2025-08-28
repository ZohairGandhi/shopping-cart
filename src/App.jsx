import styled from "styled-components";
import "./App.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import homeImage from "./assets/pexels-bohlemedia-1884581.jpg";

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

const MainImg = styled.img`
  width: 60%;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

const MainTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  text-align: center;
  width: min-content;
`;

const MainHeading = styled(LogoText)``;

const MainPara = styled.p`
  width: 40ch;
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

      <MainContainer>
        <MainTextContainer>
          <div>
            <MainHeading>You want stuff?</MainHeading>
            <MainHeading>We've got stuff.</MainHeading>
          </div>

          <MainPara>
            We've been at the forefront of stuff fulfilment for quite some time
            now. We understand that stuff brings you joy, so we've made it our
            mission to get you the stuff you need. Explore our stuff and if
            something catches your eye, well it could be your stuff soon.
          </MainPara>
        </MainTextContainer>

        <MainImg src={homeImage} alt="" />
      </MainContainer>

      <StyledFooter>
        <p>Copyright (c) 2025 Zohair Gandhi. All Rights Reserved.</p>
      </StyledFooter>
    </>
  );
}

export default App;
