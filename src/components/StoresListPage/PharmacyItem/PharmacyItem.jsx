import sprite from "../../../assets/sprite.svg";
import {
  InfoBlockButton,
  StyledElem,
  WrapStyledElem,
} from "../../SecondBanner/PharmacyElem/PharmacyElem.styled";
import PropTypes from "prop-types";
import {
  PharmacyName,
  StyledButton,
  WrapButtons,
  WrapInfo,
  WrapItem,
  WrapRating,
  WrapStoreInfo,
} from "./PharmacyItem.styled";

const PharmacyItem = ({ pharmacy }) => {
  return (
    <WrapItem>
      <PharmacyName>{pharmacy.name}</PharmacyName>
      <WrapInfo>
        <svg width="18" height="18">
          <use href={`${sprite}#map-pin`} />
        </svg>
        <div>
          <p>{pharmacy.address}</p>
          <p>{pharmacy.city}</p>
        </div>
      </WrapInfo>
      <WrapInfo>
        <svg width="18" height="18">
          <use href={`${sprite}#phone`} />
        </svg>
        <p>{pharmacy.phone}</p>
      </WrapInfo>
      <WrapButtons>
        <StyledButton>Visit Store</StyledButton>
        <div>
          <WrapStoreInfo>
            <WrapRating>
              <svg width="16" height="16">
                <use href={`${sprite}#star`} />
              </svg>
              <span>{pharmacy.rating}</span>
            </WrapRating>
            <InfoBlockButton $isOpen={pharmacy.isOpen}>
              {pharmacy.isOpen === true ? "OPEN" : "CLOSE"}
            </InfoBlockButton>
          </WrapStoreInfo>
        </div>
      </WrapButtons>
      <WrapStyledElem>
        <StyledElem />
        <StyledElem />
        <StyledElem />
      </WrapStyledElem>
    </WrapItem>
  );
};

PharmacyItem.propTypes = {
  pharmacy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // assuming rating is a number
    isOpen: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PharmacyItem;
