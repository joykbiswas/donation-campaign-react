import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";

const Card = () => {
  const [donation, setDonation] = useState({});
  
  const { id } = useParams();
  
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((card) => card.id === id);
    
    setDonation(findDonation)
  }, [donations, id]);
  
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <DonationCard donation={donation}></DonationCard>
    </div>
  );
};

export default Card;
