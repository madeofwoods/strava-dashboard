// import Sidebar from "./components/Sidebar"

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';

const Layout = () => {
  return (
    <div className="main--app">
      <Sidebar />
      <div className="main--content">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dash",
        element: <Dashboard />
      },
    ]
  },
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
