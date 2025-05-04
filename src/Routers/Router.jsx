import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import Login from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import UploadProduct from "../pages/UploadProduct/UploadProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/upload-product",
    element: <UploadProduct />,
  },
]);
