import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";


const Donations = () => {

    const [donations,setDonations] =useState([])
    const [noFound, setNoFound] = useState(false)
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'))
       if(donationItems){
        setDonations(donationItems)
       }
       else{
        setNoFound('no data found');
       }
       
    },[])

    console.log(donations);
    return (
        <div>
            {
                noFound ? <p>{noFound}</p> 
                :<div>
                    <div>
                        {
                            donations.map(donation=><Donation key={donation.id} donation={donation}></Donation>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donations;