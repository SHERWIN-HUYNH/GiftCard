import image1 from './assets/images/room_3.jpg'
import image2 from './assets/images/room_4.webp'

function Holiday() {
  return (
    <section className="text-center">
        <div className=" mx-auto flex flex-col items-center">
            <div className='lg:w-[900px] '>
                <h1 className="lg:text-7xl md:text-4xl text-3xl font-semibold lg:mb-10 md:mb-8 mb-6">Make someone’s holiday</h1>
                <p className="lg:text-xl md:text-lg text-base lg:px-32 md:px-28 px-24 lg:font-normal font-light">Give a getaway to remember with one of our seasonal gift cards. They’re easy to give, easy to love, and never expire.</p>

            </div>
            <div className='flex md:flex-row flex-col gap-y-10 gap-x-10 py-20'>
                <figure className='lg:w-80 lg:h-52 md:w-72 md:h-48 w-full '>
                    <img src={`${image1}`} alt="" className='w-full h-full rounded-2xl' />
                </figure>
                <figure className='lg:w-80 lg:h-52 md:w-72 md:h-48 w-full'>
                    <img src={`${image2}`} alt="" className='w-full h-full rounded-2xl' />
                </figure>
            </div>
        </div>
        <hr className=' w-full' />

    </section>
  )
}

export default Holiday