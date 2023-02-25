import React from 'react'
// import BannerImg from "../Assets/Images/Banner.jpg"
const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden'>
            <img
                className='object-cover w-full h-full'
                src='https://links.papareact.com/0fm'
                // src={BannerImg}
                alt='Banner' />
            <div className='absolute top-1/3 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not Sure Where to Go? Perfect.</p>
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold
                 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner