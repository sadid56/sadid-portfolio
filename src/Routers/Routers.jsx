import { createBrowserRouter } from "react-router-dom";
// import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";


const Routers =  createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home/>
        //     }
        // ]
    },
    {
        path: '/about',
        element: <About/>
    }
])

export default Routers;