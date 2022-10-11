import React from 'react';
import { Leopard, Bandari, Kakamega, Nzoia, Sofapaka } from '../../assets/images';

const Partners = () => {
  return (
    <div className='' >
      <p className='font-bold text-2xl text-center text-black'>TRUSTED PARTNERS</p>
      <div className='flex justify-center gap-20 align-center p-10 flex-wrap'>
        <img src={Leopard} alt="Leopard Logo" />
        <img src={Bandari} alt="Bandari Logo" />
        <img src={Kakamega} alt="Kakamega Logo" />
        <img src={Sofapaka} alt="Sofapaka Logo" />
        <img src={Nzoia} alt="Nzoia Logo" />
      </div>
    </div>
  )
}

export default Partners;