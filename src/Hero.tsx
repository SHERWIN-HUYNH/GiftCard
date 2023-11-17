import './carousel.css'
import slide1 from './assets/images/room_2.webp'
import slide2 from './assets/images/slide2.jpg'
import slide3 from './assets/images/slide3.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Ket hop useState + useEffect
export const Hero = () => {
    const images = [
        {
            key:1,
            url:slide1,
            css:"w-full h-[350px] rounded-xl lg:w-midSize md:w-smallSize  object-cover",
            alt:"Slide 1"
        },
        {
            key:2,
            url:slide2,
            css:"w-full h-[350px] rounded-xl lg:w-midSize md:w-smallSize  object-cover",
            alt:"Slide 2"
        },
        {
            key:3,
            url:slide3,
            css:"w-full h-[350px] object-cover  rounded-xl lg:w-midSize md:w-smallSize",
            alt:"Slide 3"
        }

    ]
    // useEffect(()=>{
    //   let interval = setInterval(
    //     ,2000)
    // },[])
  return (

    <section>
      <div className='cssCarousel'>
      <Carousel  autoPlay infiniteLoop centerMode={false} interval={1000}  showThumbs={false}>
        {images.map((img) => (
          <figure className="w-full">
            <img
              className={img.css}
              src={img.url}
              alt={img.alt}
              key={img.key}
             
            />
            
          </figure>
        ))}
      </Carousel>
      </div>
     
    </section>
  )
}
