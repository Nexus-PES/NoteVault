import React from 'react'

function Footer(props) {
  return (
    <div className='fixed gap-4  flex left-0 bottom-0 bg-dark-100 w-full h-9 px-2 py-2'>
        <div className='flex gap-4 text-xs grow font-poppins'>
        <p className='mx-1'>.....words</p>
        <p className='mx-1'>Created on:...........</p>
        <p className='mx-1'>Last Modified on:.............</p>
        </div>
        <div className='flex grow text-xs flex-row-reverse font-poppins'>
        <p className=''>Recording <span className='text-secondary'>............</span></p>
        </div>
    </div>
  )
}

export default Footer