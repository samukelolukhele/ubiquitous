import React from 'react'


export default function Circle({ size, position }) {



  return (
    <div style={{ height: size, width: size }} className={`circle ${position}`} />
  )
}
