import React from "react";
import {
  BannerNumber,
  BannerProcent,
  BannerTitle,
  FlexedDiv,
  StyledBanner,
  StyledBannersWrap,
  StyledButton,
} from "./FirstBanner.styled";
const FirstBanner = () => {
  return (
    <StyledBannersWrap>
      <StyledBanner>
        <FlexedDiv>
          <BannerNumber>
            <span>1</span>
          </BannerNumber>
          <BannerTitle>Huge Sale</BannerTitle>
        </FlexedDiv>
        <FlexedDiv>
          <BannerProcent>70%</BannerProcent>
          <StyledButton>Shop now</StyledButton>
        </FlexedDiv>
      </StyledBanner>
      <StyledBanner>
        <FlexedDiv>
          <BannerNumber>
            <span>2</span>
          </BannerNumber>
          <BannerTitle>Secure delivery</BannerTitle>
        </FlexedDiv>
        <FlexedDiv>
          <BannerProcent>100%</BannerProcent>
          <StyledButton>Read more</StyledButton>
        </FlexedDiv>
      </StyledBanner>
      <StyledBanner>
        <FlexedDiv>
          <BannerNumber>
            <span>3</span>
          </BannerNumber>
          <BannerTitle>Off</BannerTitle>
        </FlexedDiv>
        <FlexedDiv>
          <BannerProcent>35%</BannerProcent>
          <StyledButton>Shop now</StyledButton>
        </FlexedDiv>
      </StyledBanner>
    </StyledBannersWrap>
  );
};

export default FirstBanner;
