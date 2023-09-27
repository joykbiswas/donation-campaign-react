import PropTypes from 'prop-types'; 
import {  useState } from "react";

const Banner = ({setSearchData}) => {
  const [search, setSearch] = useState('')
  
  
  const handleSearch=() =>{
    setSearchData(search);
  }
  return (
    <div>
      <div className="relative grid h-[20rem] w-full max-w-[100rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent 
           bg-[url('https://i.ibb.co/jbkhxMy/Clothing.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/80 via-white/80"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12 ">
            <h2 className="text-2xl pb-4">I Grow By Helping People In Need</h2>
         <div className="flex">
         <input 
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className="p-3 text-white rounded-lg bg-blue-400" onClick={()=>handleSearch()}>search</button>
         </div>
        </div>
      </div>

    </div>
  );
};

Banner.propTypes={
  setSearchData:PropTypes.array,
  
}
export default Banner;
