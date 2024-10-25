import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
