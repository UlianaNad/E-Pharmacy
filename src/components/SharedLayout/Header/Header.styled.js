import styled from "styled-components";
import pills from "../../../assets/pills-img.png";
import { NavLink } from "react-router-dom";

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
export const WrapHero = styled.div`
  height: 800px;
  width: 1440px;
  background-color: var(--green);
  background-image: url(${pills});
  background-repeat: no-repeat;
  background-position: center;
  color: var(--white);
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
    border: 8px solid var(--light-grey);
    z-index: 40;
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
  color: var(--white);
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
  color: var(--light-grey);
  background-color: var(--green);
  &:hover{
    background-color: var(--dark-green);
  }
`;
export const UserBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
