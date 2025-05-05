import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import UploadProduct from "../pages/UploadProduct/UploadProduct";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

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
  { path: "/login", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);
