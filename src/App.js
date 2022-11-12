import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchDataFromAPI from "./components/FetchDataFromAPI";
import Footer from "./components/Footer";

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
            element={<FetchDataFromAPI cat={"general"} />}
          />
          <Route
            exact
            path="/business"
            element={<FetchDataFromAPI cat={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<FetchDataFromAPI cat={"entertainment"} />}
          />
          <Route
            exact
            path="/health"
            element={<FetchDataFromAPI cat={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<FetchDataFromAPI cat={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<FetchDataFromAPI cat={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={<FetchDataFromAPI cat={"technology"} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
