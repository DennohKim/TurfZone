import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-purple'>
        <div className='flex flex-row items-center justify-between w-full px-4 py-4'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold pink-text'>Talk to us</h1>
                <p className='text-md text-white'>+254 234 5678</p>
                <p className='text-lg text-white'>
                <a href='mailto:someone@gmail.com'>Send Email</a>
                </p>
                <p className='text-lg text-white'>1234 TurfZone Street, Nairobi 00100</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold pink-text'>Quick Links</h1>
                <a href='#' className='px-4 py-2 text-md font-bold text-white'>Home</a>
                <a href='#' className='px-4 py-2 text-md font-bold text-white'>Turf Playgrounds</a>
                <a href='#' className='px-4 py-2 text-md font-bold text-white'>About Us</a>
                <a href='#' className='px-4 py-2 text-md font-bold text-white'>Testimonials</a>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold pink-text'>Social Media</h1>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white'>Facebook</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white'>Instagram</a>
                <a href='#' className='px-4 py-2 text-lg font-bold text-white'>Twitter</a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center w-full px-4 py-4'>
        <p className='text-lg text-white'><span className="pink-text">© 2022 TurfZone</span> All rights reserved.</p>
        </div>
    </div>
);
};

export default Footer;