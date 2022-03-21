import React, { useContext } from 'react'
import Button from './Button'
import Circle from './utils/Circle'
import { ModalContext } from './context/ModalContext';

const DIRECTIONS = {'left': "md:flex-row", 'right': "md:flex-row-reverse"};

export default function About({ title, img, direction,children }) {

    const { handleOpenModal } = useContext(ModalContext);
    
    const handleDirection = DIRECTIONS.hasOwnProperty(direction)
        ? DIRECTIONS[direction]
        : DIRECTIONS['left'];

  return (
    <div className='relative bg-bg w-screen h-max py-14'>
        <div className={`w-full h-full flex flex-col md:flex-row-reverse`}>

        <Circle size={300} position='top-[10%] left-[5%]' />
        {/* <Circle size={350} position='top-[13%] left-[5%]' /> */}
        <Circle size={400} position='top-[0] right-[5%]' />
        <Circle size={280} position='bottom-[0] right-[45%]' />
        </div>
        <div className={`relative wrapper flex flex-col-reverse ${handleDirection} items-center justify-between z-10`}>
            <div className='w-full mt-8 md:w-5/12 xl:w-6/12 h-max text-center md:text-left  flex flex-col'>
                <h1 className='text-brand text-3xl font-black'>{ title }</h1>
                <p className='my-10 text-xl'>{ children }</p>
                <Button className='w-[150px] mx-auto md:mx-0 px-4 py-2 text-sm' onClick={handleOpenModal}>Book Tickets</Button>
            </div>
            <div className={`w-full md:w-6/12 h-full flex justify-center ${direction == 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                <img src={ img } alt="" className="w-[400px] h-[360px] object-cover" />
            </div>
        </div>
    </div>
  )
}
