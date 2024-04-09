import { Helmet } from "react-helmet-async";
import "./aboutbanner.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";

const imgData = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const AboutPageBanner = () => {
  return (
    <section>
      <Helmet>
        <title>Sadid - About</title>
      </Helmet>
      <div className="about-img-card relative">
        {imgData.map((item, i) => (
          <div
            key={i}
            className="group relative cursor-pointer items-center justify-center overflow-hidden hover:flex-[4] md:hover:flex-[2]">
            <div className="">
              <img
                className="h-full w-full object-cover rounded-md transition-transform duration-500  "
                src={item?.img}
                alt=""
              />
            </div>
            <div className="dark-overlay absolute rounded-md inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black/90"></div>
            <div className="image-overlay absolute rounded-md inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <div>{/* content */}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPageBanner;
