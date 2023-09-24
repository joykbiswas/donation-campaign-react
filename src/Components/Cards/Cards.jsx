
import Card from "../Card/Card";
import PropTypes from 'prop-types';
 
const Cards = ({cards}) => {
    

    // const cards = useLoaderData()
    // console.log(cards);
    return (
        <div>
            <h1>All data show</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    cards.map(card=><Card key={card.id} card={card}></Card>)
                }
            </div>

        </div>
    );
};

Cards.propTypes={
    cards:PropTypes.array
}

export default Cards;