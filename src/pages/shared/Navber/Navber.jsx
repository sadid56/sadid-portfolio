import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <nav style={{backdropFilter:'blur(50px)'}} className=" w-full fixed top-0 z-50 hidden">
            <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto  py-6 ">
            <h1 className="text-3xl  text-white italic-font">Sadid</h1>
            <ul className="text-white flex items-center gap-7">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><a href='#about'>About</a></li>
                <li><NavLink>Skils</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>Projects</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
            </ul>
        </div>
        </nav>
    );
};

export default Navber;