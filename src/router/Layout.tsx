import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MobileSidebar from "../components/Sidebar/MobileSidebar";
import Sidebar from "../components/Sidebar/Sidebar";
import { DataContext } from "../context/DataContextProvider";

interface mQueryType {
    matches: Boolean;
  }
  
   const Layout = () => {
    const { mediaKey } = useContext(DataContext);
    const [mQuery, setMQuery] = mediaKey;
    const isMobile = window.matchMedia("(max-width: 860px)")
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
  

export default Layout;