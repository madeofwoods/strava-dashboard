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
import DataContextProvider from "./context/DataContextProvider";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/ErrorPages/Error";
import AxiosError from "./pages/ErrorPages/AxiosError";


const Layout = () => {
  return (
      <div className="main--app">
        <Sidebar />
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
  return (
      <Home/>
  )
}

const Errors = () => {
  return (
      <AxiosError/>
  )
}

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
      {
        path: "/site/upload/*",
        element: <Upload />,
        errorElement: <Error />,
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
    element: <Errors />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
