import React, { useState } from 'react';
import { motion } from 'framer-motion';


export default function Button({ className, children, onClick }) {


  return (
    <button className={`px-6 cursor-pointer hover:scale-110 ease-in duration-200 py-3 text-xl font-bold bg-brand ${ className }`} onClick={ onClick }>
        { children }
    </button>
  )
}
