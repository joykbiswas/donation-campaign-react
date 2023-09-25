import PropTypes from 'prop-types';

const Donation = ({ donation }) => {
  const {  img, title, category, price } = donation;
  



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

  return (
    <div>
      
      <div className={`relative flex  max-w-[48rem] flex-row rounded-xl   text-gray-700 shadow-md  ${styles.backgroundColor}`}>
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={img}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className={`p-6 ${styles.backgroundColor}`}>
        <p className={`mb-2 block font-sans text-lg font-normal leading-relaxed ${styles.textColor} antialiased`}>
            {category}
          </p>
          <h6 className={`text-2xl ${styles.textColor}`}>
           {title}
          </h6>
          
          <p className={`${styles.textColor} mb-4 block font-sans  font-normal leading-relaxed  antialiased`}>
            ${price}
          </p>
          <a className="inline-block" href="#">
            <button
              className={`flex p-2 rounded-xl text-white ${styles.btnBackgroundColor}`}
              type="button"
            >
              View Details
              
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes={
  donation:PropTypes.array
}

export default Donation;
