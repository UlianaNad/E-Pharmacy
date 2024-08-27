import React, { useEffect, useState } from "react";

import FirstBanner from "./FirstBanner/FirstBanner";
import { useDispatch } from "react-redux";
import { getNearestPharmacyThunk } from "../../redux/pharmacy/pharmacyThunk";
import PharmacyElem from "../../components/SharedLayout/PharmacyElem/PharmacyElem";
import { WrapAddressComponent } from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useDispatch();

  const [pharmacies, setPharmacies] = useState([]);

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

  return (
    <div>
      <FirstBanner />
      <div>
        <h2>Your Nearest Medicine Store</h2>
        <span>Search for Medicine, Filter by your location</span>
        <WrapAddressComponent>
          {pharmacies && pharmacies.length > 0
            ? pharmacies.map((pharmacy) => (
                <PharmacyElem key={pharmacy._id} pharmacy={pharmacy} />
              ))
            : null}
        </WrapAddressComponent>
      </div>
    </div>
  );
};

export default HomePage;
