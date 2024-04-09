import { useState, useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import phonePng from "../../../assets/icons/phone.png";
import homePng from "../../../assets/icons/home.png";
import EmailPng from "../../../assets/icons/email.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "./contact.css"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../../hooks/useMotionAnimate";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [zoomAnimate, upAnimate] = useMotionAnimate();
  const data = [
    {
      icon: phonePng,
      name: "WhatsApp",
      text: "+880 1739859756"
    },
    {
      icon: homePng,
      name: "Home",
      text: "Bogura, Bangladesh"
    },
    {
      icon: EmailPng,
      name: "Email",
      text: "sadidhasan56@gmail.com"
    }
  ];
 
  const onSubmit = async (data) => {
    if (isNaN(data?.number)) {
      return toast.error("Please provide a valid number 😒!");
    }

    const templateParams = {
      name: data?.name,
      email: data?.email,
      number: data?.number,
      message: data?.message,
    };

    setLoading(true);

    const res = await emailjs.send(
      "service_ngz2qsb",
      "template_von4hdk",
      templateParams,
      "JlpXCvdYgzXy6-d-i"
    );

    if (res.status === 200) {
      toast.success("Message Sent Successfully 😍!");
      reset();
      setLoading(false);
    } else {
      toast.error("Message Send Failed 🥲!");
    }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      <SectionTitle color={"Contact"} text={"Me"} />
      <motion.div ref={ref}
          variants={zoomAnimate}
          initial="hidden"
          animate={control} className="grid md:grid-cols-3 gap-10 mx-3 contact-bg p-10 rounded-md shadow-md bg-opacity-60 relative">
        {data.map((item, i) => (
          <div key={i} className="text-center space-y-1">
            <div className="w-10 mx-auto">
              <img src={item.icon} alt="" />
            </div>
            <h2 className="text-xl font-medium text-[#03e9f4]">{item.name}</h2>
            <p className="text-gray-400 font-medium">
              <small>{item.text}</small>
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div ref={ref}
          variants={upAnimate}
          initial="hidden"
          animate={control} className="mt-10 relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl text-center md:text-start font-medium mb-5 text-slate-400">
            Have a any <span className="text-[#03e9f4]">Question</span>?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 w-[350px] md:w-full  py-2 rounded placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Name"
                {...register("name")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="email"
                placeholder="Your Email"
                {...register("email")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Phone Number"
                {...register("number")}
                required
              />
            </div>
            <div className="flex-1">
              <textarea
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                name="message"
                cols=""
                {...register("message")}
                placeholder="Your Message..."
                required
                rows="7"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            {loading ? (
              <button className="btn btn-disabled text-xl">
                Loading{" "}
                <span className="loading loading-spinner text-white"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group"
              >
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#03e9f4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#03e9f4]">
                  SEND MESSAGE
                </span>
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
