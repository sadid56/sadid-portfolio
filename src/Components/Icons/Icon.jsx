/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Icon = ({ url, icon }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      to={url}
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
      target="_blank"
      style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
      className={`btn btn-circle btn-sm border bg-transparent border-primary hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white relative`}>
      {icon}
      <div className={`bg-transparent ${isHover ? "glass translate-x-6" : ""} transition-all duration-300 border border-[#03e9f4]  absolute btn btn-circle btn-sm`}></div>
    </Link>
  );
};

export default Icon;
