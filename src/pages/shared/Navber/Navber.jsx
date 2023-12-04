import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const Navber = () => {
    const [isToggle, setIsToggle] = useState(false)
    return (
        <nav style={{backdropFilter:'blur(50px)'}} className=" w-full fixed top-0 z-50">
            <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto  py-6 ">
            <h1 className="text-3xl  text-white italic">Sadid</h1>
        <ul className={`text-white flex uppercase ${isToggle ? 'flex-col absolute md:block top-20 right-0 bg-slate-500 md:bg-transparent p-16 rounded-l-2xl shadow-2xl': 'hidden md:flex'} items-center gap-7`}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><a href='#about'>About</a></li>
                <li><NavLink>Skils</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>Projects</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
            </ul>
            <button className="md:hidden text-3xl" onClick={()=>setIsToggle(!isToggle)}>{isToggle ? <IoMdClose/>: <FiAlignJustify/>}</button>
        </div>
        </nav>
    );
};

export default Navber;