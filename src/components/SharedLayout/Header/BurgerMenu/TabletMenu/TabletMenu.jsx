import {
  BurgerGreenSide,
  BurgerMenuContainer,
  StyledCloseButton,
} from "./TabletMenu.styled";
import sprite from "../../../../../assets/sprite.svg";
import NavLinks from "../../NavLinks/NavLinks";

const TabletMenu = ({ handleOpenMenu, isOpenBurgerMenu }) => {
  return (
    <BurgerMenuContainer>
      <StyledCloseButton onClick={handleOpenMenu}>
        <use href={`${sprite}#close`} />
      </StyledCloseButton>
      <div></div>
      <BurgerGreenSide>
        <NavLinks isOpenBurgerMenu={isOpenBurgerMenu}/>
      </BurgerGreenSide>
    </BurgerMenuContainer>
  );
};

export default TabletMenu;
