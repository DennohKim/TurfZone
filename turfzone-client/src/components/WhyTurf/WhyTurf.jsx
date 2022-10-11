import React from 'react';
import {Call, Round, Soccer, Rect1, Rect2} from '../../assets/images';


function WhyTurf() {
  return (
    
<section id="whyTurfZone" class="pt-10 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div class="">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              
               <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"> Why TurfZone
               </h2>
               <p class="text-base text-body-color">
               Turf zone is a sportsground and outdoor playground booking portal that provides easy 
               booking facility for schools, clubs and other sports organizations across Kenya.
               Enabling them to easily book a turf playground online - anytime.
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 ">
               <div class=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
               <img src={Call} alt="Call" /> 
               </div>

            
               <p class="text-body-color">
               No more calling around and being on hold for long periods of time.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div class=" p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 " >
               <div class=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
               <img src={Round} alt="Round" />
               </div>
               
               <p class="text-body-color">
               Book a turf in advance.
               </p>
            </div>
         </div>

         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 " >
               <div>
               <img class="w-[70px] h-[70px] flex  items-center justify-center bg-primary rounded-2xl mb-8" src={Soccer} alt="Soccer-field" />
               </div>
               <p class="text-body-color">
               Finding a football pitch is much easier.
               </p>
            </div>
         </div>
         
         <div className='flex justify-center gap-10 align-center p-10 flex-wrap bg-purple-900'>
        <img src={Rect1} alt="User bookings" />
        <img src={Rect2} alt="Turf Playgrounds" />
        </div>
         

         
      </div>
   </div>
</section>



  )}


  export default WhyTurf