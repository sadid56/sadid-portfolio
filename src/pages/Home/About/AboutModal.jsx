

const AboutModal = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group">
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#f13b81]"
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
                  className="w-5 h-5 text-slate-400"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#f13b81]">
              More Infromation & CV
              </span>
            </button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-slate-900">
    <form method="dialog">
    <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white absolute right-2 top-2">X</button>
    </form>
    <div className="space-y-5 mt-10">
        <h3 className="text-xl font-bold text-center border-b-2 w-fit mx-auto text-[#f13b81]">My Personal Information and Download My CV:</h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Name</span>: Sadid Hasan
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Age</span>: 20
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Education</span>: HSC (Science)
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Language</span>: Bangla, Hindi,
              English
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Role</span>: React Developer
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#f13b81]">Habbit</span>: Gaming, Music
            </h3>
            <button className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group">
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#f13b81]"
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
                  className="w-5 h-5 text-slate-400"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#f13b81]">
              Download CV
              </span>
            </button>
          </div>
  </div>
</dialog>
        </div>
    );
};

export default AboutModal;