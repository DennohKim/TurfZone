import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center bg-purple w-full'>
        <div className='flex flex-row items-center justify-evenly align-top w-4/5 mx-auto px-4 py-4'>
            <div className='flex flex-col '>
                <h1 className='text-base md:text-lg lg:text-xl font-bold pink-text'>Talk to us</h1>
                <p className='text-md py-2 text-white'>+254 234 5678</p>
                <p className='text-lg py-2 text-white'>
                <a href='mailto:someone@gmail.com'>Send Email</a>
                </p>
                <p className='text-lg text-white'>1234 TurfZone Street, <br/>Nairobi 00100</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold pink-text'>Quick Links</h1>
                <a href='#' className='px-4 py-2 text-md text-white'>Home</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Turf Playgrounds</a>
                <a href='#' className='px-4 py-2 text-md text-white'>About Us</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Testimonials</a>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold pink-text'>Social Media</h1>
                <a href='#' className='px-4 py-2 text-lg text-white'>Facebook</a>
                <a href='#' className='px-4 py-2 text-lg text-white'>Instagram</a>
                <a href='#' className='px-4 py-2 text-lg text-white'>Twitter</a>
            </div>
        </div>
        
        <p className='text-lg text-white text-center'><span className="pink-text">© 2022 TurfZone</span> All rights reserved.</p>
        
    </div>
);
};

export default Footer;