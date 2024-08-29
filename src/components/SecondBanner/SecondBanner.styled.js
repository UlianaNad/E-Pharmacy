import styled from "styled-components";

export const StyledText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--black);
  text-align: center;
  margin-bottom: 14px;
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.2;
  color: #93939a;
  text-align: center;
  margin-bottom: 64px;
`;

export const WrapAddressComponent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 36px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const WrapBanner = styled.div`
  margin-bottom: 120px;

  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
