
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';
import DonationCard from '../../Components/DonationCards/DonationCards';


const Home = () => {
    const cards =useLoaderData()
    
    return (
        <div>
            
            <Banner></Banner>
            <Cards cards={cards}></Cards>
            
        </div>
    );
};

export default Home;