import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const DonationCards = ({card}) => {
    const{id,img,title,category} = card;

  const categoryStyles ={
    food:{
        backgroundColor: 'bg-red-100',

        textColor:'text-red-600',
    },
    clothing:{
        backgroundColor:'bg-blue-100',
        textColor:'text-blue-600',
    },
    health:{
        backgroundColor:'bg-green-200',
        textColor:'text-green-600',
    },
    education:{
        backgroundColor:'bg-yellow-100',
        textColor:'text-yellow-600',
    },
    
  }
  const styles = categoryStyles[category] || {
    backgroundColor:'bg-gray-400',
    textColor:'text-white',
  }
  
  

  // console.log(card);
  return (
    <div className={``}>
       <Link to={`/card/${id}`}>
       
      <div className={`card  ${styles.backgroundColor} shadow-xl `}>
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className={`card-body ${styles.textColor} `}>
          <h2 className={`card-title `}>{category}</h2>
          <p>{title}</p>
         
        </div>
      </div>
       </Link>
    </div>
  );
};

DonationCards.propTypes={
    card:PropTypes.array,
    id:PropTypes.array
}
export default DonationCards;