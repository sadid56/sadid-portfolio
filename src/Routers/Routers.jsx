import { createBrowserRouter } from "react-router-dom";
// import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import Main from "../pages/Main/Main";


const Routers =  createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            }
        ]
    }
    
])

export default Routers;