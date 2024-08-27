import sprite from "../../../assets/sprite.svg";
import PropTypes  from  'prop-types' ;
import { StyledLi } from "./PharmacyElem.styled";

const PharmacyElem = ({pharmacy}) => {
    console.log(pharmacy)
  return (
    <StyledLi>
      <div>
        <p>{pharmacy.name}</p>
        <div>
          <svg width="16" height="16">
            <use href={`${sprite}#star`} fill="yellow" />
          </svg>
        <span>{pharmacy.rating}</span>
          <button>OPEN</button>
        </div>
      </div>
      <div>
        <div>
          <svg width="16" height="16">
            <use href={`${sprite}#map-pin`} fill="yellow" />
          </svg>
          <p>{pharmacy.address}</p>
          <p>{pharmacy.city}</p>
        </div>
        <div>
          <svg width="16" height="16">
            <use href={`${sprite}#phone`} fill="yellow" />
          </svg>
          <span>{pharmacy.phone}</span>
        </div>
      </div>
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
    }).isRequired,
  };
export default PharmacyElem;
