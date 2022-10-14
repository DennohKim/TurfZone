import React from 'react';
import { useState } from 'react';
import BookTurfModal from './BookTurfModal';


const TurfsCard = ({ image, name, location, description, rates, manager_name, manager_email, manager_number, userId, turfId }) => {

  const [modal, setModal] = useState(true);

  return (
    <div>
        <div className="shadow-md p-4 rounded-md">
        <div>
          <img src={image} alt="turf image" />
        </div>
        <p className='pt-4 font-bold text-sm md:text-base lg:text-lg '>{name}</p>
        <div className='flex justify-between py-4 '>
          <div>
            <p className='pb-2 font-semibold'>Location</p>
            <p >{location}</p>
          </div>
          <div>
            <p className='pb-2 font-semibold'>Rates</p>
            <p>Kshs {rates} /hour</p>
          </div>
        </div>
        <div className='pb-2'>
          <p className='pb-2 font-semibold'>Description</p>
          <p>
            {description}
          </p>
        </div>
        <div>
       
        <BookTurfModal turfname={name} rates={rates} manager = {manager_name} managerEmail = {manager_email} managerNumber = {manager_number} userId={userId} turfId={turfId}/>
                
        </div>
      </div>
    </div>
  )
}

export default TurfsCard