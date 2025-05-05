import { Link, useNavigate } from "react-router-dom";
import LoginInImg from "../../assets/signin-image.jpg";
import { FaUserTie } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const SignIn = () => {
  const { signIn } = useContext(AuthContext); // Ensure AuthContext provides this
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Ensure that signIn is working correctly and returns a Promise
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Signed in user:", user);
        navigate("/"); // Navigate to home or dashboard after successful login
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Error logging in. Please check your credentials.");
      });

    form.reset(); // Reset form after submission
  };

  return (
    <div className="h-screen lg:h-screen bg-gray-100">
      <div className="">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-green-900 font-extrabold py-6">
          Welcome To GoValy App
        </h2>
      </div>
      <div className="text-gray-900 flex justify-center bg-gray-100">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 sm:p-8">
            <div className="w-16 h-16 bg-[#612828] rounded-full grid place-content-center mx-auto">
              <FaUserTie className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-green-900 font-extrabold py-6">
              Please Login First
            </h2>

            <form
              onSubmit={handleSignIn}
              className="flex flex-col items-center"
            >
              <div className="w-full flex-1">
                <div className="mx-auto max-w-xs">
                  <input
                    name="email"
                    className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    name="password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-2">Login</span>
                  </button>
                  <p className="mt-4 text-base md:text-lg font-medium text-green-700 ">
                    If you are new{" "}
                    <Link
                      to="/signUp"
                      className="cursor text-rose-900 underline uppercase"
                    >
                      registration
                    </Link>{" "}
                  </p>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by GoValy App Terms of Service Privacy
                    Policy
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${LoginInImg})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
