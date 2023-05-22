import "./App.css";
import Navbar from "./components/header/header.jsx";
import Allalbums from "./components/Albums/albums";
import Home from "./components/Home/home";
import Genre from "./components/Genre/Genre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import ScrollToTop from "./components/ErrorPage/scroll";
import Error404 from "./components/ErrorPage/404";
import Invalidsearch from "./components/ErrorPage/invalid";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/albums" element={<Allalbums />}></Route>
          <Route path="/genre/:genreType" element={<Genre />}></Route>
          <Route path="/music/:id" element={<Music />}></Route>
          <Route path="/searchError" element={<Invalidsearch />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
