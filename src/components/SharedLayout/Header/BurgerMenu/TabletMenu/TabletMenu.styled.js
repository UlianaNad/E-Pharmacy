import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(29, 30, 33, 0.45);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export const StyledCloseButton = styled.svg`
  position: absolute;
  top: 32px;
  right: 39px;
  width: 42px;
  height: 42px;
@media (max-width: 768px) {
    width: 32px;
    height: 32px; 
}
`;
export const BurgerGreenSide = styled.div`
  width: 334px;
  height: inherit;
  background-color: var(--green);
`;
