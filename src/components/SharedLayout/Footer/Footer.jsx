import { useState } from "react";
import whiteLogo from "../../../assets/white-logo.png";
import sprite from "../../../assets/sprite.svg";
import {
  FlexContainer,
  FooterBottomContainer,
  FooterText,
  IconsContainer,
  MenuButton,
  StyledLogo,
  WrapContent,
  WrapNavLinks,
  Wrapper,
} from "./Footer.styled";

const Footer = () => {
  const [isHomePage, setHomePage] = useState(true);
  return (
    <Wrapper>
      <WrapContent>
        <div>
          <FlexContainer>
            <StyledLogo to="/" onClick={() => setHomePage(true)}>
              <img src={whiteLogo} alt="logo" />
              <span>E-Pharmacy</span>
            </StyledLogo>
            <WrapNavLinks>
              <MenuButton onClick={() => setHomePage(true)} to="/">
                Home
              </MenuButton>
              <MenuButton onClick={() => setHomePage(false)} to="store">
                Medicine store
              </MenuButton>
              <MenuButton onClick={() => setHomePage(false)} to="medicine">
                Medicine
              </MenuButton>
            </WrapNavLinks>
            <IconsContainer>
              <div>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="43"
                    height="43"
                    rx="9.5"
                    stroke="#F7F8FA"
                    strokeOpacity="0.1"
                  />
                  <g opacity="0.8">
                    <path
                      d="M25.0784 12.0602C25.2884 12.0602 25.4984 12.0602 25.9184 12.0602V15.2102C25.7084 15.2102 25.2884 15.2102 24.8684 15.2102C24.4484 15.2102 24.0284 15.2102 23.8184 15.4202C23.6084 15.6302 23.6084 15.8402 23.6084 16.3302C23.6084 16.7502 23.6084 17.0302 23.6084 17.4502H25.9184V20.1102H23.6084V31.6602H20.0384V20.0402H18.1484V17.3802H20.0384V16.4702C20.0384 14.9302 20.2484 13.8102 20.6684 13.3202C21.2984 12.4102 22.5584 11.9902 24.4484 11.9902C24.6584 12.0602 24.8684 12.0602 25.0784 12.0602Z"
                      fill="#F7F8FA"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="43"
                    height="43"
                    rx="9.5"
                    stroke="#F7F8FA"
                    strokeOpacity="0.1"
                  />
                  <g opacity="0.8">
                    <path
                      d="M33.1286 17.4113C33.115 16.4712 32.9408 15.5386 32.6074 14.6594C32.0241 13.158 30.8361 11.9708 29.3323 11.3897C28.4628 11.0631 27.5436 10.888 26.6131 10.8681C25.4165 10.8147 25.0371 10.7998 21.9995 10.7998C18.962 10.7998 18.5726 10.7998 17.3847 10.8681C16.4555 10.888 15.5363 11.0631 14.6668 11.3897C13.1629 11.9708 11.9738 13.158 11.3916 14.6594C11.0645 15.5274 10.8879 16.4451 10.8704 17.3728C10.817 18.5687 10.8008 18.9474 10.8008 21.9799C10.8008 25.0125 10.8008 25.3999 10.8704 26.5871C10.8891 27.516 11.0645 28.4325 11.3916 29.303C11.975 30.8031 13.1629 31.9903 14.668 32.5714C15.5338 32.9092 16.453 33.1005 17.3859 33.1303C18.5838 33.1837 18.9632 33.1998 22.0008 33.1998C25.0384 33.1998 25.4277 33.1998 26.6156 33.1303C27.5448 33.1116 28.464 32.9365 29.3348 32.6099C30.8386 32.0275 32.0266 30.8403 32.6099 29.3402C32.9371 28.4709 33.1125 27.5545 33.1311 26.6244C33.1846 25.4297 33.2008 25.051 33.2008 22.0172C33.1983 18.9847 33.1983 18.5997 33.1286 17.4113ZM21.9921 27.7147C18.8152 27.7147 16.2416 25.1453 16.2416 21.9737C16.2416 18.8021 18.8152 16.2328 21.9921 16.2328C25.1665 16.2328 27.7426 18.8021 27.7426 21.9737C27.7426 25.1453 25.1665 27.7147 21.9921 27.7147ZM27.9715 17.3591C27.2289 17.3591 26.6305 16.7606 26.6305 16.0204C26.6305 15.2803 27.2289 14.6817 27.9715 14.6817C28.7116 14.6817 29.3111 15.2803 29.3111 16.0204C29.3111 16.7606 28.7116 17.3591 27.9715 17.3591Z"
                      fill="#F7F8FA"
                    />
                    <path
                      d="M21.9918 25.4787C23.9267 25.4787 25.4953 23.9101 25.4953 21.9752C25.4953 20.0403 23.9267 18.4717 21.9918 18.4717C20.0569 18.4717 18.4883 20.0403 18.4883 21.9752C18.4883 23.9101 20.0569 25.4787 21.9918 25.4787Z"
                      fill="#F7F8FA"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="43"
                    height="43"
                    rx="9.5"
                    stroke="#F7F8FA"
                    strokeOpacity="0.1"
                  />
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.2094 13.2494C28.0194 13.1794 25.5694 13.1094 21.8594 13.1094H21.3694C17.7994 13.1094 15.4194 13.1794 14.2294 13.3194C12.6194 13.4594 11.4994 13.8794 10.8694 14.4394C10.3094 14.9294 9.88938 15.8394 9.74938 17.0294C9.67938 17.7994 9.60938 19.4094 9.60938 21.8594V22.2094C9.60938 24.5194 9.67937 26.1294 9.81937 26.8994C10.0294 28.0194 10.3794 28.8594 11.0794 29.3494C11.7794 29.9094 12.9694 30.2594 14.6494 30.3994C15.8394 30.4694 18.2894 30.5394 21.9994 30.5394H22.4894C26.0594 30.5394 28.4394 30.4694 29.6294 30.3294C31.2394 30.1894 32.3594 29.7694 32.9894 29.2094C33.5494 28.7194 33.9694 27.8094 34.1094 26.6194C34.1794 25.8494 34.2494 24.2394 34.2494 21.7894V21.4394C34.2494 19.1294 34.1794 17.5194 34.0394 16.7494C33.8294 15.6294 33.4794 14.7894 32.7794 14.2994C32.0794 13.7394 30.8894 13.3894 29.2094 13.2494ZM26.4794 21.8594L18.7794 26.4794V17.2394L26.4794 21.8594Z"
                      fill="#F7F8FA"
                    />
                  </g>
                </svg>
              </div>
            </IconsContainer>
          </FlexContainer>
          <FooterText>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </FooterText>

          <FooterBottomContainer>
            <span>© E-Pharmacy 2023. All Rights Reserved</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </FooterBottomContainer>
        </div>
      </WrapContent>
    </Wrapper>
  );
};

export default Footer;
