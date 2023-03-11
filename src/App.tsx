import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./router/RouterComponent";

function App() {
  return (
    <div className="App">
      <ToastContainer
        className="toast--position"
        autoClose={6000}
        closeOnClick
        style={{ width: "250px" }}
      />
      <Router />
    </div>
  );
}

export default App;
