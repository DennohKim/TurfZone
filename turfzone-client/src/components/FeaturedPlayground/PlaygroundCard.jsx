import React from 'react'

const PlaygroundCard = ({ image, location, description, turfName, rates }) => {
  return (
    <div>
        <div className="shadow-md p-4">
        <div>
          <img src={image} alt="turf image" />
        </div>
        <p className='pt-4 font-bold text-xl md:text-2xl lg:text-3xl '>{turfName}</p>
        <div className='flex justify-between '>
          <div>
            <p>Location</p>
            <p>{location}</p>
          </div>
          <div>
            <p>Rates</p>
            <p>{rates}</p>
          </div>
        </div>
        <div>
          <p>Description</p>
          <p>
            {description}
          </p>
        </div>
        <div>
          <button>Book Turf</button>
        </div>
      </div>
    </div>
  )
}

export default PlaygroundCard