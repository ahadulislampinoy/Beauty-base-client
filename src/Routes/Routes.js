import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllServices from "../Pages/AllServices/AllServices";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "services", element: <AllServices /> },
      {
        path: "/services/:id",
        element: <Service />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
