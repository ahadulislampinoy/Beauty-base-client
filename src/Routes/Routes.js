import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
    ],
  },
]);
