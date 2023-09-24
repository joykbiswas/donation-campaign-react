import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";
import Cards from "../Components/Cards/Cards";


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
                path:'/',
                element:<Cards></Cards>,
                
            }
        ]
    }
])

export default myCreateRouter;