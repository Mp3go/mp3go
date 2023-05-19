import './App.css';
import Navbar from './components/header/header.jsx'
import Home from "./components/Home/home"
import Genre from './components/Genre/Genre';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/genre/:genreType" element={<Genre />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
