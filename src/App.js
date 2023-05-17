import './App.css';
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Carousel/card";
import Carousel from "./components/Carousel/Carousel"

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.vhv.rs/dpng/d/15-154167_jazz-music-icon-png-transparent-png.png" music="Jazz"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8SGlwJTIwSG9wJTIwbXVzaWMlMjBzeW1ib2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" music="Hip-Hop"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://cdn-icons-png.flaticon.com/512/26/26817.png" music="Rock"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://previews.123rf.com/images/bsd555/bsd5552010/bsd555201000360/156730694-k-pop-black-glyph-icon-musical-genres-microphone-with-vinyl-giving-love-hand-music-loving.jpg" music="PoP"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
      )
    }
  ];
  return (
    <div className="mt-5">
      <Carousel
        cards={cards}
        height="350px"
        width="75%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default App;
