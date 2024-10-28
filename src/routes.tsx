// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import FindHelp from "./pages/FindHelp";
import Home from "./pages/Home";
import HowToPrevent from "./pages/HowToPrevent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "how-to-prevent",
        element: <HowToPrevent />,
      },
      {
        path: "find-help",
        element: <FindHelp />,
      },
    ],
  },
]);

export default router;
