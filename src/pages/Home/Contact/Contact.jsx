import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import phonePng from "../../../assets/icons/phone.png";
import homePng from "../../../assets/icons/home.png";
import EmailPng from "../../../assets/icons/email.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async(data) => {
    // console.log(data);
    if (isNaN(data?.number)) {
      return toast.error("Please provide a valid number 😒!");
    }
    // if(data?.number.length < 11){
    //   return toast.error("Your number lenght to short 🤣!")
    // }
    if (data?.number.length !== 11) {
      return toast.error("Phone number must be exactly 11 digits long 😒!");
    }
    const templateParams = {
      name:data?.name,
      email: data?.email,
      number:data?.number,
      message: data?.message,
    };
    
    const res = await emailjs.send(
      "service_ngz2qsb",
      "template_von4hdk",
      templateParams,
      "JlpXCvdYgzXy6-d-i"
    );
    if (res.status === 200) {
     toast.success("Message Send Success 😍!")
     reset()
    } 
    else{
      toast.error("Message Send Faild 🥲!")
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle color={"Contact"} text={"Me"} />
      {/* address */}
      <div  className="grid md:grid-cols-3 gap-10 mx-3 bg-slate-900 p-5 rounded-md shadow-md bg-opacity-60">
        <div className="text-center space-y-1">
          <div className="w-14 mx-auto">
            <img src={phonePng} alt="" />
          </div>
          <h2 className="text-xl font-medium">Call Me</h2>
          <p>
            <small>01739 859756</small>
          </p>
        </div>
        <div className="text-center space-y-1">
          <div className="w-14 mx-auto">
            <img src={homePng} alt="" />
          </div>
          <h2 className="text-xl font-medium">Home</h2>
          <p>
            <small>Bogura, shajahanpur</small>
          </p>
        </div>
        <div className="text-center">
          <div className="w-14 mx-auto space-y-1">
            <img src={EmailPng} alt="" />
          </div>
          <h2 className="text-xl font-medium">Email</h2>
          <p>
            <small>sadidhasan56@gmail.com</small>
          </p>
        </div>
      </div>
      <div className="mt-10">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl text-center md:text-start font-medium mb-5">Have a question ?</h2>
          <div className="flex  flex-col md:flex-row items-center  gap-10">
            <div className="flex-1 space-y-6">
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#e00549] outline-none px-5  py-2 rounded w-full "
                type="text"
                placeholder="Your Name"
                {...register("name")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#e00549] outline-none px-5 py-2 rounded w-full"
                type="email"
                placeholder="Your Email"
                {...register("email")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border[#e00549] outline-none px-5 py-2 rounded w-full"
                type="text"
                placeholder="Your Phone Number"
                {...register("number")}
                required
              />
            </div>
            <div className="flex-1">
              <textarea
                className="bg-transparent border-2 border-slate-500 focus:border-[#e00549] outline-none px-5 py-2 rounded  w-full"
                name="message"
                cols=""
                {...register("message")}
                placeholder="Your Message..."
                required
                rows="7"></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button type="submit" className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group">
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#e00549]"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#e00549]">
                SUBMIT FORM
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
