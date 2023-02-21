// import Sidebar from "./components/Sidebar"

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Tables from "./pages/Tables/Tables";
import LargeMap from "./pages/Maps/LargeMap";
import Graphs from "./pages/Graphs/Graphs";
import Grid from "./pages/Grid/Grid";
import DemoDash from "./pages/Dashboard/DemoDash";
import Upload from "./pages/Upload/Upload";
import DataContextProvider from "./context/DataContextProvider";


const Layout = () => {
  return (
    <DataContextProvider>
      <div className="main--app">
        <Sidebar />
        <div className="main--content">
          <Outlet />
        </div>
      </div>
    </DataContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dash",
        element: <Dashboard />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/maps",
        element: <LargeMap />,
      },
      {
        path: "/graphs",
        element: <Graphs />,
      },
      {
        path: "/grid",
        element: <Grid />,
      },
      {
        path: "/demo",
        element: <DemoDash />,
      },
      {
        path: "/upload/*",
        element: <Upload />,
      },
    ],
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
