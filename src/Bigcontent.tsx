import bigBg1 from './assets/images/background.jpg'
import bigBg2 from './assets/images/room_2.webp'

export default function Bigcontent() {
  return (
    <>
    
     <section className='w-full h-[900px] overflow-hidden'>
        <h1 className=' lg:text-9xl md:text-8xl text-7xl  font-bold text-center'>Airbnb <br/> gift cards</h1>
        <figure className='relative w-full py-32 '>
            <img src={`${bigBg1}`} alt="Thumbnail_01" className='absolute z-10 w-bigSize h-80 object-cover rounded-3xl -rotate-[20deg] lg:right-[15rem] lg:bottom-36 lg:top-17 md:top-[13rem] md:-right-1 top-72 shadow-[15px_23px_15px_5px_rgba(0,0,0,0.51)]'/>
            <img src={`${bigBg2}`} alt="Thumbnail_02" className='absolute z-20 w-bigSize h-80 object-cover rounded-3xl rotate-[15deg] lg:left-[17rem] lg:top-28 md:left-5 md:top-7 top-20 shadow-[15px_23px_15px_5px_rgba(0,0,0,0.51)] '/>
        </figure>
    </section>
    </>
   
  )
}
