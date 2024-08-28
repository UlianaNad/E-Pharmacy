import sprite from "../../../assets/sprite.svg";
import PropTypes from "prop-types";
import {
  InfoBlock,
  InfoBlockButton,
  InfoBlockSpan,
  PharmacyName,
  StoreInfoAddressWrap,
  StoreInfoBlock,
  StyledElem,
  StyledLi,
  WrapInfo,
  WrapStyledElem,
} from "./PharmacyElem.styled";

const PharmacyElem = ({ pharmacy }) => {

  return (
    <StyledLi>
      <InfoBlock>
        <PharmacyName>{pharmacy.name}</PharmacyName>
        <StoreInfoBlock>
          <svg width="16" height="16">
            <use href={`${sprite}#star`}/>
          </svg>
          <InfoBlockSpan>{pharmacy.rating}</InfoBlockSpan>
          <InfoBlockButton $isOpen={pharmacy.isOpen}>
            {pharmacy.isOpen === true ? "OPEN" : "CLOSE"}
          </InfoBlockButton>
        </StoreInfoBlock>
      </InfoBlock>
      <StoreInfoAddressWrap>
        <WrapInfo>
          <svg width="16" height="16">
            <use href={`${sprite}#map-pin`} />
          </svg>
          <span>{pharmacy.address}</span>
          <br />
          <p>{pharmacy.city}</p>
        </WrapInfo>
        <WrapInfo>
          <svg width="16" height="16">
            <use href={`${sprite}#phone`} />
          </svg>
          <span>{pharmacy.phone}</span>
        </WrapInfo>
        <WrapStyledElem>
          <StyledElem />
          <StyledElem />
          <StyledElem />
        </WrapStyledElem>
      </StoreInfoAddressWrap>
    </StyledLi>
  );
};

PharmacyElem.propTypes = {
  pharmacy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }).isRequired,
};
export default PharmacyElem;
