import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";
import Cards from "../Components/Cards/Cards";
import Card from "../Components/Card/Card";


const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/donation.json')
                
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
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