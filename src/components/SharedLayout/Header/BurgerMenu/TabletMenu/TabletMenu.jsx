import {
  BurgerGreenSide,
  BurgerMenuContainer,
  StyledCloseButton,
} from "./TabletMenu.styled";
import PropTypes from "prop-types";
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

TabletMenu.propTypes = {
    handleOpenMenu: PropTypes.func.isRequired, 
    isOpenBurgerMenu: PropTypes.bool.isRequired, 
  };

export default TabletMenu;
