import PropTypes from 'prop-types'; 

const Card = ({ card }) => {
    const{id,img,title,category} = card;
  console.log(card);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{title}</p>
         
        </div>
      </div>
    </div>
  );
};

Card.propTypes={
    card:PropTypes.array
}
export default Card;
