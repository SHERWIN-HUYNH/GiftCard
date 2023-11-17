import image1 from "./assets/images/background.jpg";
import image2 from "./assets/images/room_2.webp";
import image3 from "./assets/images/room_3.jpg";
import image4 from "./assets/images/room_4.webp";
import image5 from "./assets/images/room_5.jpg";
import image6 from "./assets/images/room_6.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Gallery = () => {
  const images = [
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image1,
      alt: "Gallery image 1",
      key: 1,
    },
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image2,
      alt: "Gallery image 2",
      key: 2,
    },
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image3,
      alt: "Gallery image 3",
      key: 3,
    },
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image4,
      alt: "Gallery image 4",
      key: 4,
    },
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image5,
      alt: "Gallery image 5",
      key: 5,
    },
    {
      css: "rounded-xl lg:w-midSize md:w-smallSize w-full h-72 object-cover",
      url: image6,
      alt: "Gallery image 6",
      key: 6,
    },
  ];
  return (
    <>
      <section className="w-full md:grid lg:grid-cols-3 lg:gap-9 md:grid-cols-2 md:gap-6 hidden">
        {images.map((img) => (
          <figure className="w-full">
            <img
              src={img.url}
              alt={img.alt}
              className={img.css}
              key={img.key}
            />
          </figure>
        ))}
      </section>
      <Carousel className="md:hidden" autoPlay infiniteLoop centerMode = {false}   interval={1000}  showThumbs={false}>
        {images.map((img) => (
          <figure className="w-full">
            <img
              src={img.url}
              alt={img.alt}
              className={img.css}
              key={img.key}
            />
          </figure>
        ))}
      </Carousel>
    </>
  );
};
