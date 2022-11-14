import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import HeartCheckDetails from "../../Pages/Home/HeartCheck/HeartCheckDetails";
import Home from "../../Pages/Home/Home/Home";
import AllService from "../../Pages/Home/Services/AllService";
import ShowService from "../../Pages/Home/Services/ShowService";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/servicesitem',
                element: <AllService></AllService>,
            },
            {
                path: '/services/:id',
                element: <ShowService></ShowService>,
                loader: ({ params }) => fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/heartcheckdetails',
                element: <HeartCheckDetails></HeartCheckDetails>
            }

        ]
    }

])

export default router;