import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
