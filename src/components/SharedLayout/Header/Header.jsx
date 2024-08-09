import { NavLink } from "react-router-dom";
import logo from "../../../assets/white-logo.png";
import svgSprite from "../../../assets/sprite.svg";
import {
  Line,
  MenuButton,
  RegisterButton,
  StyledLogo,
  UserBlockStyled,
  WrapHero,
  WrapNavLinks,
  Wrapper,
} from "./Header.styled";

const Header = () => {
  return (
    <WrapHero>
      <Wrapper>
        <StyledLogo to="/">
          <img src={logo} alt="logo" />
          <span>E-Pharmacy</span>
        </StyledLogo>
        <WrapNavLinks>
          <MenuButton to="/">Home</MenuButton>
          <MenuButton to="store">Medicine store</MenuButton>
          <MenuButton to="medicine">Medicine</MenuButton>
          <Line></Line>
        </WrapNavLinks>
        <UserBlockStyled>
          <RegisterButton to="register">Register</RegisterButton>
          <NavLink to="login">Login</NavLink>
        </UserBlockStyled>
      </Wrapper>
      <div>
        <h1>Your medication delivered</h1>
        <p>Say goodbye to all your healthcare worries with us</p>
      </div>
    </WrapHero>
  );
};

export default Header;
