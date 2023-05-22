import './App.css';
import Navbar from './components/header/header.jsx';
import Allalbums from './components/AlbumsPage/albums';
import Home from './components/Home/home';
import Genre from './components/Genre/Genre';
import Cart from './components/Cart/Cart';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
