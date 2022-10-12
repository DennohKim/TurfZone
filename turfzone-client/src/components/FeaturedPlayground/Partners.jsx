import React from 'react';
import { Leopard, Bandari, Kakamega, Nzoia, Sofapaka, Ulinzi } from '../../assets/images';

const Partners = () => {
  return (
    <div className='' >
      <p className='mt-10 font-semibold text-xl text-center text-black tracking-widest'>TRUSTED PARTNERS</p>
      <div className='flex justify-center gap-20 md:gap-24 lg:gap-28 align-center p-10 flex-wrap w-full scale-75'>
        <img className='object-contain' src={Leopard} alt="Leopard Logo" />
        <img className='object-contain' src={Bandari} alt="Bandari Logo" />
        <img className='object-contain' src={Sofapaka} alt="Sofapaka Logo" />
        <img className='object-contain' src={Nzoia} alt="Nzoia Logo" />
        <img className='object-contain' src={Kakamega} alt="Kakamega Logo" />
        <img className='object-contain' src={Ulinzi} alt="Nzoia Logo" />
      </div>
    </div>
  )
}

export default Partners;