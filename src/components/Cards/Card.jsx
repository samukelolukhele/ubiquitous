import React from 'react'

export default function Card({ title, img, children}) {
  return (
    <div className='flex flex-col p-4 pb-6 h-max w-full my-2 lg:my-0 lg:w-[30%] lg:h-[450px] bg-card'>
        <div className='h-[50%] w-full'>
            <img className='h-full w-full object-cover' src={img} />
        </div>
        <div className='flex flex-col justify-between items-center h-[55%] w-full py-4 text-center'>
            <h1 className='text-2xl lg:text-xl font-bold text-center font-logo my-4 text-brand'>{title}</h1>
            <p className='text-xl lg:text-base mb-auto'>{children}</p>
        </div>
    </div>
  )
}
