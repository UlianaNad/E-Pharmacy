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
    height: ${({ $isHomePage }) => ($isHomePage ? "1024px" : "46px")};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding: 29px 128px 40px 128px;

  @media (max-width: 768px) {
    padding: 29px 32px 40px 32px;
  }
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



