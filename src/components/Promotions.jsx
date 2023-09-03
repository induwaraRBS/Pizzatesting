import React from 'react'
import Single from '../assets/Single.jpg'
function Promotions() {
  return (
    <div className='w-full h-screen py-[-10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border '>
                
                <img  className='w-20 mx-auto'   src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Promotions</h2>
                <p>$14</p>
                <div>
                    <p>Have thi to home</p>
                    <p>Get the promotions</p>
                    <p>get this please</p>
                </div>
                <button>Get it</button>
            </div>
        </div>
    </div>
  )
}

export default Promotions