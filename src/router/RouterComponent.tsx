import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import DemoDash from "../pages/Dashboard/DemoDash";
import AxiosError from "../pages/ErrorPages/AxiosError";
import Error from "../pages/ErrorPages/Error";
import Graphs from "../pages/Graphs/Graphs";
import Home from "../pages/Home/Home";
import LargeMap from "../pages/Maps/LargeMap";
import Tables from "../pages/Tables/Tables";
import Upload from "../pages/Upload/Upload";
import Layout from "./Layout";

const Welcome = () => {
    return <Home />;
  };
  
const NavigateErrors = () => {
    return <AxiosError />;
  };
  
const router = createBrowserRouter([
    {
      path: "/site",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/site",
          element: <DemoDash />,
        },
        {
          path: "/site/dash",
          element: <Dashboard />,
        },
        {
          path: "/site/tables",
          element: <Tables />,
        },
        {
          path: "/site/maps",
          element: <LargeMap />,
        },
        {
          path: "/site/graphs",
          element: <Graphs />,
        },
        {
          path: "/site/demo",
          element: <DemoDash />,
        },
        {
          path: "/site/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <Welcome />,
      errorElement: <Error />,
    },
    {
      path: "/error",
      element: <NavigateErrors />,
    },
    {
      path: "/upload/*",
      element: <Upload />,
    },
  ]);

const RouterComponent = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default RouterComponent;