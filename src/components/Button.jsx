import React, { useState } from 'react';
import { motion } from 'framer-motion';


export default function Button({ className, children, onClick }) {


  return (
    <button className={`px-6 py-3 text-xl font-bold bg-brand ${ className }`} onClick={ onClick }>
        { children }
    </button>
  )
}
