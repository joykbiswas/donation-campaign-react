
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';
import { useState } from 'react';


const Home = () => {
    const cards =useLoaderData()
    
    const [searchData, setSearchData] = useState('')

        const  filterData = searchData? cards.filter(item =>item.category === searchData)  : cards
        
    
    
    return (
        <div>
            
            <Banner setSearchData={setSearchData} ></Banner>
            <Cards cards={filterData}></Cards>
            
        </div>
    );
};

export default Home;

