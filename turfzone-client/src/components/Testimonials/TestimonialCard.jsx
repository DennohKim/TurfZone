import React from 'react'

const TestimonialCard = ({ name, quote, image }) => {
  return (
    <div>
        <div className="bg-slate-200 shadow-md p-4 rounded-md">
        <div className='flex justify-between py-4 '>
          <div>
            <p >{quote}</p>
          </div>
        </div>
        <div className='flex gap-10'>
          <img src={image} alt="turf image" />
          <div>
            <p className='py-2 font-bold'>{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard