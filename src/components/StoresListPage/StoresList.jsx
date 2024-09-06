import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPharmacyThunk } from "../../redux/pharmacy/pharmacyThunk";
import PharmacyItem from "./PharmacyItem/PharmacyItem";
import { ContainerPharmacies, ContainerText } from "./StoresList.styled";

const StoresList = () => {
  const [pharmacyList, setPharmaciesList] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPharmacyThunk())
      .unwrap()
      .then((data) => {
        setPharmaciesList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  if(pharmacyList.length > 0){

    pharmacyList.map(pharmacy => {
      pharmacy.isOpen = (Math.floor(Math.random() * pharmacyList.length)) > 2 ? true : false

    })

}
  return (
    <div>
      <ContainerText>Medicine store</ContainerText>
      <ContainerPharmacies>
        {pharmacyList.map((pharmacy) => (
         
          <PharmacyItem key={pharmacy._id} pharmacy={pharmacy}/>
        ))}
      </ContainerPharmacies>
    </div>
  );
};

export default StoresList;
