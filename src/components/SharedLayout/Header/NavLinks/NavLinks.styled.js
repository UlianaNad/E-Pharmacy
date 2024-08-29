import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FlexForBurger = styled.div`
  display: flex;
  justify-content: ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "space-between" : "center"};
  flex-direction: ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "column" : "row"};
  padding: 64px 64px;
  gap:  ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "422px": "0"};
`;
export const WrapNavLinks = styled.div`
  flex-direction: ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "column" : "row"};
  margin-top: ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "265px" : "0px"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
export const MenuButton = styled(NavLink)`
  padding: 8px 20px;
  background-color: var(--white);
  border-radius: 24px;
  color: var(--dark-grey);
  border: 8px solid var(--white);
  z-index: 40;
  &.active {
    padding: 8px 20px;
    background-color: var(--green);
    border-radius: 24px;
    color: var(--white);
    border: ${({ $isHomePage }) =>
      $isHomePage ? "8px solid var(--light-grey)" : "8px solid var(--white)"};
    z-index: 40;

    &:hover {
      color: var(--light-grey);
    }
  }
  &:hover {
    color: var(--green);
  }
`;
export const UserBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const Line = styled.div`
  position: absolute;
  top: 35%;
  left:${({ $isOpenBurgerMenu }) => ($isOpenBurgerMenu ? "47px" : "10px")}; 
  height: 15px;
  width: ${({ $isOpenBurgerMenu }) => ($isOpenBurgerMenu ? "55%" : "90%")};
  background-color: var(--white);
  transform: ${({ $isOpenBurgerMenu }) =>
    $isOpenBurgerMenu ? "rotate(90deg)" : "none"};
`;

export const RegisterButton = styled(NavLink)`
  padding: 16px 32px 16px 32px;
  border-radius: 60px;
  border: 1px solid var(--light-grey);
  color: var(--grey);
  background-color: var(--green);
  &:hover {
    background-color: var(--dark-green);
  }
`;
export const LoginButton = styled(NavLink)`
  color: var(--grey);
  text-decoration: underline;
`;
