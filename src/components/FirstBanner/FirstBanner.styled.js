import styled from "styled-components";

export const StyledBannersWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-top: 64px;
  margin-bottom: 120px;
`;

export const StyledBanner = styled.li`
  width: 321px;
  border: 1.15px solid var(--grey);
  border-radius: 27px;
  padding: 14px 18px;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
`;
export const FlexedDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const BannerNumber = styled.p`
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background-color: var(--light-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 28px;
        text-align: center;
        color: var(--green);
    }
`;

export const BannerTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--dark-blue);
`;

export const BannerProcent = styled.p`
    font-size: 36px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--dark-blue);
    margin-right: 14px;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 13px;
    line-height: 1.3;
    color: #93939a;
`;