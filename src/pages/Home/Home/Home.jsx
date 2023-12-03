import Navber from "../../shared/Navber/Navber";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ParticlesAnimation from "../ParticlessJs/Particless";
import Projects from "../Projects/Projects";
import Skils from "../skils/Skils";

const Home = () => {
    return (
        <div>       
            <Navber/>    
            <ParticlesAnimation/>
            <Banner/>
            <About/>
            <Skils/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;