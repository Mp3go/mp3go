import './App.css';
import Navbar from './components/header/header.jsx'
import NewFeature from './components/Main/NewReleases.js';
import FeaturedAlbums from './components/Main/FeaturedAlbums';

function App() {
  return (
    <>
    <Navbar/>
    <NewFeature />
    <FeaturedAlbums />
    </>
  );
}

export default App;
