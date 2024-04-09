import { useEffect, useState } from "react";
import AboutPageBanner from "../../Components/AboutPageBanner/AboutPageBanner";
import Footer from "../Home/Footer/Footer";
import ParticlesAnimation from "../Home/ParticlessJs/Particless";
import AboutNave from "../shared/AboutNave/AboutNave";
import AboutLading from "../shared/AboutLoading/AboutLading";
const LoadingSpinner = () => {
  return (
    <div className="">
      <AboutLading />
    </div>
  );
};

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // loading 
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div>
          <ParticlesAnimation />
          <AboutNave />
          <AboutPageBanner />
          <Footer />
        </div>
      )}
    </>
  );
};

export default AboutPage;
