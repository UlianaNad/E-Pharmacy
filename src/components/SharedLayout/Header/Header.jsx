import { useState } from "react";
import whiteLogo from "../../../assets/white-logo.png";
import greenLogo from "../../../assets/green-logo.png";
// import svgSprite from "../../../assets/sprite.svg";
import {
  HeroTextBlock,
  Line,
  LoginButton,
  MenuButton,
  RegisterButton,
  StyledLogo,
  UserBlockStyled,
  WrapHero,
  WrapNavLinks,
  Wrapper,
} from "./Header.styled";

const Header = () => {
  const [isHomePage, setHomePage] = useState(true);
  console.log(isHomePage);

  const HeroBlock = () => {
    return (
      <HeroTextBlock>
        <h1>Your medication delivered</h1>
        <p>Say goodbye to all your healthcare worries with us</p>
      </HeroTextBlock>
    );
  };

  return (
    <WrapHero $isHomePage={isHomePage}>
      <Wrapper>
        <StyledLogo
          to="/"
          onClick={() => setHomePage(true)}
          $isHomePage={isHomePage}
        >
          <img src={isHomePage ? whiteLogo : greenLogo} alt="logo" />
          <span>E-Pharmacy</span>
        </StyledLogo>
        <WrapNavLinks>
          <MenuButton onClick={() => setHomePage(true)} to="/">
            Home
          </MenuButton>
          <MenuButton onClick={() => setHomePage(false)} to="store">
            Medicine store
          </MenuButton>
          <MenuButton onClick={() => setHomePage(false)} to="medicine">
            Medicine
          </MenuButton>
          <Line></Line>
        </WrapNavLinks>
        <UserBlockStyled>
          <RegisterButton onClick={() => setHomePage(false)} to="register">
            Register
          </RegisterButton>
          <LoginButton onClick={() => setHomePage(false)} to="login">
            Login
          </LoginButton>
        </UserBlockStyled>
      </Wrapper>
      {isHomePage ? <HeroBlock /> : null}
    </WrapHero>
  );
};

export default Header;
