import React, { useState } from 'react'
import Card from './card'
import {
    Ripple,
    initTE,
} from "tw-elements";
  
initTE({ Ripple });
  

export default function NewReleases() {
  const [newReleases, setNewReleases]= useState([
    {
        image: "https://www.oneclickghana.com/wp-content/uploads/2022/04/Fameye-Album.jpg",
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content"
    },
    {
        image: "https://i2.wp.com/ilovezedmusic.com/wp-content/uploads/2023/04/1681369230307.jpg?fit=600%2C600&ssl=1",
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {
        image: "https://www.audfree.com/images/resource/yout.jpg",
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {
        image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {
        image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content"
    }
])

  return (
    <div className="mx-4 my-4 py-2">
      <h1 className="mt-10 mb-2 text-center font-sans capitalize text-5xl font-medium">New Releases</h1>
      <hr className='w-1/4 mx-auto'/>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 justify-center mt-5'>
        {newReleases.map((card) => (
        <Card image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    
    </div>
  )
}


