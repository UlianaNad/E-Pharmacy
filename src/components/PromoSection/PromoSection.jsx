import { FaeturesTitle, FeaturesP, GreenBackground, StyledButton, StyledFaetures, StyledFeatureItem, WrapLeftSide, WrapPromo } from "./PromoSection.styled";
import sprite from "../../assets/sprite.svg";
import photo from "../../assets/Image.png"

const PromoSection = () => {
  const featureList = [
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed",
  ];
  return (
    <WrapPromo>
      <GreenBackground>
        <WrapLeftSide>
          <FaeturesTitle>Add the medicines you need online now</FaeturesTitle>
          <FeaturesP>
            Enjoy the convenience of having your prescriptions filled from home
            by connecting with your community pharmacy through our online
            platform.
          </FeaturesP>
          <StyledButton>Buy medicine</StyledButton>
        </WrapLeftSide>
        <div>
          <img src={photo} alt="" />
        </div>
      </GreenBackground>
      <StyledFaetures>
        {featureList.map((item, index) => (
          <StyledFeatureItem key={index}>
            <svg width="14" height="16">
              <use href={`${sprite}#flash`} />
            </svg>
            <span>{item}</span>{" "}
          </StyledFeatureItem>
        ))}
      </StyledFaetures>
    </WrapPromo>
  );
};

export default PromoSection;
