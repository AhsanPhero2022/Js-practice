import "./App.css";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <JobCategory />
    </div>
  );
}

export default App;
