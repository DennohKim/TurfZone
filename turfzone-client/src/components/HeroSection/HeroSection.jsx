import React from "react";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
    <div className='flex flex-row items-center justify-between w-full px-4 py-4'>
      <div className='flex flex-row items-center justify-center'>
        <img src='https://www.figma.com/file/BGJQUi8O4Hcrzglhx2M3pL/Sports-Turf-Booking-App?node-id=132%3A215' alt='TurfZone Logo' className='w-16 h-16' />
        <h1 className='text-3xl font-bold text-white'>TurfZone</h1>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Home</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Featured Playgrounds</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Why TurfZone</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Testimonials</a>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600'>Customer Login</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black bg-white-500 rounded-md hover:bg-pink-300'>Admin Login</a>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <img src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617670009/turfzone/footballer.png' alt='Footballer' className='w-1/2 h-1/2' />
      <h1 className='text-4xl font-bold text-white'>Connecting the turfs</h1>
      <p className='text-lg text-white'>Turf zone is a sportsground and outdoor playground booking portal that provides easy booking facility for schools, clubs and other sports organizations
        across Kenya. Enabling them to easily book a turf playground online - anytime,
        anywhere.
      </p>
      <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Book Turf</a>
    </div>
  </div>  );
}

export default HeroSection;