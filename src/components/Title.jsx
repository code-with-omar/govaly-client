import Image from "../assets/dessert-bg.jpeg";
const Cover = () => {
  return (
    <div
      className="hero h-[450px] lg:h-[600px] md:h-[550px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content  text-center bg-slate-900 bg-opacity-50  w-3/4 mx-auto px-12 lg:px-48 py-12 lg:py-24 self-center rounded">
        <div className="max-w-md uppercase">
          <h1 className="mb-5 text-white text-4xl md:text-6xl lg:text-7xl font-bold">
            OUR MENU
          </h1>
          <p className="mb-5 text-base md:text-lg lg:text-xl text-white font-semibold">
            Would you like to try a dish?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
