import React from "react";
import sprite from "../../assets/sprite.svg";
import {
  BannerNumber,
  BannerProcent,
  BannerTitle,
  FlexedDiv,
  StyledBanner,
  StyledBannersWrap,
  StyledButton,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
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
      <div>
        <h2>Your Nearest Medicine Store</h2>
        <span>Search for Medicine, Filter by your location</span>
        <ul>
          <li>
            <div>
              <p>Huge Sale</p>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#star`} fill="yellow" />
                </svg>
                <span>2</span>
                <button>OPEN</button>
              </div>
            </div>
            <div>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#map-pin`} fill="yellow" />
                </svg>
                <p>Albenia G83</p>
                <p>Seoul</p>
              </div>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#phone`} fill="yellow" />
                </svg>
                <span>717-24-2429</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
