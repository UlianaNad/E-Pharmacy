import { useState } from "react";
import sprite from "../../../../assets/sprite.svg";
import { StyledBurgerButton } from "./BurgerMenu.styled";
import TabletMenu from "./TabletMenu/TabletMenu";

const BurgerMenu = () => {
  const [isOpenBurgerMenu, setOpenBurgerMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenBurgerMenu(prev => !prev);
  };
  return (
    <div>
      {isOpenBurgerMenu ? (
        <TabletMenu handleOpenMenu={handleOpenMenu} isOpenBurgerMenu={isOpenBurgerMenu}/>
      ) : (
        <StyledBurgerButton onClick={() => handleOpenMenu()}>
          <use href={`${sprite}#align-justify`} />
        </StyledBurgerButton>
        
      )}
    </div>
  );
};

export default BurgerMenu;
