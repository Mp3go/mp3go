import "./App.css";
import Navbar from "./components/header/header.jsx";
import Allalbums from "./components/Albums/albums";
import Home from "./components/Home/home";
import Language from "./components/Language/Language"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import ScrollToTop from "./components/ErrorPage/scroll";
import Error404 from "./components/ErrorPage/404";
import Invalidsearch from "./components/ErrorPage/invalid";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Contactus from "./components/contactus/contactus";
import Footer from "./components/footer/footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="bg-[#DEE4E799] dark:text-white dark:bg-[#202124] p-0 m-0">
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/albums" element={<Allalbums />}></Route>
            <Route path="/contact" element={<Contactus />}></Route>
            <Route path="/language/:language" element={<Language />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/music/:id" element={<Music />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/searchError" element={<Invalidsearch />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
      <Footer />
    </>
  );
}

export default App;
