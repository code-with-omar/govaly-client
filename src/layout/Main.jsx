import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  const location = useLocation().pathname;

  return (
    <div className="bg-white" style={{ background: "white" }}>
      {/* {noHeaderFooter || <Header></Header>} */}
      <Header></Header>
      <Outlet></Outlet>
      {/* {noHeaderFooter || <Footer></Footer>} */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
