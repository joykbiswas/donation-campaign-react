
import PropTypes from 'prop-types';
const DonationCard = ({donation}) => {
    const{img,title,category} = donation;
    console.log(donation);
  return (
    <div>
      <h2>donation card</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div>
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-actions justify-start pl-9">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes={
    donation:PropTypes.array
}
export default DonationCard;
