import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navMenu = (
    <>
      <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500">
        <Link to="/">Home</Link>
      </li>

      <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500">
        <Link to="/upload-product">Upload Product</Link>
      </li>

      

      {user ? (
        <>
          {/* <p>{user?.displayName}</p> */}
          <li
            onClick={handleLogOut}
            className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"
          >
            <Link>Log Out</Link>
          </li>
          <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500">
            <Link to="/dashboard/cart">
              <div className="avatar relative ">
                <div className="w-14 rounded-full ">
                  <img className="z-0" src={user?.photoURL} />
                </div>
              </div>
            </Link>
          </li>
        </>
      ) : (
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500">
          <Link to="signup">SIGN Up</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 py-1 lg:py-4 md:py-2 fixed z-10 bg-opacity-40">
      <div className="navbar-start  lg:w-1/6 md:w-1/6">
        <a className="uppercase ml-6 text-2x cursor-pointer w-24 h-24 lg:w-16 lg:h-16 md:w-24 md:h-24 ">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-[#151515] rounded-box z-[1] mt-3 w-52 p-2 shadow "
        >
          {navMenu}
        </ul>
      </div>

      <div className="navbar-end lg:w-5/6 md:w-5/6 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Header;
