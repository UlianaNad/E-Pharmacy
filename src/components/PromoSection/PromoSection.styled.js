import styled from "styled-components";

export const WrapPromo = styled.div`
  margin-bottom: 120px;
`;

export const StyledFaetures = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 64px;
`;

export const StyledFeatureItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    line-height: 1.3;
    font-weight: 600;
    color: var(--black);
    margin-left: 8px;
  }
`;

export const GreenBackground = styled.div`
  width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px 40px 80px;
  border: none;
  border-radius: 32px;
  background-color: var(--green);
`;
export const FaeturesTitle = styled.h2`
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    color: var(--grey);
    margin-bottom: 24px;
`;
export const FeaturesP = styled.p`
    font-size: 16px;
    line-height: 1.25;
    color: var(--grey);
    margin-bottom:40px ;
`;

export const StyledButton = styled.button`
    border: 1px solid rgba(241,241,241, 0.5);
    border-radius: 60px;
    background-color: transparent;
    padding: 13px 50px;
    color: var(--grey);
    font-weight: 500;
`;
export const WrapLeftSide = styled.div`
    width: 485px;
    padding: 64px 0px;
`;