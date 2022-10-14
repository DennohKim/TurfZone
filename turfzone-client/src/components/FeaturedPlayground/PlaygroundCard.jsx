import React from 'react'
import { Link } from 'react-router-dom'

const PlaygroundCard = ({ image, location, description, turfName, rates }) => {
  return (
    <div>
        <div className="shadow-md p-4 rounded-md">
        <div>
          <img src={image} alt="turf image" />
        </div>
        <p className='pt-4 font-bold text-lg md:text-xl lg:text-2xl '>{turfName}</p>
        <div className='flex justify-between py-4 '>
          <div>
            <p className='pb-2 font-bold'>Location</p>
            <p >{location}</p>
          </div>
          <div>
            <p className='pb-2 font-bold'>Rates</p>
            <p>{rates}</p>
          </div>
        </div>
        <div className='pb-2'>
          <p className='pb-2 font-bold'>Description</p>
          <p>
            {description}
          </p>
        </div>
        <div>

        <Link to="/signin">
        <button className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-8 py-3 text-sm">Book Turf</button>
        </Link>
                
        </div>
      </div>
    </div>
  )
}

export default PlaygroundCard