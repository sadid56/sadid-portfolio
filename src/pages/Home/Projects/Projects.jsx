import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";

const Projects = () => {
  const [isClose, setIsClose] = useState(false);
  const [isTechnology, setIsTechnology] = useState(false);
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/projects.json");
      return res.data;
    },
  });

  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle color={"Projects"} />
      <div className="grid md:grid-cols-2 mx-3 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project?.id}
            className="bg-slate-900 p-3 rounded-md bg-opacity-60">
            <div className=" h-48 overflow-y-auto ">
              <img src={project?.project_thumnail} className="w-full" alt="" />
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between my-4">
                <h1 className="text-xl font-medium uppercase">
                  {project?.project_name}
                </h1>
                <div className="relative flex items-center gap-2">
                  <button
                    style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                    className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                    onClick={() => setIsTechnology(!isTechnology)}>
                    {isTechnology ? <IoMdClose /> : <GrTechnology />}
                  </button>
                  {isTechnology && (
                    <div className="absolute bg-slate-900 p-5 rounded-md right-24 top-8 space-y-3 w-[180px]">
                      <p>
                        Technologies: 👇
                        <br />
                        <small>
                          {project?.technology.map((tech, index) => (
                            <span key={tech}>
                              {index + 1 + " " + tech}
                              {index < project.technology.length - 1 && <br />}
                            </span>
                          ))}
                        </small>
                      </p>
                    </div>
                  )}
                  <button
                    style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                    className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                    onClick={() => setIsClose(!isClose)}>
                    {isClose ? <IoMdClose /> : <FaGithub />}
                  </button>
                  {isClose && (
                    <ul className="absolute bg-slate-800 p-5 rounded-md right-10 w-[180px] top-8 space-y-3">
                      <li>
                        <a
                          className="btn btn-sm"
                          href={project?.project_source[0]?.client_github_link}
                          target="_blank"
                          rel="noreferrer">
                          Front End
                          <FaGithub />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-sm"
                          href={project?.project_source[1]?.server_github_link}
                          target="_blank"
                          rel="noreferrer">
                          Backend
                          <FaGithub />
                        </a>
                      </li>
                    </ul>
                  )}
                  <a
                    style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                    className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                    href={project?.project_source[2]?.live_link}
                    target="_blank"
                    rel="noreferrer">
                    <TbWorld />
                  </a>
                </div>
              </div>
              <p>{project?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
