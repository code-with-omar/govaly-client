import Image from "../assets/banner.png";
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
          <h1 className="mb-5 text-white text-2xl md:text-4xl lg:text-5xl font-bold">
            SHOP THE LOOK
          </h1>
          <p className="mb-5 text-base lg:text-base text-white font-semibold">
            Discover yourself
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
