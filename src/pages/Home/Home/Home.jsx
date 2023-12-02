import Navber from "../../shared/Navber/Navber";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ParticlesAnimation from "../ParticlessJs/Particless";
import Skils from "../skils/Skils";

const Home = () => {
    return (
        <div>       
            <Navber/>    
            <ParticlesAnimation/>
            <Banner/>
            <About/>
            <Skils/>
        </div>
    );
};

export default Home;