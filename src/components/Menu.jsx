const Menu = ({ item }) => {
  const { _id, name, image, price, details } = item;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="p-2">
        <img
          className="w-full h-60 object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>
      <div className="px-4 pb-4 text-left">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="text-gray-600 text-sm lg:text-base mb-4 line-clamp-3">
          {details}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-yellow-600">
            ${price}
          </span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
