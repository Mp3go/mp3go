import { v4 as uuidv4 } from 'uuid';
import Card from './card';
import Carousel from './Carousel';
import { useAxios } from '../../../hooks/useAxios';

// let cards = [
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <Card
//         imagen="https://static.theprint.in/wp-content/uploads/2022/06/PUNJABI-SONGS.jpg"
//         music="Punjabi"
//       />
//     ),
//   },
// ];

export default function Carouselcomp() {
  const { data, error } = useAxios('/albums/data/filter', 'GET');
  console.log('In carrousel comp', data);

  return (
    <div className=''>
      {data ? (
        <Carousel
          cards={data[0].languages.map((item) => {
            return {
              key: uuidv4(),
              content: <Card imagen={item.img} music={item.name} />
            };
          })}
          height='350px'
          width='60%'
          margin='0 auto'
          offset={200}
          showArrows={false}
        />
      ) : null}
    </div>
  );
}
