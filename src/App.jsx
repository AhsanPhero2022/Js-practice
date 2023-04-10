import "./App.css";
import FeatureJob from "./components/FeatureJob/FeatureJob";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <JobCategory />
      <FeatureJob />
    </div>
  );
}

export default App;
