import { useEffect, useState } from "react";
import {
  StyledP,
  StyledText,
  WrapAddressComponent,
  WrapBanner,
} from "./SecondBanner.styled";
import PharmacyElem from "./PharmacyElem/PharmacyElem";
import { useDispatch } from "react-redux";
import { getNearestPharmacyThunk } from "../../redux/pharmacy/pharmacyThunk";

const SecondBanner = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const nearPharmacy = dispatch(getNearestPharmacyThunk())
      .unwrap()
      .then((data) => {
        setPharmacies(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setPharmacies(nearPharmacy);
  }, [dispatch]);


  if(pharmacies.length > 0){

      pharmacies.map(pharmacy => {
        pharmacy.isOpen = (Math.floor(Math.random() * pharmacies.length)) > 2 ? true : false

      })

  }

  return (
    <WrapBanner>
      <StyledText>Your Nearest Medicine Store</StyledText>
      <StyledP>Search for Medicine, Filter by your location</StyledP>
      <WrapAddressComponent>
        {pharmacies && pharmacies.length > 0
          ? pharmacies
              .map((pharmacy) => (
                <PharmacyElem key={pharmacy._id} pharmacy={pharmacy} />
              ))
              .slice(0, 6)
          : null}
      </WrapAddressComponent>
    </WrapBanner>
  );
};

export default SecondBanner;
