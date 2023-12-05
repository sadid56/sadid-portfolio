import Lottie from "lottie-react";
import Navber from "../../shared/Navber/Navber";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ParticlesAnimation from "../ParticlessJs/Particless";
import Projects from "../Projects/Projects";
import Skils from "../skils/Skils";
import earthAnimation from '../../../assets/lottie-animation/earth.json'

const Home = () => {
    return (
        <div>       
            <Navber/>    
            <ParticlesAnimation/>
            <Banner/>
            <div className="w-[100px] right-4 md:left-24 absolute bg-fixed ">
                <Lottie animationData={earthAnimation}/>
            </div>
            <About/>
            <Skils/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;