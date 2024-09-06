import styled from "styled-components";

export const WrapItem = styled.li`
  width: 299px;
  padding: 40px;
  background-color: #e7f1ed;
  border: 1.15px solid var(--grey);
  border-radius: 27px;
  position: relative;
  overflow: hidden;
`;
export const PharmacyName = styled.p`
  color: var(--black);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const WrapInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 14px;

  p {
    font-size: 16px;
    color: #93939a;
    line-height: 1.2;
  }
`;

export const WrapButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapStoreInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    font-weight: 500;
    line-height: 1.2;
    color: var(--black);
  }
`;

export const StyledButton = styled.button`
  width: 102px;
  padding: 10px 16px;
  background-color: var(--green);
  color: var(--white);
  font-weight: 500;
  border-radius: 24px;
  border: none;
  margin-top: 22px;
`;
