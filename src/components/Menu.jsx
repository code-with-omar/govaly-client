const Menu = ({ item }) => {
  const { _id, name, image, details, price } = item;

  return (
    <div className="bg-[#F3F3F3] text-center ">
      <img className="w-full" src={image} alt="" />
      <h2 className="text-[#151515] text-base lg:text-2xl md:text-xl font-bold my-4 lg:my-8 md:my-7">
        {name}
      </h2>
      <p className="text-[#151515] text-base mb-4 lg:mb-6 md:mb-5">{details}</p>
    </div>
  );
};

export default Menu;
