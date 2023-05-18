import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./Carousel"
let cards = [
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
    )
  },{
    key: uuidv4(),
    content: (
      <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
    )
  },{
    key: uuidv4(),
    content: (
      <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
    )
  },{
    key: uuidv4(),
    content: (
      <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
    )
  },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg" music="Punjabi"/>
      )
    },
  ];

export default function carouselcomp(){
    return (
    <div className="mt-[200px]">
      <Carousel
        cards={cards}
        height="350px"
        width="75%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
    )
}