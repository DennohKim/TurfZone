import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-color'>
        <div className='flex flex-row items-center justify-between w-full px-4 py-4'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-white'>Talk to us</h1>
                <p className='text-lg text-white'>+254 234 5678</p>
                <p className='text-lg text-white'>
                <a href='mailto:someone@gmail.com'>Send Email</a>
                </p>
                <p className='text-lg text-white'>1234 TurfZone Street, Nairobi 00100</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-white'>Quick Links</h1>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Home</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Turf Playgrounds</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>About Us</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Testimonials</a>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-white'>Social Media</h1>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Facebook</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Instagram</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Twitter</a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center w-full px-4 py-4'>
        <p className='text-lg text-white'>© 2022 TurfZone. All rights reserved.</p>
        </div>
    </div>
);
};

export default Footer;