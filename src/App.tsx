// import Sidebar from "./components/Sidebar"

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Tables from "./pages/Tables/Tables";
import LargeMap from "./pages/Maps/LargeMap";
import Graphs from "./pages/Graphs/Graphs";
import Grid from "./pages/Grid/Grid";
import DemoDash from "./pages/Dashboard/DemoDash";
import Upload from "./pages/Upload/Upload";
import DataContextProvider, {
  DataContext,
} from "./context/DataContextProvider";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/ErrorPages/Error";
import AxiosError from "./pages/ErrorPages/AxiosError";
import { useContext, useEffect, useState } from "react";
import MobileSidebar from "./components/Sidebar/MobileSidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface mQueryType {
  matches: Boolean;
}

const Layout = () => {
  const { mediaKey } = useContext(DataContext);
  const [mQuery, setMQuery] = mediaKey;

  const isMobile = window.matchMedia("(max-width: 700px)");

  function handleMediaChange(e: MediaQueryListEvent) {
    setMQuery({ matches: e.matches });
  }

  useEffect(() => {
    isMobile.addEventListener("change", handleMediaChange);
    // Clean-up Function
    return () => isMobile.removeEventListener("change", handleMediaChange);
  }, []);

  return (

      <div className="main--app">
        {mQuery.matches ? <MobileSidebar /> : <Sidebar />}
        <div className="main--content">
          <Navbar />
          <div className="main--content--container">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

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
        path: "/site/grid",
        element: <Grid />,
      },
      {
        path: "/site/demo",
        element: <DemoDash />,
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

function App() {
  return (
    <div className="App">

<ToastContainer 
        className="toast--position"
        autoClose={6000}
        closeOnClick 
        style={{width: "250px"}}
        />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
