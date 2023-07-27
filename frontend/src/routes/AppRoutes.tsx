import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Project from "../components/Project";

const appRouter = Router([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "projects/:projectName",
        element: <Project />,
      },
    ],
  },
  {
    path: "/about",
    element: <>about page</>,
  },
]);

export default appRouter;
