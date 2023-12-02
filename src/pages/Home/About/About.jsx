import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="about">
      <SectionTitle color={"About"} text={"Me"}/>
      <div className="flex items-center max-w-6xl mx-auto">
      <div className="flex-1 space-y-2">
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Name</span>: Sadid Hasan
          </h3>
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Age</span>: 20
          </h3>
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Education</span>: HSC (Science)
          </h3>
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Language</span>: Bangla, Hindi,
            English
          </h3>
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Role</span>: React Developer
          </h3>
          <h3 className="text-white text-xl font-medium">
            <span className="text-[#e00549]">Habbit</span>: Gaming, Music,
          </h3>
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-xl font-semibold text-color-change">
            Introduction
          </h2>
          <p>
            My journey began with a fascination for the ever-evolving world of
            technology, and it has led me to specialize in the MERN stack –
            harnessing the power of React.js for intuitive user interfaces,
            Node.js for efficient server-side logic, and MongoDB for seamless
            data management.
          </p>
          <a
            href="#_"
            className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#e00549] text-xl transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-[#e00549] group">
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Download CV
            </span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
