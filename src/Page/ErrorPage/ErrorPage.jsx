

const ErrorPage = () => {
    const handleBackHome=()=>{
        
    }
    return (
        <div className="border h-[70vh]  ">
            <div className="h-full flex flex-col justify-center items-center">
            
            <h3 className="text-3xl">You have no donation !!!</h3> 
            <button onClick={handleBackHome} className=" text-2xl ml-4 border-2 bg-red-300 p-2 rounded-xl" >Back Home</button>
            
            </div>
        </div>
    );
};

export default ErrorPage;