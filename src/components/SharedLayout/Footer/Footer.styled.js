import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-color: var(--green);
`;
export const WrapContent = styled.div`
  padding: 40px 128px;
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
export const WrapNavLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const MenuButton = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--light-grey);

  &:hover {
    color: var(--white);
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const FooterText = styled.p`
  width: 311px;
  margin-top: 20px;
  color: var(--light-grey);
  font-size: 16px;
  line-height: 1.2;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 49px;
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--light-grey);

  span {
    color: var(--light-grey);
    line-height: 1.2;
  }
`;
