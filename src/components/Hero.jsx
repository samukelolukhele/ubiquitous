import React, {useContext} from 'react'
import hero from '../images/landing-page.jpeg';
import Button from './Button';
import { ModalContext } from './context/ModalContext';

export default function Hero() {
  const { handleOpenModal } = useContext(ModalContext);
  return (
    <div className='relative w-screen h-screen'>
        <img className='h-full w-full absolute object-cover' src={hero} />
        <div className='relative bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center'>
            <div className="flex flex-col text-center justify-center items-center">
                <h1 className='font-main text-3xl lg:text-4xl xl:text-5xl font-bold logo mb-1'>Live For The Night</h1>
                <p className='font-light text-base'>The one & only music festival</p>
                <Button className='mt-4 py-1 px-4 text-base font-black bg-[#bb3163]' onClick={handleOpenModal}>Book Tickets</Button>
            </div>
        </div>
    </div>
  )
}
