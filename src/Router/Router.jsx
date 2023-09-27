import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import Donations from "../Page/Donations/Donations";
import Statistics from "../Page/Statistics/Statistics";
import Card from "../Components/Card/Card";
import ErrorPage from "../Page/ErrorPage/ErrorPage";


const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/donation.json')
                
            },
            {
                path:'/donation',
                element:<Donations></Donations>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                
            },
            
            {
                path:'/card/:id',
                element:<Card></Card>,
                loader:()=>fetch(`/donation.json`)
               
            }
        ]
    }
])

export default myCreateRouter;