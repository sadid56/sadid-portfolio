import "./AboutLoading.css";

const AboutLading = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center bg-slate-950">
      <div>
        <div className="center-body mb-[110px]">
          <div className="loader-circle-9">
            Loading
            <span></span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center">Going on about page...</h3>
      </div>
    </div>
  );
};

export default AboutLading;
