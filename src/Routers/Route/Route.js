import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import HeartCheckDetails from "../../Pages/Home/HeartCheck/HeartCheckDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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