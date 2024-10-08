import styled from "styled-components";

export const WrapSection = styled.div`
    @media (max-width: 768px) {
        padding: 0px 32px;
    }
`;

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

export const WrapReviewsCards = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
`;