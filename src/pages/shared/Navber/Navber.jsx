import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <nav className="bg-[#010610] w-full sticky top-0 z-50">
            <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto  py-3 ">
            <h1 className="text-2xl font-bold text-white">Sadid</h1>
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