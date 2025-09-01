import styled from "styled-components";
import homeImage from "./assets/pexels-bohlemedia-1884581.jpg";

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

const LogoText = styled.h1`
  font-family: "Roboto Slab", serif;
  font-size: 2.5rem;
`;

const MainHeading = styled(LogoText)``;

const MainPara = styled.p`
  width: 40ch;
`;

function Home() {
  return (
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
  );
}

export default Home;
