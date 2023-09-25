

import PropTypes from 'prop-types';
import DonationCards from "../DonationCards/DonationCards";
 
const Cards = ({cards}) => {
    

    // const cards = useLoaderData()
    // console.log(cards);
    return (
        <div>
            <h1>All data show</h1>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    cards.map(card=><Card key={card.id} card={card} id={card}></Card>)
                }
            </div> */}

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