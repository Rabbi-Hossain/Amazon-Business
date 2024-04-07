
import { createBrowserRouter } from 'react-router-dom';
import MainRouter from '../../MainRouter/MainRouter';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Dashboard from '../Dashboard/Dashboard';
import ProductDetails from '../ProductDetails/ProductDetails';
import Profile from '../../Components/Profile/Profile';
import EaditProfile from '../../Components/EaditProfile/EaditProfile';
import DashboardLayout from '../DashboardLayout/DashboardLayout';


const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRouter></MainRouter>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                loader:()=>fetch('https://dummyjson.com/products'),
                element: <Products></Products>
            },
            {
                path:'/product/:productId',
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.productId}`),
                element:<ProductDetails></ProductDetails>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:'/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<Profile></Profile>
                    },
                    {
                        path:'/dashboard/editprofile',
                        element:<EaditProfile></EaditProfile>
                    }
                ]
            }
        ]
    }
])

export default myCreateRouter;