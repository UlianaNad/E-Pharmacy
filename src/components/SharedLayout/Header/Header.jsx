import { useState } from "react";
import whiteLogo from "../../../assets/white-logo.png";
import greenLogo from "../../../assets/green-logo.png";
import { StyledLogo, WrapHero, Wrapper } from "./Header.styled";
import NavLinks from "./NavLinks/NavLinks";
import  {  useMediaQuery  }  from  'react-responsive';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import HeroBlock from "./HeroBlock/HeroBlock";


const Header = () => {
  const [isHomePage, setHomePage] = useState(true);
  const  isTablet  =  useMediaQuery ( {  query : '(max-width: 1060px)'  } );

  
  return (
    <WrapHero $isHomePage={isHomePage}>
      <Wrapper>
        <StyledLogo
          to="/"
          onClick={() => setHomePage(true)}
          $isHomePage={isHomePage}
        >
          <img src={isHomePage ? whiteLogo : greenLogo} alt="logo" />
          <span>E-Pharmacy</span>
        </StyledLogo>
        
        {
          isTablet ? <BurgerMenu /> : <NavLinks setHomePage={setHomePage}/>
        }
      </Wrapper>
      {isHomePage ? <HeroBlock /> : null}
    </WrapHero>
  );
};

export default Header;
