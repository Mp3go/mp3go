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
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50 dark:text-white dark:bg-[#202124] p-0 m-0">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/albums" element={<Allalbums />}></Route>
            <Route path="/genre/:genreType" element={<Genre />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/music/:id" element={<Music />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/searchError" element={<Invalidsearch />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
