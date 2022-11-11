import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/general"
            element={<Categories cat={"general"} />}
          />
          <Route
            exact
            path="/business"
            element={<Categories cat={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<Categories cat={"entertainment"} />}
          />
          <Route exact path="/health" element={<Categories cat={"health"} />} />
          <Route
            exact
            path="/science"
            element={<Categories cat={"science"} />}
          />
          <Route exact path="/sports" element={<Categories cat={"sports"} />} />
          <Route
            exact
            path="/technology"
            element={<Categories cat={"technology"} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
