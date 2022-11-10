import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Service from "../Pages/Service/Service";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "services", element: <AllServices /> },
      { path: "blog", element: <Blog /> },
      {
        path: "/services/:id",
        element: <Service />,
        loader: ({ params }) =>
          fetch(`https://beauty-base-server.vercel.app/services/${params.id}`),
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
