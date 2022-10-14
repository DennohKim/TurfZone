import React from 'react'

const TestimonialCard = ({ name, quote, image }) => {
  return (
    <div>
        <div className="shadow-md p-4 rounded-md">
        <div className='flex justify-between py-4 '>
          <div>
            <p >{quote}</p>
          </div>
        </div>
        <div className='flex gap-10'>
          <img src={image} alt="turf image" />
          <div>
            <p className='pb-2 font-bold'>Rates</p>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard