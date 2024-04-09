import { FaArrowLeft } from "react-icons/fa";
import img from "../../../assets/images/my-logo-removebg-preview.png";
import "./AboutNav.css";
import { useNavigate } from "react-router-dom";
const AboutNave = () => {
    const navigate = useNavigate()
  return (
    <nav style={{backdropFilter:"blur(200px)"}} className="relative py-4 px-2 bg-slate-950">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={img} className="w-[120px]" alt="" />
        <button onClick={()=>navigate("/")} className="back-home-btn"><FaArrowLeft/> Home</button>
      </div>
    </nav>
  );
};

export default AboutNave;
