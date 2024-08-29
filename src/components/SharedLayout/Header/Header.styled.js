import styled from "styled-components";
import pills from "../../../assets/pills-img.png";
import { NavLink } from "react-router-dom";

export const WrapHero = styled.div`
  height: ${({ $isHomePage }) => ($isHomePage ? "800px" : "46px")};
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${({ $isHomePage }) =>
    $isHomePage ? "var(--green)" : "none"};
  background-image: ${({ $isHomePage }) =>
    $isHomePage ? `url(${pills})` : "none"};
  background-repeat: no-repeat;
  background-position: center;
  color: var(--white);

  @media (max-width: 768px) {
    max-width:768px;
    
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding: 29px 128px 40px 128px;
`;

export const WrapNavLinks = styled.div`
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
export const Line = styled.div`
  position: absolute;
  top: 35%;
  left: 10px;
  height: 15px;
  width: 90%;
  background-color: var(--white);
`;

export const StyledLogo = styled(NavLink)`
  color: ${({ $isHomePage }) =>
    $isHomePage ? "var(--white)" : "var(--black)"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  span {
    font-size: 20px;
    font-weight: 600;
  }
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
export const UserBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const LoginButton = styled(NavLink)`
  color: var(--grey);
  text-decoration: underline;
`;

export const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 610px;
  margin: 0 auto;
  margin-top: 145px;
  h1 {
    font-size: 74px;
    font-weight: 600;
  }
  p {
    padding-right: 50px;
    margin-top: 24px;
    align-self: flex-end;
    width: 210px;
    font-size: 16px;
    line-height: 1.2;
  }
`;
