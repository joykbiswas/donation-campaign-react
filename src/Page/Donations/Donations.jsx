import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";


const Donations = () => {

    const [donations,setDonations] =useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] =useState(false)
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'))
       if(donationItems){
        setDonations(donationItems)
       }
       else{
        setNoFound('no data found');
       }
       
    },[])
    console.log(isShow);
    // console.log(donations);
    return (
        <div >
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center text-2xl">{noFound}</p> 
                :<div>
                    <div className="grid grid-cols-1 md:grid-cols-2 m-2 gap-8">
                        {
                            isShow ? donations.map(donation=><Donation key={donation.id} donation={donation}>                           
                            </Donation>) :
                            donations.slice(0,4).map(donation=><Donation key={donation.id} donation={donation}></Donation>)
                        }
                    </div>
                    <div className="text-center ">
                    {
                        donations.length>4 && <button onClick={()=>setIsShow(!isShow)} className="bg-orange-300 p-2  m-4" >
                        {isShow ? " See less": "See more"}
                     </button>
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donations;