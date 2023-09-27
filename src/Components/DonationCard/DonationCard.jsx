
import PropTypes from 'prop-types';
import swal from 'sweetalert';
const DonationCard = ({donation}) => {
    const{id,img,title,category, description, price} = donation;
    // console.log(donation);

    const categoryStyles ={
      food:{
          backgroundColor: 'bg-red-100',
          btnBackgroundColor: 'bg-red-400',
          textColor:'text-red-600',
      },
      clothing:{
          backgroundColor:'bg-blue-100',
          btnBackgroundColor: 'bg-blue-400',
          textColor:'text-blue-600',
      },
      health:{
          backgroundColor:'bg-green-100',
          btnBackgroundColor: 'bg-green-400',
          textColor:'text-green-600',
      },
      education:{
          backgroundColor:'bg-yellow-100',
          btnBackgroundColor: 'bg-yellow-400',
          textColor:'text-yellow-600',
      },
      
    }
    const styles = categoryStyles[category] || {
      backgroundColor:'bg-gray-400',
      btnBackgroundColor: 'bg-gray-400',
      textColor:'text-white',
    }

    const handleShowDonation =() =>{
      const addedDonation =[];
      const donationItems = JSON.parse(localStorage.getItem('donations'))
      if(!donationItems){
         addedDonation.push(donation)
         localStorage.setItem('donations',JSON.stringify(addedDonation))
         swal("Good job!", "Your Donation done!", "success");
      }
      else{
        const isExists = donationItems.find(donation =>donation.id ===id)
        if(!isExists){
          addedDonation.push(...donationItems,donation)
          localStorage.setItem('donations',JSON.stringify(addedDonation))
          swal("Good job!", "Your Donation done!", "success");
        }
        else{
          swal("Good job!", "You have already donation!", "error");
        }

        
      }
      
    }
  return (
    <div>
      
      <div className={`card w-full   ${styles.backgroundColor} shadow-xl`}>
        <div className=''>
        <figure className='relative'>
          <img className=' w-full' src={img} alt="Shoes" />
        </figure>
        <div className="absolute bottom-40 left-6 bg-base-300 p-6 -ml-6  w-full  card-actions justify-start ">
            <button onClick={handleShowDonation} className={`p-2 rounded-lg text-white 
             ${styles.btnBackgroundColor} `}> Donate ${price}</button>
          </div>
        </div>
        <div className={`card-body ${styles.textColor} `}>
          <p className=''>{category}</p>
          <h2 className="card-title">{title}</h2>
          <h3>{description}</h3>
          
          
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes={
    donation:PropTypes.array
}
export default DonationCard;
