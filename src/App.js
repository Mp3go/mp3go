import './App.css';
import Navbar from './components/header/header.jsx'
import NewFeature from './components/Main/NewReleases.js';
import FeaturedAlbums from './components/Main/FeaturedAlbums';
import Carousel from './components/Carousel/carouselcomplete'

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <NewFeature />
    <FeaturedAlbums />
    </>
  );
}

export default App;
