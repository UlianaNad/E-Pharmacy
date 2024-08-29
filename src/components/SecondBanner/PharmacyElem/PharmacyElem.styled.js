import styled from "styled-components";

export const StyledLi = styled.li`
  width: 310px;
  height: 150px;
  border: 1.15px solid var(--grey);
  border-radius: 27px;
  padding: 40px;
  background-color: #e7f1ed;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 262px;
    margin-bottom: 16px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PharmacyName = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--black);
  white-space: nowrap;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StoreInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const InfoBlockSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
  line-height: 1.3;
  margin-left: 6px;
`;

export const InfoBlockButton = styled.button`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$isOpen === false ? "rgba(232, 80, 80)" : "var(--green)"};
  background-color: ${(props) =>
    props.$isOpen === false
      ? "rgba(232, 80, 80, 0.1)"
      : "rgba(89, 177, 122, 0.1)"};
  border-radius: 8px;
  border: none;
  margin-left: 14px;
`;
export const StoreInfoAddressWrap = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 14px;
  flex-direction: column;
`;
export const WrapInfo = styled.div`
  svg {
    margin-right: 8px;
  }

  span {
    color: #93939a;
    font-size: 16px;
    line-height: 1.4;
  }
  p {
    margin-left: 24px;
    color: #93939a;
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const WrapStyledElem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: rotate(22deg);
  position: absolute;
  right: -110px;
`;
export const StyledElem = styled.div`
  width: 198px;
  height: 42px;
  border-radius: 20px;
  background-color: rgb(89, 177, 122, 0.08);
  &:first-child,
  &:last-child {
    margin-left: 45px;
  }
  
`;
