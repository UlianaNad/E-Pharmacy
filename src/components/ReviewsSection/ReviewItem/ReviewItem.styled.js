import styled from "styled-components";

export const ReviewCard = styled.li`
  width: 324px;
  height: 190px;
  padding: 0px 28px 40px 28px;
  border: 1px solid var(--grey);
  border-radius: 27px;
  background-color: #fdfdfd;

  @media (max-width: 768px) {
    &:last-child{
        display:none;
    }
  }
`;

export const StyledPhoto = styled.img`
    margin: 0 auto;
    margin-top: -24px;
    margin-bottom: 14px;
`;
export const CustomerName = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--black);
    text-align: center;
    margin-bottom: 16px;
`;

export const TextReview = styled.p`
    font-size: 16px;
    line-height: 1.2;
    color: #93939a;
    text-align: center;
`;