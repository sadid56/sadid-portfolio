/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Icon = ({ url, icon, style }) => {
  return (
    <Link
      to={url}
      target="_blank"
      style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
      className={`btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white ${style}`}>
      {icon}
    </Link>
  );
};

export default Icon;
