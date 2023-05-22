import "./App.css";
import Navbar from "./components/header/header.jsx";
import Allalbums from "./components/Albums/albums";
import Home from "./components/Home/home";
import Genre from "./components/Genre/Genre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/albums' element={<Allalbums />}></Route>
          <Route path='/genre/:genreType' element={<Genre />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="/music/:id" element={<Music />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
