import React from "react";
import Testimonials from "./testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

let data = [
  {
    name: "Rachit",
    img: "https://source.unsplash.com/50x50/?portrait?2",
    review:
      "One of the standout features of this website is its vast and diverse music library. They offer an extensive collection of albums from virtually every genre and artist you can imagine. From classic rock to indie pop, from hip-hop to classical symphonies, this platform truly caters to all musical tastes.",
  },
  {
    name: "Rachit",
    img: "https://source.unsplash.com/50x50/?portrait?2",
    review:
      "What sets this website apart from other music platforms is its commitment to quality. Each album is carefully curated and sourced from reputable artists and record labels. The sound quality is impeccable, ensuring that every note, every beat, and every lyric is delivered with utmost clarity and precision.",
  },
  {
    name: "Rachit",
    img: "https://source.unsplash.com/50x50/?portrait?2",
    review:
      "This music album selling website is a paradise for music lovers. With its user-friendly interface, extensive music library, commitment to quality, multiple purchasing options, thriving community, and excellent customer service, it stands head and shoulders above the rest",
  },
];

export default function TestimonialsCarousel() {
  return (
    <>
      <div className="pb-5">
        <h1 class="text-5xl font-bold xl:block hidden leading-tight text-gray-800 dark:text-white text-center mt-[5rem]">
          Music Lovers Speak: Testimonials from Our Happy Customers
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          {data.map((a) => {
            return (
              <SwiperSlide>
                <Testimonials
                  img={a.img}
                  user={a.name}
                  review={a.review}></Testimonials>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
