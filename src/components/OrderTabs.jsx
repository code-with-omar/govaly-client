import Menu from "./Menu";

const OrderTabs = ({ item }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 w-11/12 xl:w-4/5 lg:w-4/5 mx-auto">
      {item.map((item) => (
        <Menu key={item._id} item={item}></Menu>
      ))}
    </div>
  );
};

export default OrderTabs;
