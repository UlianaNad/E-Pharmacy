import React from "react";
import PropTypes from "prop-types";
import { FlexForBurger, Line, LoginButton, MenuButton, RegisterButton, UserBlockStyled, WrapNavLinks } from "./NavLinks.styled";

const NavLinks = ({setHomePage, isOpenBurgerMenu}) => {

  return (
    <FlexForBurger $isOpenBurgerMenu={isOpenBurgerMenu}>
      <WrapNavLinks $isOpenBurgerMenu={isOpenBurgerMenu}>
        <MenuButton onClick={() => setHomePage(true)} to="/">
          Home
        </MenuButton>
        <MenuButton onClick={() => setHomePage(false)} to="store">
          Medicine store
        </MenuButton>
        <MenuButton onClick={() => setHomePage(false)} to="medicine">
          Medicine
        </MenuButton>
        <Line $isOpenBurgerMenu={isOpenBurgerMenu}></Line>
      </WrapNavLinks>
      <UserBlockStyled>
        <RegisterButton onClick={() => setHomePage(false)} to="register">
          Register
        </RegisterButton>
        <LoginButton onClick={() => setHomePage(false)} to="login">
          Login
        </LoginButton>
      </UserBlockStyled>
    </FlexForBurger>
  );
};

NavLinks.propTypes = {
  setHomePage: PropTypes.func.isRequired, 
  isOpenBurgerMenu: PropTypes.bool.isRequired, 
};

export default NavLinks;
