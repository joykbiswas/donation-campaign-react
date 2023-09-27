

import PropTypes from 'prop-types';
import DonationCards from "../DonationCards/DonationCards";
 
const Cards = ({cards}) => {
    

    
    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    cards.map(card=><DonationCards key={card.id} card={card} id={card}></DonationCards>)
                }
            </div>

        </div>
    );
};

Cards.propTypes={
    cards:PropTypes.array
}

export default Cards;