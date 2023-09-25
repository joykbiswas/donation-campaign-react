
import PropTypes from 'prop-types';
import swal from 'sweetalert';
const DonationCard = ({donation}) => {
    const{id,img,title,category} = donation;
    console.log(donation);

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
        
        }
        else{
          swal("Good job!", "You have already donation!", "error");
        }

        // const isExists = donationItems.find(donation =>donation.id ===id)
        // if(!isExists){
        //   addedDonation.push(...donationItems,donation)
        //   localStorage.setItem('donations',JSON.stringify(addedDonation))
          
        // }else{
        //   swal("Good job!", "Your donation already done!", "success");
        // }
        
        
        
        
      }
      
    }
  return (
    <div>
      <h2>donation card</h2>
      <div className={`card w-96   ${styles.backgroundColor} shadow-xl`}>
        <div className=''>
        <figure className='relative'>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="absolute bottom-28 left-6 bg-gray-400 p-3 w ml-3 w-[314px] card-actions justify-start pl-9">
            <button onClick={handleShowDonation} className={`p-2 rounded-lg text-white  ${styles.btnBackgroundColor} `}>Buy Now</button>
          </div>
        </div>
        <div className={`card-body ${styles.textColor} `}>
          <h2 className="card-title">{title}</h2>
          <p className=''>{category}</p>
          
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes={
    donation:PropTypes.array
}
export default DonationCard;
