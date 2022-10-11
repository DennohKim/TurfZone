import React from "react";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
    <div className='flex flex-row items-center justify-between w-full px-4 py-4'>
      <div className='flex flex-row items-center justify-center'>
        <img src='../../assets/images/logo.png' alt='TurfZone Logo' className='w-16 h-16' />
        <h1 className='text-3xl font-bold text-white'>TurfZone</h1>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black '>Home</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black'>Featured Playgrounds</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black'>Why TurfZone</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black'>Testimonials</a>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600'>Customer Login</a>
        <a href='#' className='px-4 py-2 text-lg font-bold text-black bg-white-500 rounded-md hover:bg-pink-300'>Admin Login</a>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <img src='../../assets/images/footballer1.png' alt='Footballer' className='w-1/2 h-1/2' />
      <h1 className='text-4xl font-bold text-black'>Connecting the turfs</h1>
      <p className='text-lg text-black'>Turf zone is a sportsground and outdoor playground booking portal that provides easy booking facility for schools, clubs and other sports organizations
        across Kenya. Enabling them to easily book a turf playground online - anytime, anywhere.
      </p>
      <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600'>Book Turf</a>
    </div>
  </div>
  );
}

export default HeroSection;