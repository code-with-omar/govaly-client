import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import UploadProduct from "../pages/UploadProduct/UploadProduct";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/LogIn/LogIn";
import Home from "./../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/upload-product",
    element: <UploadProduct></UploadProduct>,
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
]);
