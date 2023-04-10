import { Outlet } from "react-router-dom";
import "./App.css";
import FeatureJob from "./components/FeatureJob/FeatureJob";

import JobCategory from "./components/JobCategory/JobCategory";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Nav />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
