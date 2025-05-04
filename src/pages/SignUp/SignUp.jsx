import { Link, useNavigate } from "react-router-dom";
import LoginInImg from "./../../assets/signin-image.jpg";
import { FaUserTie } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    const file = e.image[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_upload_preset);
    data.append("cloud_name", import.meta.env.VITE_cloud_name);
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_cloud_name
      }/image/upload`,
      data
    );

    const image = response.data.secure_url;
    console.log(image);
    createUser(e.email, e.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(e.name, image)
          .then(() => {
            const userInfo = {
              name: e.name,
              phone: e.phone,
              district: e.district,
              email: e.email,
              photoURL: image,
            };
            console.log(userInfo);
            navigate("/login");
            axiosPublic.post("/users", userInfo).then((res) => {
              navigate("/login");
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email is already use",
        });
      });
    reset();
  };

  return (
    <div className="h-screen lg:h-screen bg-gray-100">
      <div className="">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-green-900 font-extrabold py-6">
          Welcome To Multi-Vander App
        </h2>
      </div>
      <div className="text-gray-900 bg-gray-100 flex justify-center ">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12  sm:p-8">
            <div className="w-16 h-16 bg-[#612828] rounded-full grid place-content-center mx-auto ">
              <FaUserTie className="w-10 h-10 text-white"></FaUserTie>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-green-900 font-extrabold py-6">
              Please Register
            </h2>

            <div className="flex flex-col items-center">
              <div className="w-full flex-1 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mx-auto max-w-xs">
                    <input
                      {...register("name")}
                      className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="User Name"
                      required
                    />
                    <input
                      {...register("phone")}
                      className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Mobile Number"
                      required
                    />
                    <input
                      {...register("district")}
                      className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="District"
                      required
                    />

                    <input
                      {...register("email")}
                      className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      {...register("password")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      required
                    />

                    <input
                      {...register("image")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="file"
                      placeholder="Photo Upload"
                      required
                    />
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
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
                      <span className="ml-2">Registration</span>
                    </button>

                    <p className="mt-4 text-base md:text-lg font-medium text-green-700 ">
                      If you are already signUp please{" "}
                      <Link
                        to="/login"
                        className="cursor text-rose-900 underline uppercase"
                      >
                        login
                      </Link>{" "}
                    </p>

                    <p className="mt-6 text-xs text-gray-600 text-center">
                      I agree to abide by Mess Tracker Terms of Service Privacy
                      Policy
                    </p>
                  </div>
                </form>
              </div>
            </div>
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

export default SignUp;
